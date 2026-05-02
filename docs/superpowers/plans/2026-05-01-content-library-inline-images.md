# Content Library Inline Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Chinese product knowledge base so each image appears at the corresponding location from the original source document, preserving readable text-image context instead of dumping images into a final asset section.

**Architecture:** Add a deterministic document rebuild script that reads the original `out/` Markdown, resolves each source image to its existing local content-library asset through the manifests, sanitizes Yuque/HTML markup, and writes curated Chinese knowledge-base documents with inline images in source order. Keep image file names and manifest labels unchanged because the user will manually label images later.

**Tech Stack:** Python 3 standard library, Markdown files under `docs/content-library`, existing asset manifests under `docs/content-library/assets/**/_manifest.md`, existing verification script `scripts/verify_content_library.py`.

---

## File Structure

- Create `scripts/rebuild_content_library_docs.py`: deterministic source-to-doc rebuild tool. Responsibilities: parse source Markdown, map image URLs/local paths to existing asset files, normalize Yuque markup to readable Markdown, preserve image placement, and inject curated metadata/notes per document.
- Modify `scripts/verify_content_library.py`: add checks that product/wiki docs contain inline image references before `## 图片资产`, that image references resolve to existing local files, and that docs do not contain only a terminal image dump.
- Modify `docs/content-library/products/*.md`: replace the current summary-plus-terminal-image-list layout with readable Chinese documents where images are embedded near the source paragraph/list/table they belong to.
- Modify `docs/content-library/wiki/*.md`: rebuild tutorial documents so screenshots stay inside their original operation steps.
- Preserve `docs/content-library/assets/**/_manifest.md`: do not rename images or update labels in this task unless a manifest references a missing file.
- Preserve `docs/content-library/sources/image-inventory.md`: do not relabel images in this task unless a deleted asset reference needs removal.

---

### Task 1: Add Source-To-Asset Mapping And Markdown Normalizer

**Files:**
- Create: `scripts/rebuild_content_library_docs.py`
- Read: `scripts/content_library_assets.py`
- Read: `docs/content-library/assets/**/_manifest.md`

- [ ] **Step 1: Create the script skeleton**

Create `scripts/rebuild_content_library_docs.py` with this initial content:

```python
#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import os
import re
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
LIB_ROOT = ROOT / "docs" / "content-library"


SOURCE_TO_DOCS = {
    "out/p/3hao.md": ["products/sanhao.md"],
    "out/p/4hao.md": ["products/sihao.md"],
    "out/p/5hao.md": ["products/wuhao.md"],
    "out/p/6hao.md": ["products/liuhao.md"],
    "out/p/7hao.md": ["products/qihao.md"],
    "out/p/liyumenx8.md": ["products/liyumen-x8.md"],
    "out/liyumenx8.md": ["wiki/liyumen-x8-user-guide.md"],
    "out/p/456wiki.md": ["wiki/456-series-operation-guide.md"],
    "out/p/gd-sim-wsl.md": ["wiki/sim-wsl-install-guide.md"],
    "out/p/gd-sim-matlab.md": ["wiki/sim-matlab-vm-guide.md"],
}


SIM_PRODUCT_SOURCES = ["out/p/gd-sim-wsl.md", "out/p/gd-sim-matlab.md"]


DOC_TITLES = {
    "products/sanhao.md": "三好学生",
    "products/sihao.md": "四好学生",
    "products/wuhao.md": "五好学生",
    "products/liuhao.md": "六好学生",
    "products/qihao.md": "七好学生",
    "products/liyumen-x8.md": "鲤鱼门 X8",
    "products/sim-platform.md": "GDStudio 仿真平台",
    "wiki/liyumen-x8-user-guide.md": "鲤鱼门 X8 使用资料",
    "wiki/456-series-operation-guide.md": "四/五/六系列使用与交付说明",
    "wiki/sim-wsl-install-guide.md": "GDStudio WSL 仿真平台安装教程",
    "wiki/sim-matlab-vm-guide.md": "GDStudio MATLAB 虚拟机资料",
}


IMAGE_PATTERNS = [
    re.compile(r'<img\b[^>]*?\bsrc="([^"]+)"[^>]*>', re.IGNORECASE),
    re.compile(r"!\[[^\]]*\]\(([^)]+)\)"),
]


@dataclass(frozen=True)
class ManifestEntry:
    manifest: Path
    local_file: str
    source_ref: str
    source_doc: str
    original: str
    suggested_use: str
    notes: str

    @property
    def local_path(self) -> Path:
        if "/" in self.local_file:
            return ROOT / self.local_file
        return self.manifest.parent / self.local_file


def normalize_source_ref(ref: str) -> str:
    ref = html.unescape(ref.strip())
    parsed = urlparse(ref)
    if parsed.scheme in {"http", "https"}:
        return f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
    return ref


def read_manifest_entries() -> dict[tuple[str, str], ManifestEntry]:
    entries: dict[tuple[str, str], ManifestEntry] = {}
    for manifest in sorted((LIB_ROOT / "assets").glob("**/_manifest.md")):
        for line in manifest.read_text(encoding="utf-8").splitlines():
            if not line.startswith("| `"):
                continue
            parts = [part.strip() for part in line.strip().strip("|").split("|")]
            if len(parts) < 7:
                continue
            entry = ManifestEntry(
                manifest=manifest,
                local_file=parts[0].strip("`"),
                source_ref=parts[1],
                source_doc=parts[2].strip("`"),
                original=parts[3],
                suggested_use=parts[4],
                notes=parts[6],
            )
            key = (entry.source_doc, normalize_source_ref(entry.source_ref))
            if entry.local_path.exists():
                entries.setdefault(key, entry)
    return entries


