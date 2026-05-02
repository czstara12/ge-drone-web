#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import json
import os
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Optional
from urllib.parse import unquote, urlparse


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "out"
LIB_ROOT = ROOT / "docs" / "content-library"
UPDATED = "2026-05-01"


DOC_SOURCES: dict[str, list[str]] = {
    "products/sanhao.md": ["out/p/3hao.md"],
    "products/sihao.md": ["out/p/4hao.md"],
    "products/wuhao.md": ["out/p/5hao.md"],
    "products/liuhao.md": ["out/p/6hao.md"],
    "products/qihao.md": ["out/p/7hao.md"],
    "products/liyumen-x8.md": ["out/p/liyumenx8.md", "out/liyumenx8.md"],
    "wiki/456-series-operation-guide.md": ["out/p/456wiki.md"],
    "wiki/sim-wsl-install-guide.md": ["out/p/gd-sim-wsl.md"],
    "wiki/sim-matlab-vm-guide.md": ["out/p/gd-sim-matlab.md"],
}


DOC_TITLES: dict[str, str] = {
    "products/sanhao.md": "三好学生",
    "products/sihao.md": "四好学生",
    "products/wuhao.md": "五好学生",
    "products/liuhao.md": "六好学生",
    "products/qihao.md": "七好学生",
    "products/liyumen-x8.md": "鲤鱼门 X8 使用资料",
    "wiki/456-series-operation-guide.md": "四/五/六系列使用与交付说明",
    "wiki/sim-wsl-install-guide.md": "GDStudio WSL 仿真平台安装教程",
    "wiki/sim-matlab-vm-guide.md": "GDStudio MATLAB 虚拟机资料",
}


