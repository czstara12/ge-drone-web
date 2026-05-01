#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import mimetypes
import re
import sys
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "out"
LIB_ROOT = ROOT / "docs" / "content-library"

SOURCE_TO_TARGETS = {
    "out/p/3hao.md": [("products", "sanhao")],
    "out/p/4hao.md": [("products", "sihao")],
    "out/p/5hao.md": [("products", "wuhao")],
    "out/p/6hao.md": [("products", "liuhao")],
    "out/p/7hao.md": [("products", "qihao")],
    "out/p/liyumenx8.md": [("products", "liyumen-x8"), ("wiki", "liyumen-x8-user-guide")],
    "out/liyumenx8.md": [("products", "liyumen-x8"), ("wiki", "liyumen-x8-user-guide")],
    "out/p/456wiki.md": [("wiki", "456-series-operation-guide")],
    "out/p/gd-sim-wsl.md": [("products", "sim-platform"), ("wiki", "sim-wsl-install-guide")],
    "out/p/gd-sim-matlab.md": [("products", "sim-platform"), ("wiki", "sim-matlab-vm-guide")],
}

USE_HINTS = [
    ("pointcloud", ("点云", "扫描", "隧道", "桥梁", "桥洞", "车辆")),
    ("wiring", ("接线", "飞控", "电源", "供电", "线")),
    ("install", ("安装", "wsl", "vmware", "虚拟机", "powershell")),
    ("remote-control", ("遥控", "触屏", "屏幕", "APP", "app")),
    ("hardware", ("电池", "充电器", "电机", "电调", "雷达", "相机", "机载电脑")),
    ("product", ("无人机", "外观", "机架", "折叠")),
]

DISPLAY_LABELS = {
    "pointcloud": "点云/扫描",
    "wiring": "接线/配置",
    "install": "安装流程",
    "remote-control": "遥控器/交互",
    "hardware": "硬件",
    "product": "产品图",
    "image": "图片",
}

IMAGE_PATTERNS = [
    re.compile(r'<img\b[^>]*?\bsrc="([^"]+)"[^>]*>', re.IGNORECASE),
    re.compile(r"!\[[^\]]*\]\(([^)]+)\)"),
]


@dataclass(frozen=True)
class ImageRef:
    source_doc: Path
    raw: str
    context: str
    ordinal: int


def extract_refs(source_doc: Path) -> list[ImageRef]:
    text = source_doc.read_text(encoding="utf-8")
    refs: list[ImageRef] = []
    seen_spans: set[tuple[int, int]] = set()
    ordinal = 1

    for pattern in IMAGE_PATTERNS:
        for match in pattern.finditer(text):
            span = match.span()
            if span in seen_spans:
                continue
            seen_spans.add(span)
            start = max(0, match.start() - 140)
            end = min(len(text), match.end() + 140)
            context = " ".join(text[start:end].split())
            refs.append(ImageRef(source_doc=source_doc, raw=match.group(1), context=context, ordinal=ordinal))
            ordinal += 1

    return refs


def use_label(ref: ImageRef) -> str:
    context = ref.context.lower()
    for label, terms in USE_HINTS:
        if any(term.lower() in context for term in terms):
            return label
    return "image"


def extension_from_content(raw: str, content: bytes, headers: dict[str, str]) -> str:
    path_suffix = Path(urlparse(raw).path).suffix.lower()
    if path_suffix in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return ".jpg" if path_suffix == ".jpeg" else path_suffix

    content_type = headers.get("Content-Type", "").split(";")[0].strip().lower()
    guessed = mimetypes.guess_extension(content_type)
    if guessed in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return ".jpg" if guessed == ".jpeg" else guessed

    if content.startswith(b"\x89PNG"):
        return ".png"
    if content.startswith(b"\xff\xd8"):
        return ".jpg"
    if content.startswith(b"GIF8"):
        return ".gif"
    if content[:12].startswith(b"RIFF") and content[8:12] == b"WEBP":
        return ".webp"
    return ".bin"