def image_markdown(entry: ManifestEntry, output_doc: Path) -> str:
    rel = os.path.relpath(entry.local_path, output_doc.parent).replace(os.sep, "/")
    alt = f"{output_doc.stem} {entry.original} {entry.suggested_use}"
    return (
        f"![{alt}]({rel})\n\n"
        f"> 图片：{entry.original}；建议用途：{entry.suggested_use}；文件：`{entry.local_path.relative_to(ROOT).as_posix()}`"
    )
```

- [ ] **Step 2: Add text cleanup functions**

Append this code to `scripts/rebuild_content_library_docs.py`:

```python
def clean_inline_markup(line: str) -> str:
    line = re.sub(r"</?font\b[^>]*>", "", line, flags=re.IGNORECASE)
    line = re.sub(r"</?span\b[^>]*>", "", line, flags=re.IGNORECASE)
    line = re.sub(r"<br\s*/?>", "<br/>", line, flags=re.IGNORECASE)
    line = re.sub(r"\s+width=\"[^\"]*\"", "", line)
    line = re.sub(r"\s+title=\"[^\"]*\"", "", line)
    line = re.sub(r"\s+crop=\"[^\"]*\"", "", line)
    line = re.sub(r"\s+id=\"[^\"]*\"", "", line)
    line = re.sub(r"\s+class=\"[^\"]*\"", "", line)
    line = re.sub(r"\s+style=\"[^\"]*\"", "", line)
    line = html.unescape(line)
    return line.rstrip()


def normalize_heading(line: str) -> str:
    line = clean_inline_markup(line)
    line = line.replace("** **", "").strip()
    line = re.sub(r"^(#{1,6})\s*", r"\1 ", line)
    return line


def should_drop_line(line: str) -> bool:
    stripped = line.strip()
    return stripped in {":::color2", ":::", ":::info", "====================================================", "======================================================", "****"}
```

- [ ] **Step 3: Add source rendering logic**

Append this code to `scripts/rebuild_content_library_docs.py`:

```python
def render_source(source: Path, output_doc: Path, entries: dict[tuple[str, str], ManifestEntry]) -> str:
    source_rel = source.relative_to(ROOT).as_posix()
    text = source.read_text(encoding="utf-8")
    rendered: list[str] = []
    last = 0

    matches = []
    for pattern in IMAGE_PATTERNS:
        matches.extend(pattern.finditer(text))
    matches.sort(key=lambda match: match.start())

    seen_spans: set[tuple[int, int]] = set()
    for match in matches:
        span = match.span()
        if span in seen_spans:
            continue
        seen_spans.add(span)

        before = text[last:match.start()]
        rendered.extend(render_text_chunk(before))

        raw_ref = match.group(1)
        entry = entries.get((source_rel, normalize_source_ref(raw_ref)))
        if entry and entry.local_path.exists():
            rendered.append(image_markdown(entry, output_doc))
        else:
            rendered.append(f"> 图片缺失：`{raw_ref}`")
        last = match.end()

    rendered.extend(render_text_chunk(text[last:]))
    return compact_blank_lines("\n".join(rendered))