HTML_IMAGE_RE = re.compile(r"<img\b[^>]*?\bsrc=[\"']([^\"']+)[\"'][^>]*>", re.IGNORECASE)
MD_IMAGE_RE = re.compile(
    r"\]\(([^)\n]+\.(?:png|jpe?g|webp|gif)(?:[^)\n]*)?)\)(?:\{[^}|]*\})?",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class ManifestEntry:
    manifest: Path
    local_file: str
    source_ref: str
    source_doc: str
    original: str
    suggested_use: str

    @property
    def local_path(self) -> Path:
        local = self.local_file.strip()
        candidates: list[Path]
        if local.startswith("docs/") or local.startswith("out/"):
            candidates = [ROOT / local]
        elif local.startswith("assets/"):
            candidates = [LIB_ROOT / local, ROOT / local]
        elif "/" in local:
            candidates = [ROOT / local, LIB_ROOT / local, self.manifest.parent / local]
        else:
            candidates = [self.manifest.parent / local]
        for candidate in candidates:
            if candidate.exists():
                return candidate
        return candidates[0]


@dataclass(frozen=True)
class MissingImage:
    source_doc: str
    source_ref: str
    rendered_ref: str
    advice: str


def normalize_source_ref(ref: str) -> str:
    ref = html.unescape(ref.strip())
    ref = ref.strip("<>").strip()
    ref = re.sub(r"\s+", "", ref)
    parsed = urlparse(ref)
    if parsed.scheme in {"http", "https"}:
        return f"{parsed.scheme.lower()}://{parsed.netloc.lower()}{unquote(parsed.path)}"
    return unquote(ref.replace("\\", "/"))


def source_key(source_doc: str, source_ref: str) -> tuple[str, str]:
    return (source_doc.strip().strip("`").replace("\\", "/"), normalize_source_ref(source_ref))


def coerce_json_entries(payload: object) -> list[dict[str, object]]:
    if isinstance(payload, list):
        return [item for item in payload if isinstance(item, dict)]
    if not isinstance(payload, dict):
        return []
    for key in ("assets", "images", "entries", "items"):
        value = payload.get(key)
        if isinstance(value, list):
            return [item for item in value if isinstance(item, dict)]
    return [payload]


def read_json_manifest_entries() -> dict[tuple[str, str], ManifestEntry]:
    entries: dict[tuple[str, str], ManifestEntry] = {}
    manifest_dir = LIB_ROOT / "assets" / "manifests"
    for manifest in sorted(manifest_dir.glob("*.json")):
        payload = json.loads(manifest.read_text(encoding="utf-8"))
        for item in coerce_json_entries(payload):
            source_doc = str(item.get("source_doc") or item.get("source") or "").strip()
            source_ref = str(item.get("source_ref") or item.get("source_url") or item.get("url") or "").strip()
            local_file = str(
                item.get("local_file")
                or item.get("local_path")
                or item.get("path")
                or item.get("file")
                or ""
            ).strip()
            if not source_doc or not source_ref or not local_file:
                continue
            entry = ManifestEntry(
                manifest=manifest,
                local_file=local_file,
                source_ref=source_ref,
                source_doc=source_doc,
                original=str(item.get("original") or item.get("alt") or item.get("label") or "").strip(),
                suggested_use=str(item.get("suggested_use") or item.get("use") or "").strip(),
            )
            if entry.local_path.exists():
                entries.setdefault(source_key(source_doc, source_ref), entry)
    return entries


def split_markdown_table_row(line: str) -> list[str]:
    cells: list[str] = []
    current: list[str] = []
    in_code = False
    escaped = False
    for char in line.strip():
        if escaped:
            current.append(char)
            escaped = False
            continue
        if char == "\\":
            current.append(char)
            escaped = True
            continue
        if char == "`":
            in_code = not in_code
            current.append(char)
            continue
        if char == "|" and not in_code:
            cells.append("".join(current).strip())
            current = []
            continue
        current.append(char)
    cells.append("".join(current).strip())
    if cells and cells[0] == "":
        cells = cells[1:]
    if cells and cells[-1] == "":
        cells = cells[:-1]
    return cells


def coerce_markdown_manifest_cells(parts: list[str]) -> Optional[list[str]]:
    if len(parts) == 7:
        return parts
    source_index = next(
        (
            index
            for index, part in enumerate(parts)
            if part.strip().strip("`").replace("\\", "/").startswith("out/")
        ),
        None,
    )
    if source_index is None or source_index < 2:
        return None
    recovered = [
        parts[0],
        "|".join(parts[1:source_index]).strip(),
        parts[source_index],
        *parts[source_index + 1 :],
    ]
    if len(recovered) < 5:
        return None
    if len(recovered) > 7:
        recovered = [*recovered[:6], "|".join(recovered[6:]).strip()]
    return recovered


def read_markdown_manifest_entries() -> dict[tuple[str, str], ManifestEntry]:
    entries: dict[tuple[str, str], ManifestEntry] = {}
    for manifest in sorted((LIB_ROOT / "assets").glob("**/_manifest.md")):
        for line in manifest.read_text(encoding="utf-8").splitlines():
            if not line.startswith("| `"):
                continue
            parts = coerce_markdown_manifest_cells(split_markdown_table_row(line))
            if parts is None:
                continue
            parts = [part.replace("\\|", "|").strip() for part in parts]
            entry = ManifestEntry(
                manifest=manifest,
                local_file=parts[0].strip("`"),
                source_ref=parts[1],
                source_doc=parts[2].strip("`"),
                original=parts[3],
                suggested_use=parts[4],
            )
            if entry.local_path.exists():
                entries.setdefault(source_key(entry.source_doc, entry.source_ref), entry)
    return entries


def read_manifest_entries() -> dict[tuple[str, str], ManifestEntry]:
    entries = read_markdown_manifest_entries()
    entries.update(read_json_manifest_entries())
    return entries


def clean_inline_markup(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"</?(font|span)\b[^>]*>", "", text, flags=re.IGNORECASE)
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.IGNORECASE)
    text = re.sub(r"</?(strong|b)>", "**", text, flags=re.IGNORECASE)
    text = re.sub(r"</?(em|i)>", "*", text, flags=re.IGNORECASE)
    text = re.sub(r"<!--.*?-->", "", text)
    text = text.replace("** **", "")
    text = re.sub(r"[ \t]+$", "", text, flags=re.MULTILINE)
    return text


def should_drop_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    if "![" in stripped:
        return True
    if re.search(r'\b(width|height)="[^"]+"', stripped):
        return True
    if re.fullmatch(r"[+\-:=|\s]+", stripped):
        return True
    return stripped in {
        ":::",
        ":::info",
        ":::color2",
        "****",
        "---",
        "====================================================",
        "======================================================",
    }


def render_text_chunk(chunk: str) -> str:
    chunk = clean_inline_markup(chunk)
    lines: list[str] = []
    for line in chunk.splitlines():
        if should_drop_line(line):
            continue
        line = normalize_heading(line.rstrip())
        line = line.replace("[此处为语雀卡片，点击链接查看]", "[语雀卡片链接]")
        lines.append(line)
    return "\n".join(lines)


def normalize_heading(line: str) -> str:
    line = re.sub(r"^(#{1,6})(\S)", r"\1 \2", line)
    line = re.sub(r"^(#{1,6})\s+#+\s*", r"\1 ", line)
    match = re.match(r"^(#{1,6})\s+(.+)$", line)
    if not match:
        return line
    level = min(6, len(match.group(1)) + 1)
    return f"{'#' * level} {match.group(2).strip()}"