def read_image(ref: ImageRef, allow_network: bool) -> tuple[bytes | None, str, dict[str, str]]:
    raw = ref.raw.strip()
    if raw.startswith(("http://", "https://")):
        if not allow_network:
            return None, "缺失：未启用网络下载", {}
        req = urllib.request.Request(raw, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read()
            headers = {key: value for key, value in response.headers.items()}
            return content, "已下载", headers

    local_path = (ref.source_doc.parent / raw).resolve()
    if not local_path.exists():
        local_path = (SOURCE_ROOT / raw).resolve()
    if not local_path.exists():
        return None, f"缺失：{raw}", {}

    return local_path.read_bytes(), "已迁入", {}


def short_hash(content: bytes | str) -> str:
    if isinstance(content, str):
        content = content.encode("utf-8")
    return hashlib.sha256(content).hexdigest()[:8]


def target_dirs_for_source(source_doc: Path) -> list[tuple[str, str, Path]]:
    rel = source_doc.relative_to(ROOT).as_posix()
    targets = SOURCE_TO_TARGETS.get(rel, [])
    return [(domain, slug, LIB_ROOT / "assets" / domain / slug) for domain, slug in targets]


def build_filename(slug: str, label: str, ordinal: int, digest: str, ext: str) -> str:
    return f"{slug}-{label}-{ordinal:03d}-{digest}{ext}"


def manifest_row(local_file: str, source: str, source_doc: Path, original: str, suggested_use: str, ready: str, notes: str) -> str:
    return (
        f"| `{local_file}` | {source} | `{source_doc.relative_to(ROOT).as_posix()}` | "
        f"{original} | {suggested_use} | {ready} | {notes} |"
    )


def update_manifests(rows_by_dir: dict[Path, list[str]]) -> None:
    header = [
        "# 图片清单",
        "",
        "| 本地文件 | 来源 URL 或路径 | 来源文档 | 原始编号或 Alt | 建议用途 | 网站可用状态 | 备注 |",
        "| --- | --- | --- | --- | --- | --- | --- |",
    ]
    for directory, rows in sorted(rows_by_dir.items()):
        directory.mkdir(parents=True, exist_ok=True)
        (directory / "_manifest.md").write_text("\n".join(header + rows) + "\n", encoding="utf-8")

    inventory = LIB_ROOT / "sources" / "image-inventory.md"
    inventory.parent.mkdir(parents=True, exist_ok=True)
    all_rows: list[str] = []
    for directory, rows in sorted(rows_by_dir.items()):
        all_rows.extend(rows)
    inventory.write_text("\n".join(header + all_rows) + "\n", encoding="utf-8")


def collect_assets(allow_network: bool) -> None:
    rows_by_dir: dict[Path, list[str]] = {}
    seen_content: dict[str, Path] = {}

    for source_name in SOURCE_TO_TARGETS:
        source_doc = ROOT / source_name
        if not source_doc.exists():
            print(f"missing source: {source_name}", file=sys.stderr)
            continue
        for ref in extract_refs(source_doc):
            label = use_label(ref)
            content, status, headers = read_image(ref, allow_network=allow_network)
            if content is None:
                digest = short_hash(ref.raw)
                ext = Path(urlparse(ref.raw).path).suffix.lower() or ".missing"
            else:
                digest = short_hash(content)
                ext = extension_from_content(ref.raw, content, headers)

            for _, slug, target_dir in target_dirs_for_source(source_doc):
                filename = build_filename(slug, label, ref.ordinal, digest, ext)
                target_path = target_dir / filename
                target_dir.mkdir(parents=True, exist_ok=True)

                notes = status
                manifest_file = filename
                if content is not None:
                    existing = seen_content.get(digest)
                    if existing is None:
                        target_path.write_bytes(content)
                        seen_content[digest] = target_path
                    else:
                        manifest_file = existing.relative_to(ROOT).as_posix()
                        notes = f"重复图片；canonical 文件为 `{manifest_file}`"

                rows_by_dir.setdefault(target_dir, []).append(
                    manifest_row(
                        local_file=manifest_file,
                        source=ref.raw,
                        source_doc=source_doc,
                        original=f"image-{ref.ordinal}",
                        suggested_use=DISPLAY_LABELS.get(label, label),
                        ready="待审核",
                        notes=notes,
                    )
                )

    update_manifests(rows_by_dir)


def main() -> int:
    parser = argparse.ArgumentParser(description="Collect content-library image assets.")
    parser.add_argument("--allow-network", action="store_true", help="Download remote images.")
    args = parser.parse_args()
    collect_assets(allow_network=args.allow_network)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