def render_text_chunk(chunk: str) -> list[str]:
    lines: list[str] = []
    for line in chunk.splitlines():
        if should_drop_line(line):
            continue
        cleaned = normalize_heading(line)
        if cleaned.startswith("[此处为语雀卡片"):
            cleaned = cleaned.replace("[此处为语雀卡片，点击链接查看]", "[语雀卡片链接]")
        lines.append(cleaned)
    return lines


def compact_blank_lines(text: str) -> str:
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"\n(#{1,6} )", r"\n\n\1", text)
    return text.strip() + "\n"
```

- [ ] **Step 4: Add document wrappers**

Append this code to `scripts/rebuild_content_library_docs.py`:

```python
def front_matter(doc_rel: str, sources: list[str]) -> str:
    title = DOC_TITLES[doc_rel]
    source_lines = "\n".join(f"- `{source}`" for source in sources)
    return (
        f"# {title}\n\n"
        "## 资料说明\n\n"
        "本文档按原始资料的图文顺序整理，图片嵌入在对应上下文中，便于后续网页改版时判断截图或产品图的真实用途。\n\n"
        f"来源文件：\n{source_lines}\n\n"
        "图片文件名和 manifest 建议用途保持现状，后续由人工单独标注。\n\n"
    )


def source_footer(sources: list[str]) -> str:
    source_lines = "\n".join(f"- `{source}`" for source in sources)
    return (
        "\n## 来源备注\n\n"
        "本文档保留原始图文结构作为知识库参考；公开到网站前仍需检查价格、账号、密码、购买渠道、QQ、激活码等敏感信息。\n\n"
        f"{source_lines}\n"
    )


def build_doc(doc_rel: str, sources: list[str], entries: dict[tuple[str, str], ManifestEntry]) -> str:
    output_doc = LIB_ROOT / doc_rel
    parts = [front_matter(doc_rel, sources)]
    for source_name in sources:
        source_path = ROOT / source_name
        parts.append(f"## 原始资料：`{source_name}`\n")
        parts.append(render_source(source_path, output_doc, entries))
    parts.append(source_footer(sources))
    return compact_blank_lines("\n\n".join(parts))
```

- [ ] **Step 5: Add CLI**

Append this code to `scripts/rebuild_content_library_docs.py`:

```python
def build_plan() -> dict[str, list[str]]:
    plan: dict[str, list[str]] = {}
    for source, docs in SOURCE_TO_DOCS.items():
        for doc in docs:
            plan.setdefault(doc, []).append(source)
    plan["products/sim-platform.md"] = SIM_PRODUCT_SOURCES
    return plan


def main() -> int:
    parser = argparse.ArgumentParser(description="Rebuild content-library docs with inline source images.")
    parser.add_argument("--check", action="store_true", help="Only check whether generated docs match files on disk.")
    args = parser.parse_args()

    entries = read_manifest_entries()
    changed: list[str] = []
    for doc_rel, sources in sorted(build_plan().items()):
        target = LIB_ROOT / doc_rel
        next_text = build_doc(doc_rel, sources, entries)
        current = target.read_text(encoding="utf-8") if target.exists() else ""
        if current != next_text:
            changed.append(doc_rel)
            if not args.check:
                target.write_text(next_text, encoding="utf-8")

    if args.check and changed:
        print("content library docs are out of date:")
        for doc in changed:
            print(f"- {doc}")
        return 1
    if changed:
        print("rebuilt content library docs:")
        for doc in changed:
            print(f"- {doc}")
    else:
        print("content library docs are up to date")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 6: Run syntax check**

Run:

```bash
PYTHONPYCACHEPREFIX=/private/tmp/zfly_pycache python3 -m py_compile scripts/rebuild_content_library_docs.py
```

Expected: command exits with code `0` and no output.

- [ ] **Step 7: Commit**

Run:

```bash
git add scripts/rebuild_content_library_docs.py
git commit -m "chore(content-library): add inline doc rebuild tool" -m "Add a deterministic script that rebuilds Chinese content-library docs from original sources while preserving inline image placement." -m "Tests: PYTHONPYCACHEPREFIX=/private/tmp/zfly_pycache python3 -m py_compile scripts/rebuild_content_library_docs.py"
```