def image_markdown(entry: ManifestEntry, output_doc: Path) -> str:
    rel = os.path.relpath(entry.local_path, output_doc.parent).replace(os.sep, "/")
    alt = clean_alt_text(entry.original or entry.suggested_use or entry.local_path.stem)
    return f"![{alt}]({rel})"


def clean_alt_text(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value).strip()
    value = value.replace("\\", "\\\\")
    value = value.replace("[", "\\[")
    value = value.replace("]", "\\]")
    return value


def clean_markdown_destination(value: str) -> str:
    value = html.unescape(value.strip())
    if value.startswith("<") and ">" in value:
        return value[1 : value.index(">")]
    return re.split(r"\s+", value, maxsplit=1)[0]


def markdown_destination(value: str) -> str:
    value = html.unescape(value.strip())
    value = value.replace("\n", "").replace("\r", "")
    value = value.replace("\\", "\\\\")
    value = value.replace(">", "%3E")
    return f"<{value}>"


def missing_image_link(raw_ref: str, source: Path, output_doc: Path) -> tuple[str, str]:
    raw_ref = html.unescape(raw_ref.strip())
    parsed = urlparse(raw_ref)
    if parsed.scheme in {"http", "https"}:
        return raw_ref, "外链占位，建议下载并迁入 assets 后替换"

    candidates = [
        (source.parent / raw_ref).resolve(),
        (SOURCE_ROOT / raw_ref).resolve(),
    ]
    for candidate in candidates:
        if candidate.exists():
            rel = os.path.relpath(candidate, output_doc.parent).replace(os.sep, "/")
            return rel, "原始本地文件占位，建议迁入 assets 后替换"

    return raw_ref, "原始引用不可确认，需重新补图"


def iter_image_matches(text: str) -> list[re.Match[str]]:
    matches = [*HTML_IMAGE_RE.finditer(text), *MD_IMAGE_RE.finditer(text)]
    matches.sort(key=lambda match: (match.start(), match.end()))
    filtered: list[re.Match[str]] = []
    occupied: list[tuple[int, int]] = []
    for match in matches:
        span = match.span()
        if any(span[0] < end and start < span[1] for start, end in occupied):
            continue
        occupied.append(span)
        filtered.append(match)
    return filtered


def match_ref(match: re.Match[str]) -> str:
    if match.re is HTML_IMAGE_RE:
        return match.group(1)
    return clean_markdown_destination(match.group(1))


def render_source(
    source: Path,
    output_doc: Path,
    entries: dict[tuple[str, str], ManifestEntry],
    missing_images: list[MissingImage],
) -> str:
    source_rel = source.relative_to(ROOT).as_posix()
    text = source.read_text(encoding="utf-8")
    rendered: list[str] = []
    last = 0

    for match in iter_image_matches(text):
        rendered.append(render_text_chunk(text[last : match.start()]))
        raw_ref = match_ref(match)
        entry = entries.get(source_key(source_rel, raw_ref))
        if entry is not None:
            rendered.append("\n\n" + image_markdown(entry, output_doc) + "\n\n")
        else:
            rendered_ref, advice = missing_image_link(raw_ref, source, output_doc)
            rendered.append("\n\n" + f"![待替换原始图片]({markdown_destination(rendered_ref)})" + "\n\n")
            missing_images.append(
                MissingImage(
                    source_doc=source_rel,
                    source_ref=raw_ref,
                    rendered_ref=rendered_ref,
                    advice=advice,
                )
            )
        last = match.end()

    rendered.append(render_text_chunk(text[last:]))
    return compact_blank_lines("\n".join(rendered))


def compact_blank_lines(text: str) -> str:
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"\n(#{1,6} )", r"\n\n\1", text)
    text = re.sub(r"\n(!\[[^\]]*\]\([^)]+\))\n", r"\n\n\1\n\n", text)
    return text.strip() + "\n"


def yaml_list(values: list[str]) -> str:
    return "\n".join(f"  - {value}" for value in values)


def doc_manifest_paths(doc_rel: str, sources: list[str], entries: dict[tuple[str, str], ManifestEntry]) -> list[str]:
    manifests: set[str] = set()
    source_set = set(sources)
    prefix = "products/" if doc_rel.startswith("products/") else "wiki/"
    for entry in entries.values():
        if entry.source_doc in source_set:
            manifest_rel = entry.manifest.relative_to(ROOT).as_posix()
            if f"/{prefix}" in manifest_rel or not manifests:
                manifests.add(manifest_rel)
    return sorted(manifests)


