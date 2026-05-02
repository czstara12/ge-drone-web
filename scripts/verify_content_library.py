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
    "internal/sources/source-inventory.md",
    "internal/sources/image-inventory.md",
]

FORBIDDEN_CONTENT_PATTERNS = [
    "描述已自动生成",
    "中度可信度描述已自动生成",
    "低可信度描述已自动生成",
    "网站可用性与来源备注",
    "来源文件：",
    "本文档按原始资料",
    "source_docs:",
    "assets_manifest:",
    "```plain",
    "```text",
]

ALLOWED_FRONTMATTER_KEYS = {"title", "category", "product", "updated"}

SHELL_IN_C_FENCE_PATTERNS = [
    "./",
    "roslaunch",
    "rosrun",
    "source ",
    "cd ",
    "python ",
    "sudo ",
    "qidongd435",
    "tizi",
    "nmcli",
]


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
    inventory = (
        LIB_ROOT / "internal" / "sources" / "source-inventory.md"
    ).read_text(encoding="utf-8")
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
    local = local_name.strip()
    if local.startswith("docs/") or local.startswith("out/"):
        return ROOT / local
    if local.startswith("assets/"):
        return LIB_ROOT / local
    if "/" in local:
        return LIB_ROOT / "assets" / local

    try:
        relative_manifest_parent = manifest.parent.relative_to(
            LIB_ROOT / "internal" / "manifests"
        )
    except ValueError:
        return manifest.parent / local
    return LIB_ROOT / "assets" / relative_manifest_parent / local


def check_manifests() -> None:
    image_inventory = LIB_ROOT / "internal" / "sources" / "image-inventory.md"
    if not image_inventory.exists():
        fail("缺少图片总清单")

    manifests = list((LIB_ROOT / "internal" / "manifests").glob("**/_manifest.md"))
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
    return sorted((LIB_ROOT / "products").glob("*.md")) + sorted(
        (LIB_ROOT / "wiki").glob("*.md")
    )


def line_number(text: str, index: int) -> int:
    return text.count("\n", 0, index) + 1


def frontmatter_keys(text: str, rel: Path) -> set[str]:
    if not text.startswith("---\n"):
        return set()
    end = text.find("\n---", 4)
    if end == -1:
        fail(f"frontmatter 未闭合：{rel}")
    keys: set[str] = set()
    for line in text[4:end].splitlines():
        if not line.strip() or line.startswith("  "):
            continue
        if ":" in line:
            keys.add(line.split(":", 1)[0].strip())
    return keys


def check_shell_commands_in_c_fences(text: str, rel: Path) -> None:
    for match in re.finditer(r"^```c[ \t]*\n(.*?)(?:^```|\Z)", text, re.MULTILINE | re.DOTALL):
        body = match.group(1)
        if any(pattern in body for pattern in SHELL_IN_C_FENCE_PATTERNS):
            fail(f"c 代码块疑似包含 shell 命令：{rel}:{line_number(text, match.start())}")


def check_clean_markdown_contract() -> None:
    for doc in content_docs():
        text = doc.read_text(encoding="utf-8")
        rel = doc.relative_to(ROOT)
        keys = frontmatter_keys(text, rel)
        unexpected = keys - ALLOWED_FRONTMATTER_KEYS
        if unexpected:
            fail(f"frontmatter 包含内部字段：{rel} -> {sorted(unexpected)}")
        for pattern in FORBIDDEN_CONTENT_PATTERNS:
            index = text.find(pattern)
            if index != -1:
                fail(
                    f"正文仍包含脚手架或错误代码块 `{pattern}`："
                    f"{rel}:{line_number(text, index)}"
                )
        check_shell_commands_in_c_fences(text, rel)
        for lineno, line in enumerate(text.splitlines(), start=1):
            if re.match(r"^\|\s*$", line):
                fail(f"发现孤立表格竖线：{rel}:{lineno}")
            if re.match(r"^ {4,}\S", line) and not line.startswith("    - "):
                fail(f"发现可疑缩进代码块：{rel}:{lineno}")


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
    check_chinese_document_labels()
    check_clean_markdown_contract()
    check_inline_image_structure()
    print("content library verification passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