Expected: commit succeeds.

---

### Task 2: Add Verification For Inline Image Structure

**Files:**
- Modify: `scripts/verify_content_library.py`

- [ ] **Step 1: Add Markdown image resolver**

In `scripts/verify_content_library.py`, after `resolve_manifest_path`, add:

```python
def markdown_image_refs(path: Path) -> list[str]:
    text = path.read_text(encoding="utf-8")
    return re.findall(r"!\[[^\]]*\]\(([^)]+)\)", text)


def resolve_markdown_image(doc: Path, target: str) -> Path:
    return (doc.parent / target).resolve()
```

- [ ] **Step 2: Add inline image checks**

In `scripts/verify_content_library.py`, after `check_manifests`, add:

```python
def check_inline_images() -> None:
    docs = [
        LIB_ROOT / "products" / "sanhao.md",
        LIB_ROOT / "products" / "sihao.md",
        LIB_ROOT / "products" / "wuhao.md",
        LIB_ROOT / "products" / "liuhao.md",
        LIB_ROOT / "products" / "qihao.md",
        LIB_ROOT / "products" / "liyumen-x8.md",
        LIB_ROOT / "products" / "sim-platform.md",
        LIB_ROOT / "wiki" / "456-series-operation-guide.md",
        LIB_ROOT / "wiki" / "sim-wsl-install-guide.md",
        LIB_ROOT / "wiki" / "sim-matlab-vm-guide.md",
        LIB_ROOT / "wiki" / "liyumen-x8-user-guide.md",
    ]
    for doc in docs:
        text = doc.read_text(encoding="utf-8")
        refs = markdown_image_refs(doc)
        if not refs:
            fail(f"知识库文档缺少正文图片：{doc.relative_to(ROOT)}")
        if "## 图片资产\n\n图片来源清单" in text:
            fail(f"知识库文档仍是末尾图片堆叠结构：{doc.relative_to(ROOT)}")
        first_image = text.find("![")
        source_notes = text.find("## 来源备注")
        if source_notes != -1 and first_image > source_notes:
            fail(f"知识库图片没有嵌入正文上下文：{doc.relative_to(ROOT)}")
        for target in refs:
            if target.startswith(("http://", "https://")):
                fail(f"知识库正文不应引用远程图片：{doc.relative_to(ROOT)} -> {target}")
            resolved = resolve_markdown_image(doc, target)
            if not resolved.exists():
                fail(f"Markdown 图片引用不存在：{doc.relative_to(ROOT)} -> {target}")
```

- [ ] **Step 3: Call the new check**

In `main()`, add `check_inline_images()` immediately after `check_manifests()`:

```python
def main() -> int:
    check_required_docs()
    check_source_inventory()
    check_manifests()
    check_inline_images()
    check_sensitive_readiness_notes()
    check_chinese_document_labels()
    print("content library verification passed")
    return 0
```

- [ ] **Step 4: Run verifier and expect current failure**

Run:

```bash
python3 scripts/verify_content_library.py
```

Expected before Task 3 rebuild: FAIL mentioning at least one document still has terminal image dump or missing inline structure.

- [ ] **Step 5: Commit after Task 3 passes**

Do not commit this task until Task 3 rebuilds the docs and the verifier passes. Keep this verifier change staged together with Task 3 or commit immediately after Task 3.

---

### Task 3: Rebuild Product And Wiki Documents With Inline Images

**Files:**
- Modify: `docs/content-library/products/sanhao.md`
- Modify: `docs/content-library/products/sihao.md`
- Modify: `docs/content-library/products/wuhao.md`
- Modify: `docs/content-library/products/liuhao.md`
- Modify: `docs/content-library/products/qihao.md`
- Modify: `docs/content-library/products/liyumen-x8.md`
- Modify: `docs/content-library/products/sim-platform.md`
- Modify: `docs/content-library/wiki/456-series-operation-guide.md`
- Modify: `docs/content-library/wiki/liyumen-x8-user-guide.md`
- Modify: `docs/content-library/wiki/sim-wsl-install-guide.md`
- Modify: `docs/content-library/wiki/sim-matlab-vm-guide.md`

- [ ] **Step 1: Run the rebuild tool**

