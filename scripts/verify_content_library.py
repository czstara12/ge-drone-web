#!/usr/bin/env python3
from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LIB_ROOT = ROOT / "docs" / "content-library"

REQUIRED_SOURCES = [
    "out/p/3hao.md",
    "out/p/4hao.md",
    "out/p/5hao.md",
    "out/p/6hao.md",
    "out/p/7hao.md",
    "out/p/liyumenx8.md",
    "out/liyumenx8.md",
    "out/p/456wiki.md",
    "out/p/gd-sim-wsl.md",
    "out/p/gd-sim-matlab.md",
]

REQUIRED_DOCS = [
    "README.md",
    "products/sanhao.md",
    "products/sihao.md",
    "products/wuhao.md",
    "products/liuhao.md",
    "products/qihao.md",
    "products/liyumen-x8.md",
    "wiki/456-series-operation-guide.md",
    "wiki/sim-wsl-install-guide.md",
    "wiki/sim-matlab-vm-guide.md",
    "sources/source-inventory.md",
    "sources/image-inventory.md",
]

SENSITIVE_TERMS = ["密码", "激活码", "QQ", "付款", "购买"]


def fail(message: str) -> None:
    raise SystemExit(f"FAIL: {message}")


def check_required_docs() -> None:
    for doc in REQUIRED_DOCS:
        path = LIB_ROOT / doc
        if not path.exists():
            fail(f"缺少必要文档：{path.relative_to(ROOT)}")
        if path.stat().st_size == 0:
            fail(f"必要文档为空：{path.relative_to(ROOT)}")


def check_source_inventory() -> None:
    inventory = (LIB_ROOT / "sources" / "source-inventory.md").read_text(
        encoding="utf-8"
    )
    for source in REQUIRED_SOURCES:
        if source not in inventory:
            fail(f"来源清单缺少：{source}")


def manifest_rows(path: Path) -> list[str]:
    return [
        line
        for line in path.read_text(encoding="utf-8").splitlines()
        if line.startswith("| `")
    ]


def resolve_manifest_path(manifest: Path, local_name: str) -> Path:
    if "/" in local_name:
        return ROOT / local_name
    return manifest.parent / local_name


def check_manifests() -> None:
    image_inventory = LIB_ROOT / "sources" / "image-inventory.md"
    if not image_inventory.exists():
        fail("缺少图片总清单")

    manifests = list((LIB_ROOT / "assets").glob("**/_manifest.md"))
    if not manifests:
        fail("没有找到任何图片 manifest")

    seen_files: set[Path] = set()
    for manifest in manifests:
        rows = manifest_rows(manifest)
        if not rows:
            fail(f"图片 manifest 没有记录：{manifest.relative_to(ROOT)}")
        for row in rows:
            match = re.match(r"\| `([^`]+)` \|", row)
            if not match:
                fail(f"图片 manifest 行格式错误：{manifest.relative_to(ROOT)}: {row}")
            local_name = match.group(1)
            local_path = resolve_manifest_path(manifest, local_name)
            if local_path in seen_files:
                continue
            seen_files.add(local_path)
            if not local_path.exists():
                fail(f"manifest 引用了不存在的图片：{local_path.relative_to(ROOT)}")

    inventory_rows = manifest_rows(image_inventory)
    if len(inventory_rows) < len(manifests):
        fail("图片总清单记录数量异常")


def check_sensitive_readiness_notes() -> None:
    for doc in (LIB_ROOT / "products").glob("*.md"):
        text = doc.read_text(encoding="utf-8")
        if any(term in text for term in SENSITIVE_TERMS):
            if "网站可用性" not in text:
                fail(f"产品文档含敏感销售/账号信息但缺少网站可用性说明：{doc}")


def check_chinese_document_labels() -> None:
    forbidden = [
        "Quick Summary",
        "Product Positioning",
        "Core Selling",
        "Key Specifications",
        "Website Rewrite",
        "Image Assets",
        "Source Notes",
    ]
    for doc in LIB_ROOT.glob("**/*.md"):
        text = doc.read_text(encoding="utf-8")
        for phrase in forbidden:
            if phrase in text:
                fail(f"发现未中文化模板标题 `{phrase}`：{doc.relative_to(ROOT)}")


def content_docs() -> list[Path]:
    return sorted((LIB_ROOT / "products").glob("*.md")) + sorted((LIB_ROOT / "wiki").glob("*.md"))


def iter_markdown_images(text: str) -> list[tuple[str, str]]:
    return re.findall(r"!\[([^\]]*)\]\(([^)]+)\)", text)


def normalize_markdown_destination(destination: str) -> str:
    destination = destination.strip()
    if destination.startswith("<") and destination.endswith(">"):
        destination = destination[1:-1]
    return destination


def is_external_image(destination: str) -> bool:
    return destination.startswith(("http://", "https://"))


def check_inline_image_structure() -> None:
    for doc in content_docs():
        text = doc.read_text(encoding="utf-8")
        rel = doc.relative_to(ROOT)
        if "<img" in text.lower():
            fail(f"文档仍残留 HTML 图片标签：{rel}")
        if "## 图片资产" in text:
            fail(f"文档仍包含旧的末尾图片资产堆叠章节：{rel}")

        images = iter_markdown_images(text)
        if not images:
            fail(f"正文文档没有任何图片引用：{rel}")

        for _, destination in images:
            destination = normalize_markdown_destination(destination)
            if is_external_image(destination):
                continue
            image_path = (doc.parent / destination).resolve()
            try:
                image_path.relative_to(ROOT)
            except ValueError:
                fail(f"图片引用越过项目目录：{rel} -> {destination}")
            if not image_path.exists():
                fail(f"图片引用不存在：{rel} -> {destination}")

        pending_section = text.find("## 待替换原始图片")
        source_section = text.find("## 网站可用性与来源备注")
        if pending_section != -1 and source_section != -1 and pending_section > source_section:
            fail(f"待替换原始图片清单应位于来源备注前，便于整理：{rel}")


def main() -> int:
    check_required_docs()
    check_source_inventory()
    check_manifests()
    check_sensitive_readiness_notes()
    check_chinese_document_labels()
    check_inline_image_structure()
    print("content library verification passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