def front_matter(doc_rel: str, sources: list[str], manifests: list[str]) -> str:
    title = DOC_TITLES[doc_rel]
    category = "产品资料" if doc_rel.startswith("products/") else "使用教程"
    product = title if doc_rel.startswith("products/") else title.replace(" 使用资料", "").replace(" 使用与交付说明", "")
    manifest_block = yaml_list(manifests) if manifests else "  - docs/content-library/assets/manifests"
    return (
        "---\n"
        f"title: {title}\n"
        f"category: {category}\n"
        f"product: {product}\n"
        "source_docs:\n"
        f"{yaml_list(sources)}\n"
        "assets_manifest:\n"
        f"{manifest_block}\n"
        f"updated: {UPDATED}\n"
        "---\n\n"
        f"# {title}\n\n"
        "本文档按原始资料的图文顺序重建，图片保留在对应上下文位置，便于作为中文知识库继续整理。\n\n"
    )


def escape_table_cell(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"\s+", " ", value).strip()
    return value.replace("\\", "\\\\").replace("|", "\\|")


def pending_original_images_section(missing_images: list[MissingImage]) -> str:
    if not missing_images:
        return ""

    counts: dict[tuple[str, str, str, str], int] = {}
    for item in missing_images:
        key = (item.source_doc, item.source_ref, item.rendered_ref, item.advice)
        counts[key] = counts.get(key, 0) + 1

    lines = [
        "\n## 待替换原始图片",
        "",
        "以下图片未匹配到当前受管资产，已按原文位置保留为原始链接占位，后续可逐一下载/迁入并替换为 `docs/content-library/assets` 下的本地资源。",
        "",
        "| 来源文件 | 原始引用 | 当前占位链接 | 出现次数 | 处理建议 |",
        "| --- | --- | --- | --- | --- |",
    ]
    for (source_doc, source_ref, rendered_ref, advice), count in sorted(counts.items()):
        lines.append(
            "| "
            f"`{source_doc}` | "
            f"{escape_table_cell(source_ref)} | "
            f"{escape_table_cell(rendered_ref)} | "
            f"{count} | "
            f"{escape_table_cell(advice)} |"
        )
    return "\n".join(lines) + "\n"


def source_footer(sources: list[str]) -> str:
    return (
        "\n## 网站可用性与来源备注\n\n"
        "本文档保留原始图文结构作为知识库参考；公开到网站前仍需检查价格、账号、密码、购买渠道、QQ、激活码等敏感信息。\n\n"
        "来源文件：\n"
        f"{yaml_list(sources)}\n"
    )


def build_document(
    doc_rel: str,
    entries: dict[tuple[str, str], ManifestEntry],
) -> str:
    sources = DOC_SOURCES[doc_rel]
    output_doc = LIB_ROOT / doc_rel
    manifests = doc_manifest_paths(doc_rel, sources, entries)
    missing_images: list[MissingImage] = []
    chunks = [front_matter(doc_rel, sources, manifests)]
    for index, source_rel in enumerate(sources):
        if len(sources) > 1:
            chunks.append(f"## {Path(source_rel).stem}\n\n")
        chunks.append(render_source(ROOT / source_rel, output_doc, entries, missing_images))
        if index < len(sources) - 1:
            chunks.append("\n")
    chunks.append(pending_original_images_section(missing_images))
    chunks.append(source_footer(sources))
    return compact_blank_lines("".join(chunks))


def write_documents(generated: dict[Path, str]) -> None:
    for path, text in generated.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(text, encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT).as_posix()}")


def check_documents(generated: dict[Path, str]) -> int:
    changed: list[str] = []
    for path, text in generated.items():
        if not path.exists() or path.read_text(encoding="utf-8") != text:
            changed.append(path.relative_to(ROOT).as_posix())
    if changed:
        print("Documents would change:")
        for path in changed:
            print(f"- {path}")
        return 1
    print("All generated content-library documents are up to date.")
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Rebuild Chinese content-library Markdown from out/ sources.")
    parser.add_argument("--check", action="store_true", help="Compare generated output with existing docs without writing.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    entries = read_manifest_entries()
    if not entries:
        print("No asset manifest entries found.", file=sys.stderr)
        return 2
    generated = {
        LIB_ROOT / doc_rel: build_document(doc_rel, entries)
        for doc_rel in sorted(DOC_SOURCES)
    }
    if args.check:
        return check_documents(generated)
    write_documents(generated)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