Run:

```bash
python3 scripts/rebuild_content_library_docs.py
```

Expected: output lists rebuilt documents under `docs/content-library/products` and `docs/content-library/wiki`.

- [ ] **Step 2: Inspect one product document**

Run:

```bash
sed -n '1,180p' docs/content-library/products/liyumen-x8.md
```

Expected:
- The file starts with `# 鲤鱼门 X8`.
- Images appear inside sections such as `## 原始资料：out/p/liyumenx8.md` near the text that originally surrounded them.
- There is no `## 图片资产` section containing a terminal list of every image.

- [ ] **Step 3: Inspect one tutorial document**

Run:

```bash
sed -n '1,220p' docs/content-library/wiki/sim-wsl-install-guide.md
```

Expected:
- Installation screenshots appear directly after the related numbered steps.
- Captions such as `图1` / `图2` from the source remain adjacent to screenshots.
- No screenshot-only dump appears at the bottom.

- [ ] **Step 4: Check deterministic rebuild**

Run:

```bash
python3 scripts/rebuild_content_library_docs.py --check
```

Expected: `content library docs are up to date`.

- [ ] **Step 5: Run full verification**

Run:

```bash
python3 scripts/verify_content_library.py
```

Expected: `content library verification passed`.

- [ ] **Step 6: Commit verifier and rebuilt docs**

Run:

```bash
git add scripts/verify_content_library.py docs/content-library/products docs/content-library/wiki
git commit -m "docs(content-library): restore inline image context" -m "Rebuild product and wiki knowledge-base documents from the original Markdown so images remain near their surrounding text and operation steps." -m "Tests: python3 scripts/rebuild_content_library_docs.py --check; python3 scripts/verify_content_library.py"
```

Expected: commit succeeds.

---

### Task 4: Preserve Current Manual Asset Workflow

**Files:**
- Modify: `docs/content-library/README.md`
- Modify: `scripts/rebuild_content_library_docs.py`

- [ ] **Step 1: Add a short maintenance note to README**

In `docs/content-library/README.md`, add this section before the final source notes:

```markdown
## 维护约定

- 正文图文结构来自 `out/` 原始 Markdown，重建时运行 `python3 scripts/rebuild_content_library_docs.py`。
- 图片文件名和 `_manifest.md` 中的“建议用途”由人工维护；重建正文时不自动重命名图片。
- 删除图片后必须同步移除 manifest 和正文引用，再运行 `python3 scripts/verify_content_library.py`。
```

- [ ] **Step 2: Add script header comment**

Near the top of `scripts/rebuild_content_library_docs.py`, after `LIB_ROOT`, add:

```python
# This script rebuilds document text and inline image placement only.
# It intentionally does not rename image files or relabel manifest rows.
```

- [ ] **Step 3: Run checks**

Run:

```bash
python3 scripts/rebuild_content_library_docs.py --check
python3 scripts/verify_content_library.py
```

Expected:
- `content library docs are up to date`
- `content library verification passed`

- [ ] **Step 4: Commit maintenance docs**

Run:

```bash
git add docs/content-library/README.md scripts/rebuild_content_library_docs.py
git commit -m "docs(content-library): document image maintenance flow" -m "Document that inline image placement is rebuilt from source while image labels remain manual." -m "Tests: python3 scripts/rebuild_content_library_docs.py --check; python3 scripts/verify_content_library.py"
```

Expected: commit succeeds.

---

## Final Verification

- [ ] Run:

```bash
python3 scripts/rebuild_content_library_docs.py --check
python3 scripts/verify_content_library.py
git diff --check
git status --short
```

Expected:
- Rebuild check reports docs are up to date.
- Content-library verification passes.
- `git diff --check` produces no output.
- `git status --short` shows only intentional uncommitted files, or no files after the final commit.

---

## Self-Review

**Spec coverage:** The plan restores image placement from original source documents, keeps images near surrounding context, preserves Wiki operation screenshots inside steps, avoids changing manual labels, and adds verification so the terminal image dump cannot return.

**Placeholder scan:** The plan contains no implementation placeholders. Every code-changing task includes concrete code or exact commands.

**Type consistency:** `ManifestEntry`, `read_manifest_entries`, `render_source`, `build_doc`, and `main` are defined before use. Verification helper names are consistent with the call in `main()`.
