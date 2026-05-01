# Content Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `docs/content-library` as a local product and Wiki reference base with strict image download, naming, provenance, and manifest management.

**Architecture:** Use curated markdown documents for human-readable product and Wiki references, plus a small local Python utility to extract image references, copy/download images, produce deterministic non-conflicting filenames, and write manifests. Keep the new library under `docs/content-library` and keep existing website pages and `public/images/products` unchanged.

**Tech Stack:** Markdown, Python 3 standard library, shell commands, existing source markdown in `out/`.

---

## File Structure

- Create `docs/content-library/README.md`: entry point explaining library purpose, domains, asset rules, and future Wiki readiness.
- Create `docs/content-library/products/*.md`: seven product reference documents for Sanhao, Sihao, Wuhao, Liuhao, Qihao, Liyumen X8, and simulation platform.
- Create `docs/content-library/wiki/*.md`: four Wiki reference documents for 456 series operations, WSL simulation install, MATLAB VM simulation, and Liyumen X8 user guide.
- Create `docs/content-library/assets/products/*/`: local image assets for product reference documents.
- Create `docs/content-library/assets/wiki/*/`: local image assets for Wiki reference documents.
- Create `docs/content-library/sources/source-inventory.md`: source-to-target inventory.
- Create `docs/content-library/sources/image-inventory.md`: global image inventory generated from asset manifests.
- Create `scripts/content_library_assets.py`: extract image references from source markdown, copy local images, download remote images, produce unique names, and write manifests.
- Create `scripts/verify_content_library.py`: verify source coverage, asset manifests, unique image paths, local file existence, and sensitive-content readiness flags.

## Task 1: Add Asset Management Script

**Files:**
- Create: `scripts/content_library_assets.py`
- Create directories through shell: `scripts/`

- [ ] **Step 1: Create scripts directory**

Run:

```bash
mkdir -p scripts
```

Expected: command exits with code 0.

- [ ] **Step 2: Add the asset management script**

Create `scripts/content_library_assets.py` with this complete content:

```python
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
            return None, "missing: network disabled", {}
        req = urllib.request.Request(raw, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as response:
            content = response.read()
            headers = {key: value for key, value in response.headers.items()}
            return content, "downloaded", headers

    local_path = (ref.source_doc.parent / raw).resolve()
    if not local_path.exists():
        local_path = (SOURCE_ROOT / raw).resolve()
    if not local_path.exists():
        return None, f"missing: {raw}", {}

    return local_path.read_bytes(), "copied", {}


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
        "# Image Manifest",
        "",
        "| Local File | Source URL Or Path | Source Document | Original ID Or Alt | Suggested Use | Website Ready | Notes |",
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
                        notes = f"duplicate content; canonical file is `{manifest_file}`"

                rows_by_dir.setdefault(target_dir, []).append(
                    manifest_row(
                        local_file=manifest_file,
                        source=ref.raw,
                        source_doc=source_doc,
                        original=f"image-{ref.ordinal}",
                        suggested_use=label,
                        ready="Review",
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
```

Expected: file exists and is executable after a later chmod step.

- [ ] **Step 3: Run syntax check**

Run:

```bash
python3 -m py_compile scripts/content_library_assets.py
```

Expected: command exits with code 0 and prints no output.

- [ ] **Step 4: Commit**

Run:

```bash
git add scripts/content_library_assets.py
git commit -m "chore: add content asset collector"
```

Expected: commit succeeds.

## Task 2: Add Content Library Skeleton And Source Inventory

**Files:**
- Create: `docs/content-library/README.md`
- Create: `docs/content-library/sources/source-inventory.md`
- Create directories: `docs/content-library/products`, `docs/content-library/wiki`, `docs/content-library/assets/products/*`, `docs/content-library/assets/wiki/*`

- [ ] **Step 1: Create directories**

Run:

```bash
mkdir -p docs/content-library/products docs/content-library/wiki docs/content-library/sources docs/content-library/assets/products/{sanhao,sihao,wuhao,liuhao,qihao,liyumen-x8,sim-platform} docs/content-library/assets/wiki/{456-series-operation-guide,sim-wsl-install-guide,sim-matlab-vm-guide,liyumen-x8-user-guide}
```

Expected: command exits with code 0.

- [ ] **Step 2: Create README**

Create `docs/content-library/README.md`:

```markdown
# Content Library

This library is the local reference base for future website work. It separates product-facing material from Wiki-style operational material while sharing one image and source inventory.

## Domains

- `products/`: concise product references for product pages, product cards, homepage sections, and SEO copy.
- `wiki/`: long-form setup, operation, troubleshooting, delivery, and user-guide material for a future independent Wiki module.
- `assets/`: downloaded or migrated images grouped by product or Wiki article.
- `sources/`: source and image inventories used to trace every curated document and asset.

## Asset Rules

- Remote Yuque images are downloaded into `assets/` and renamed with stable, non-conflicting filenames.
- Local exported images from `out/media/media` are migrated into `assets/` and recorded with original paths.
- Existing website images under `public/images/products` are not moved or overwritten.
- Every asset directory has an `_manifest.md`.
- Every image is marked `Review`, `Yes`, or `No` for website readiness.

## Future Wiki Module

The Wiki documents include stable slugs, categories, related products, and suggested routes. They are not currently wired into the website.
```

Expected: README contains domains, asset rules, and Wiki readiness notes.

- [ ] **Step 3: Create source inventory**

Create `docs/content-library/sources/source-inventory.md`:

```markdown
# Source Inventory

| Source | Type | Target Documents | Notes |
| --- | --- | --- | --- |
| `out/p/3hao.md` | Product source | `products/sanhao.md` | Sanhao product introduction, modules, specs, features, upgrade notes, sales notes. |
| `out/p/4hao.md` | Product source | `products/sihao.md` | Sihao product introduction, hardware modules, performance notes, delivery content, sales notes. |
| `out/p/5hao.md` | Product source | `products/wuhao.md` | Wuhao product introduction, version differences, modules, navigation, mapping, recognition, sales notes. |
| `out/p/6hao.md` | Product source | `products/liuhao.md` | Liuhao product introduction, upgrade notes, modules, SLAM, navigation, exploration, recognition, network notes, sales notes. |
| `out/p/7hao.md` | Product source | `products/qihao.md` | Qihao product introduction, modules, endurance, dimensions, sales notes. |
| `out/p/liyumenx8.md` | Product and Wiki source | `products/liyumen-x8.md`, `wiki/liyumen-x8-user-guide.md` | Latest X8 upgrade, packages, pricing, Odin and Mid360 variants, remote control operation, mapping workflow. |
| `out/liyumenx8.md` | Product and Wiki source | `products/liyumen-x8.md`, `wiki/liyumen-x8-user-guide.md` | DOCX-derived X8 brochure content and local converted images. |
| `out/p/456wiki.md` | Wiki source | `wiki/456-series-operation-guide.md` | Hardware, wiring, software, QGC, flight commands, code notes for 4/5/6 series. |
| `out/p/gd-sim-wsl.md` | Product and Wiki source | `products/sim-platform.md`, `wiki/sim-wsl-install-guide.md` | WSL simulation platform product notes, installation, activation, troubleshooting. |
| `out/p/gd-sim-matlab.md` | Product and Wiki source | `products/sim-platform.md`, `wiki/sim-matlab-vm-guide.md` | VMware and MATLAB simulation platform instructions and supplements. |
| `out/media/media/*` | Local image exports | `assets/products/liyumen-x8/`, `assets/wiki/liyumen-x8-user-guide/` | DOCX conversion images to be migrated and registered in manifests. |
```

Expected: every nonempty source markdown file is listed.

- [ ] **Step 4: Commit**

Run:

```bash
git add docs/content-library/README.md docs/content-library/sources/source-inventory.md
git commit -m "docs: add content library skeleton"
```

Expected: commit succeeds.

## Task 3: Create Product Reference Documents

**Files:**
- Create: `docs/content-library/products/sanhao.md`
- Create: `docs/content-library/products/sihao.md`
- Create: `docs/content-library/products/wuhao.md`
- Create: `docs/content-library/products/liuhao.md`
- Create: `docs/content-library/products/qihao.md`
- Create: `docs/content-library/products/liyumen-x8.md`
- Create: `docs/content-library/products/sim-platform.md`

- [ ] **Step 1: Create `products/sanhao.md`**

Use `out/p/3hao.md` and create:

```markdown
# 三好学生无人机

## Metadata
- slug: sanhao
- source_files: `out/p/3hao.md`
- related_wiki: none
- current_site_pages: `/products/sanhao`, product card data in `src/data/products.ts`

## Quick Summary

轻量化、高性价比的通用无人机平台，适合教学、竞赛入门和室内导航实验。平台搭载 Pixhawk 6C、思岚 S1 二维激光雷达、Orange Pi 5B 机载电脑、星光级 USB 摄像头和 Radiomaster POCKET 遥控器。

## Product Positioning

三好学生面向预算敏感、希望快速获得完整无人机平台的用户。它强调轻量、通用、可二次开发和低门槛上手。

## Core Selling Points

- 整机约 1.0kg，结构轻，适合室内教学和测试。
- Orange Pi 5B 机载电脑，机载环境支持完全二次开发。
- 思岚 S1 二维激光雷达结合下视 TOF，可用于室内定位和 SLAM 导航。
- 支持一键起飞降落、定点悬停、定速巡航、自主定位、避障航线规划。
- 支持 YOLO 识别、人工智能图像物体识别、舵机投放、激光笔标定。
- 新增二维码精准追踪和降落能力，来源提供 B 站演示链接。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | Holybro Pixhawk 6C | Source lists `Holybro pixhawk 6c`. |
| Lidar | 思岚 S1 | 2D lidar. |
| Onboard computer | Orange Pi 5B, RK3588s, 8GB + 64GB | Source writes `Orangepi 5B`. |
| USB camera | 星光级 1080P, 2.6mm, no distortion, 130 degree horizontal FOV | Source value preserved. |
| Remote controller | Radiomaster POCKET | Standard American-hand operation. |
| Battery | 4S 5300mAh | Shipping battery. |
| Weight | About 1.0kg | Source says whole aircraft. |
| Max takeoff weight | 1.5kg | Source value preserved. |
| Endurance | 10min | Source value preserved. |
| Max level speed | About 2m/s | Source value preserved. |
| Wheelbase | 250mm | Source value preserved. |
| Dimensions | 300 x 300 x 150mm | Source value preserved. |
| Positioning accuracy | 0.1m / 100m² | Source value preserved. |

## Features And Capabilities

- 2D lidar plus down-facing TOF positioning.
- Lidar SLAM navigation.
- Fixed-point hover and fixed-speed cruise.
- Obstacle-aware route planning.
- YOLO visual recognition.
- QR-code tracking and landing.

## Application Scenarios

- Teaching demonstrations.
- Indoor navigation labs.
- Entry-level competitions.
- AI recognition experiments.
- Lightweight secondary development.

## Pricing And Packages

Source does not provide a public price value in the captured markdown. Source states support includes onboard Orange Pi software environment, full secondary development, code on the onboard computer, maintenance and usage support, operation videos, invoices, company-account payment, Bilibili shop ordering, and QQ consultation.

Website readiness: sales process details are internal reference and should be rewritten before public use.

## Website Rewrite Notes

- Product card can emphasize `轻量化`, `高性价比`, `室内导航`, `YOLO`, and `二维码精准追踪`.
- Specs should avoid overloading the card; keep five key specs: weight, endurance, lidar, onboard computer, positioning accuracy.
- Public page should not include raw QQ or payment copy unless contact strategy is confirmed.

## Image Assets

See `docs/content-library/assets/products/sanhao/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/3hao.md`.
```

- [ ] **Step 2: Create `products/sihao.md`**

Use `out/p/4hao.md` and create:

```markdown
# 四好学生无人机

## Metadata
- slug: sihao
- source_files: `out/p/4hao.md`, `out/p/456wiki.md`
- related_wiki: `wiki/456-series-operation-guide.md`
- current_site_pages: no dedicated route currently confirmed in `src/pages/products`

## Quick Summary

四好学生是面向开发效率和高性价比的通用无人机平台，搭载 PX4 飞控、Mid360 激光雷达、Jetson Orin NX Super 8G 机载电脑和 D435 深度相机，预装定位、建图、导航、探索和识别相关功能。

## Product Positioning

四好学生适合需要完整开发平台的教学、科研、竞赛用户。产品定位是降低开发门槛，让用户把精力放在算法和功能优化上。

## Core Selling Points

- PX4 飞控和 Mid360 三维激光雷达。
- Jetson Orin NX Super 8G，来源称算力从 70T 升到 117T。
- 预装定位、建图、导航、探索、识别功能。
- 支持动态障碍物识别、多种动态导航方式、自主探索。
- 机载电脑软件环境支持完全二次开发。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | Pixhawk 4, PX4 | Source writes `pix 4（PX4）`. |
| Lidar | Mid360 | Source value preserved. |
| Onboard computer | Jetson Orin NX Super 8G | Source calls it upgraded computer. |
| Depth camera | D435 | Source value preserved. |
| Battery | 4S 5300mAh | Source value preserved. |
| Max takeoff weight | 1.9kg | Source value preserved. |
| Endurance | Hover 9-10min | Source value preserved. |
| Weight | 1.46kg with battery | Source value preserved. |
| Wheelbase | 250mm | Source value preserved. |
| Positioning accuracy | 1cm | Source value preserved. |

## Features And Capabilities

- Localization, mapping, navigation, exploration, and recognition.
- Dynamic obstacle recognition.
- Multiple navigation workflows.
- Autonomous exploration.
- Full secondary development on onboard software environment.

## Application Scenarios

- Robotics and UAV development.
- Indoor navigation and obstacle avoidance.
- Teaching labs.
- Competition training.
- Algorithm validation on a real drone platform.

## Pricing And Packages

Source does not provide a public price value in the captured markdown. Source states software environment, support, videos, and invoice support are included.

Website readiness: package and support wording can be public after rewriting; direct sales-process wording should be reviewed.

## Website Rewrite Notes

- This product is missing from current product list and may need a new card or comparison position if the product lineup expands.
- Link to `wiki/456-series-operation-guide.md` for detailed setup and usage rather than placing operational steps on product pages.

## Image Assets

See `docs/content-library/assets/products/sihao/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/4hao.md`. Related operating guide: `out/p/456wiki.md`.
```

- [ ] **Step 3: Create `products/wuhao.md`**

Use `out/p/5hao.md` and create:

```markdown
# 五好学生无人机

## Metadata
- slug: wuhao
- source_files: `out/p/5hao.md`, `out/p/456wiki.md`
- related_wiki: `wiki/456-series-operation-guide.md`
- current_site_pages: `/products/wuhao`, product card data in `src/data/products.ts`

## Quick Summary

五好学生是共轴双桨设计的高安全性、高载重、稳定飞行无人机平台。第二版从二维雷达升级为 Mid360 三维激光雷达，定位方式由 T265 改为 Mid360 激光雷达定位。

## Product Positioning

五好学生适合需要更高载重、更强稳定性和更多导航方案的竞赛、科研、开发用户。它可以理解为比四好学生更大型、更强承载能力的平台。

## Core Selling Points

- 共轴双桨设计，强调安全性、载重能力和稳定性。
- Mid360 三维激光雷达。
- Intel NUC 13 i5, 16GB RAM, 512GB SSD。
- 支持多种 Ego Planner 导航方式。
- 支持 Mid360 建图和 USB 摄像头 + YOLO 识别。
- 来源提供多条 B 站实测或功能演示链接。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | Holybro Pixhawk 4 + PM06 | Source says Pixhawk 6C had bugs, so Pixhawk 4 is used. |
| Lidar | Mid360 3D lidar | Source value preserved. |
| Onboard computer | Intel NUC 13 i5, 16GB RAM, 512GB SSD | Source value preserved. |
| Depth camera | D435 | Source value preserved. |
| ESC | 4-in-1 ESC 60A x 2 | Source value preserved. |
| USB camera | 星光级 1080P no-distortion | Source value preserved. |
| Remote controller | Radiomaster POCKET | Standard American-hand operation. |
| Weight | About 3kg | Source value preserved. |
| Battery | 6S 5200mAh shipping battery | Source value preserved. |
| Payload | 3-4kg with battery | Source value preserved. |
| Endurance | 7min with 6S 5200mAh, 13min with 6S 12000mAh, 20min with 6S 22000mAh | Hover values from source. |
| Max level speed | About 2.5m/s | Source value preserved. |
| Wheelbase | 360mm | Source value preserved. |
| Dimensions | 50 x 50cm | Source value preserved. |
| Positioning accuracy | 1-3cm | Source value preserved. |

## Features And Capabilities

- Mid360 localization and point cloud based Ego Planner waypoint flight.
- Mid360 localization plus D435 depth image Ego Planner waypoint flight.
- Rviz point selection based Ego Planner flight.
- Mid360 mapping.
- USB camera plus YOLO recognition.

## Application Scenarios

- Heavy payload testing.
- Competition and research platforms.
- Multi-sensor navigation experiments.
- Stable indoor and semi-indoor navigation.

## Pricing And Packages

Source does not provide a public price value in the captured markdown. Source notes include NUC software environment, full secondary development, onboard code, support, operation videos, spare anti-crash frame, invoice support, company-account payment, Bilibili shop ordering, and QQ consultation.

Website readiness: spare-frame and support points can be useful; direct payment and QQ wording should be rewritten.

## Website Rewrite Notes

- Current product page/card can use the second-version distinction as a selling point.
- Keep the comparison to Sihao concise: Sihao is smaller; Wuhao is more stable and higher-payload.
- Link operation details to `wiki/456-series-operation-guide.md`.

## Image Assets

See `docs/content-library/assets/products/wuhao/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/5hao.md`. Related operating guide: `out/p/456wiki.md`.
```

- [ ] **Step 4: Create `products/liuhao.md`**

Use `out/p/6hao.md` and create:

```markdown
# 六好学生无人机

## Metadata
- slug: liuhao
- source_files: `out/p/6hao.md`, `out/p/456wiki.md`
- related_wiki: `wiki/456-series-operation-guide.md`
- current_site_pages: no dedicated route currently confirmed in `src/pages/products`

## Quick Summary

六好学生是高性能、多功能、小巧灵活的通用无人机平台。新版本使用 7 寸桨和半固态电池，适配 FastLivo2 的雷达定位能力，在性能、续航和体积之间取得平衡。

## Product Positioning

六好学生适合需要小体积、高性能、完整算法能力和更好续航平衡的用户。它囊括四好学生的基础功能，并加入结构减震、防炸机保护、视觉识别优化等更新。

## Core Selling Points

- 小巧灵活，轴距 210mm，最外围约 30 x 30cm。
- Mid360 + Jetson Orin NX Super。
- 适配 FastLivo2 雷达定位，来源称定位精度更强。
- 结构减震优化和定位异常降落保护。
- 支持 SLAM、避障导航、自主探索、智能识别、网络工具和 Wi-Fi 更换流程。
- 可从 5 寸桨 9 分钟续航升级为 7 寸桨约 13 分钟。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | Industrial PX4 flight controller or Nxt PX4 | Source says tower flight controller upgraded. |
| Lidar | Mid360 | Source value preserved. |
| Onboard computer | Jetson Orin NX Super | Source value preserved. |
| USB camera | 星光级 1080P, 2.6mm no-distortion, 100 degree horizontal FOV | Supports hardware sync and source driver. |
| Remote controller | Radiomaster POCKET | Standard American-hand operation. |
| Battery | 4S 5300mAh | Source value preserved. |
| Max takeoff weight | 1.9kg | Source value preserved. |
| Endurance | 9min with 5 inch propellers, 13min with 7 inch modification | Source value preserved. |
| Wheelbase | 210mm | Source value preserved. |
| Outer dimensions | 30 x 30cm | Source value preserved. |
| Positioning accuracy | <0.5cm with FastLivo2 | Source value preserved. |
| Weight | 900g without battery | Source value preserved. |

## Features And Capabilities

- SLAM positioning and 3D scanning.
- Autonomous obstacle avoidance navigation.
- Rviz point navigation workflows.
- Autonomous exploration.
- Dynamic obstacle detection.
- YOLO visual recognition.
- Network proxy shortcut and Wi-Fi setup notes.

## Application Scenarios

- Compact research platform.
- Indoor autonomous navigation.
- SLAM and mapping experiments.
- Visual detection and obstacle avoidance.
- Development scenarios that require high capability in a smaller frame.

## Pricing And Packages

Source does not provide a public price value in the captured markdown. Source notes include Jetson Orin Super NX software environment, full secondary development, support, operation videos, invoice support, company-account payment, Bilibili shop ordering, and QQ consultation.

Website readiness: avoid publishing raw shell commands on product pages; put operational commands in Wiki.

## Website Rewrite Notes

- Add as a product only if lineup should show six products.
- Product page should emphasize balance: compact size, strong SLAM, 7 inch endurance upgrade, safety protection.
- Link detailed command workflows to `wiki/456-series-operation-guide.md`.

## Image Assets

See `docs/content-library/assets/products/liuhao/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/6hao.md`. Related operating guide: `out/p/456wiki.md`.
```

- [ ] **Step 5: Create `products/qihao.md`**

Use `out/p/7hao.md` and create:

```markdown
# 七好学生无人机

## Metadata
- slug: qihao
- source_files: `out/p/7hao.md`
- related_wiki: none
- current_site_pages: `/products/qihao`, product card data in `src/data/products.ts`

## Quick Summary

七好学生是大折叠、高续航的通用无人机平台，搭载 PX4、Mid360、NUC 13 或 Jetson Orin NX，并配备图传、云台和可视化遥控器。来源称支持该系列无人机所有算法的预部署，也可定制功能。

## Product Positioning

七好学生适合需要更长续航、更大机架、更强外场适应性的用户。它偏向通用平台和二次开发基础平台。

## Core Selling Points

- 大折叠便携结构。
- 40 分钟续航。
- PX4 + Mid360。
- NUC 13 或 Jetson Orin NX 可选。
- 图传、云台、可视化遥控器。
- 支持系列算法预部署和定制功能。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | PX4 | Source value preserved. |
| Lidar | Mid360 | Source value preserved. |
| Onboard computer | NUC 13 or Jetson Orin NX | Source value preserved. |
| Video/control | 图传 + 云台 + 可视化遥控器 | Source value preserved. |
| Battery | High-voltage 4.35V per cell, 14000mAh | Source value preserved. |
| Endurance | 40min | Source value preserved. |
| Folded dimensions | 30cm x 26cm | Source value preserved. |
| Diagonal after propeller installation | 85cm | Source value preserved. |

## Features And Capabilities

- Long endurance.
- Foldable airframe.
- Mid360-based sensing and algorithms.
- Optional onboard computer configuration.
- Algorithm predeployment.
- Customization support.

## Application Scenarios

- Longer-duration outdoor or semi-outdoor tasks.
- General UAV platform development.
- Algorithm deployment on a larger airframe.
- Scenarios requiring visual remote control and gimbal.

## Pricing And Packages

Source does not provide a public price value in the captured markdown. Source notes include NUC13 or Jetson Orin NX software environment, full secondary development, support, operation videos, invoice support, company-account payment, Bilibili shop ordering, and QQ consultation.

Website readiness: emphasize endurance and foldability; rewrite sales-process details before public use.

## Website Rewrite Notes

- Current card already emphasizes 40min endurance and foldable design.
- Details page can add visual remote control, gimbal, algorithm predeployment, and custom function support.

## Image Assets

See `docs/content-library/assets/products/qihao/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/7hao.md`.
```

- [ ] **Step 6: Create `products/liyumen-x8.md`**

Use `out/p/liyumenx8.md` and `out/liyumenx8.md`, then create:

```markdown
# 鲤鱼门 X8

## Metadata
- slug: liyumen-x8
- source_files: `out/p/liyumenx8.md`, `out/liyumenx8.md`
- related_wiki: `wiki/liyumen-x8-user-guide.md`
- current_site_pages: `/products/liyumen-x8`, product card data in `src/data/products.ts`

## Quick Summary

鲤鱼门 X8 是面向复杂受限空间的工业级勘测无人机，解决地下隧道、矿山、林业等场景中“进不去、看不清、联不通”的痛点。最新资料包含 Mid360 方案和推荐的 Odin1 方案，强调触屏遥控、融合定位、彩色点云、航迹录制和复飞。

## Product Positioning

X8 面向工业勘测和复杂空间数据采集，重点不是教学入门，而是高可靠飞行、真实场景还原、弱网/无 GNSS 环境下的感知和建图能力。

## Core Selling Points

- 无 GNSS、弱光、强磁干扰、弱网环境下的自主飞行和勘测能力。
- 推荐 Odin1 方案，融合相机、雷达、IMU，免标定，同时获得点云、RGB、深度数据。
- 触屏遥控可直接操作机载 Ubuntu 和 ROS，减少外接电脑、显示器、键鼠需求。
- 支持一键扫描、彩色地图保存、Bag 录制、航迹录制、航迹复飞。
- 三维彩色点云“一比一现实还原”。
- MindCloud Studio 支持地图处理和多格式导出。
- 新机使用 7 寸桨和半固态电池，来源称续航 15.9min+，Odin1 方案续航 15 到 20 分钟区间。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| Flight controller | PX4 | Latest source says full series standard. |
| Power | 7 inch propellers, 60A ESC, semi-solid battery | Latest source preserved. |
| Battery capacity | 7500mAh in latest package source; 9000mAh appears in DOCX-derived page | Requires confirmation before public use. |
| Remote controller | H12PRO / touch-screen remote control | Source mentions touch-screen remote and H12PRO package table. |
| Lidar / sensor | Odin1 recommended; Mid360 variant available | Source package tables preserve both. |
| Onboard computer | Jetson Orin NX 16G full version, 8G standard version | Package table source. |
| Endurance | 15.9min+; Odin1 15-20min; older DOCX-derived source says 12min/18min | Requires final public spec confirmation. |
| Outer dimensions | 410mm x 410mm outer, 285mm wheelbase in latest source | Source preserved. |
| Point cloud output | Up to 700,000 points/s | DOCX-derived source. |
| FOV | 120 x 90 degrees | DOCX-derived source. |
| Camera | Depth 240 x 180 + RGB 1600 x 1296 | DOCX-derived source. |
| Pose update frequency | 400Hz | DOCX-derived source. |
| Detection range | 70m at 90 percent reflectivity, 30m at 10 percent reflectivity | DOCX-derived source. |

## Features And Capabilities

- Real-time spatial perception and color point-cloud viewing.
- Remote-control integrated visualization.
- Odin1 spatial memory.
- MindSLAM fusion localization.
- MindCloud Studio map processing.
- Multi-format point cloud export.
- Application scenarios include slopes, tunnels, sewers, bushes, furnaces, culverts, mines, and bridges.

## Pricing And Packages

Latest source contains package prices:

| Package | Source Price | Notes |
| --- | --- | --- |
| Mid360 all-capability version | 5.1 万一套 | Includes visual remote control, FastLio, FastLivo2, super obstacle avoidance, trajectory record/replay, sensor drivers. |
| Mid360 standard version | 2.5w | Hardware-focused, no visual remote control/software package, hardware after-sales only. |
| Odin all-capability version | 7.9w | Recommended by source. |
| Odin standard version | 2.7w | Hardware-focused, no visual remote control/software package, hardware after-sales only. |

Website readiness: prices may be sensitive. Public use requires confirmation from owner.

## Website Rewrite Notes

- Current page should prioritize latest `out/p/liyumenx8.md` over older DOCX-derived content when specs conflict.
- Mark battery capacity, endurance, and mass units for confirmation before public copy.
- Separate marketing page content from user-operation details; put APP workflow, radar startup, Bag recording, map saving, trajectory replay into Wiki.
- Current `src/pages/products/liyumen-x8.tsx` has uncommitted edits and should not be touched during content-library creation.

## Image Assets

See `docs/content-library/assets/products/liyumen-x8/_manifest.md` after asset collection.

## Source Notes

Primary latest source: `out/p/liyumenx8.md`. Extra brochure source: `out/liyumenx8.md`.
```

- [ ] **Step 7: Create `products/sim-platform.md`**

Use `out/p/gd-sim-wsl.md` and `out/p/gd-sim-matlab.md`, then create:

```markdown
# 狗弟仿真平台

## Metadata
- slug: sim-platform
- source_files: `out/p/gd-sim-wsl.md`, `out/p/gd-sim-matlab.md`
- related_wiki: `wiki/sim-wsl-install-guide.md`, `wiki/sim-matlab-vm-guide.md`
- current_site_pages: `/products/sim-platform`, product card data in `src/data/products.ts`

## Quick Summary

狗弟仿真平台包含 WSL 版 XTDrone 平台和 VMware + MATLAB 相关虚拟机资料。WSL 版面向 Windows 11 + NVIDIA 显卡用户，强调导入即用、GPU 适配、预装 XTDrone 相关环境和配套教程；VMware 版强调直接打开已配置虚拟机并跟随 B 站课程学习。

## Product Positioning

仿真平台面向论文实验、项目验收、仿真竞赛、算法验证和教学学习。核心价值是减少环境配置时间，把用户带到可运行的平台状态。

## Core Selling Points

- WSL 版在 Windows 中运行 Linux 子系统，避免双系统和传统虚拟机卡顿。
- 预装 XTDrone 相关环境，导入后直接使用。
- 支持 NVIDIA GPU 适配。
- 基础版已开源，豪华版提供额外资料和激活码数量。
- VMware + MATLAB 版提供完整虚拟机复制体，代码、地面站、MATLAB 代码可直接使用。
- 文档提供安装、激活、恢复、常见错误处理和补充说明。

## Key Specifications

| Item | Value | Notes |
| --- | --- | --- |
| WSL OS requirement | Windows 11 | Source says Windows 10 cannot use GPU for this platform. |
| GPU requirement | NVIDIA GPU | Source says old MAX250-like cards may not fit. |
| Storage | 35-70GB during install, about 35GB later | Source value preserved. |
| WSL distro | Ubuntu 18.04 | Source import example and platform note. |
| PX4 version | 1.13 | Source note. |
| Activation | Hardware-bound activation code | Source value preserved; not website-ready in raw form. |
| VMware account/password | bingo | Sensitive operational info; internal/wiki only. |
| WSL platform password | 1234 | Sensitive operational info; internal/wiki only. |

## Features And Capabilities

- WSL import workflow.
- VS Code and terminal workflows.
- Activation workflow.
- XTDrone learning platform.
- VMware virtual machine workflow.
- MATLAB and path planning supplements.
- Troubleshooting appendices for WSL and package issues.

## Application Scenarios

- Algorithm validation.
- UAV simulation competitions.
- Paper experiments.
- Teaching labs.
- PX4, Gazebo, ROS, XTDrone learning.

## Pricing And Packages

Source contains Bilibili shop links and notes about basic and deluxe versions. It states the platform requires activation and that basic and deluxe versions use the same platform, with deluxe version including additional materials and more activation codes.

Website readiness: publish product-level differences only after rewriting; raw activation flow, QQ contact, passwords, and purchase instructions should stay in Wiki/internal reference.

## Website Rewrite Notes

- Product page should focus on outcome: ready-to-use simulation platform for algorithm validation.
- Put installation and troubleshooting details in Wiki.
- Avoid showing raw passwords on public product marketing pages.

## Image Assets

See `docs/content-library/assets/products/sim-platform/_manifest.md` after asset collection.

## Source Notes

Primary sources: `out/p/gd-sim-wsl.md`, `out/p/gd-sim-matlab.md`.
```

- [ ] **Step 8: Commit product documents**

Run:

```bash
git add docs/content-library/products
git commit -m "docs: add product reference library"
```

Expected: commit succeeds.

## Task 4: Create Wiki Reference Documents

**Files:**
- Create: `docs/content-library/wiki/456-series-operation-guide.md`
- Create: `docs/content-library/wiki/sim-wsl-install-guide.md`
- Create: `docs/content-library/wiki/sim-matlab-vm-guide.md`
- Create: `docs/content-library/wiki/liyumen-x8-user-guide.md`

- [ ] **Step 1: Create `wiki/456-series-operation-guide.md`**

Create:

```markdown
# 456 系列使用与交付说明

## Metadata
- slug: 456-series-operation-guide
- category: operation-guide
- source_files: `out/p/456wiki.md`
- related_products: sihao, wuhao, liuhao
- recommended_route: `/wiki/456-series-operation-guide`

## Summary

这份 Wiki 面向四好、五好、六好系列的交付后使用和维护参考，覆盖硬件、电源、接线、电脑软件、QGC 已配置内容、程序代码结构、飞行指令和常见注意事项。

## Audience

- 已购买或正在交付四好、五好、六好系列无人机的用户。
- 需要理解硬件连接、飞控配置和机载电脑使用方式的技术人员。
- 后续编写网站 Wiki 页面或售后文档的维护者。

## Prerequisites

- 已获得对应无人机平台。
- 已获得发货配套视频。
- 能够访问无人机机载电脑或外接显示器、鼠标、键盘。
- 了解基本终端、SSH、QGC 和 ROS 操作。

## Procedure Or Guide

### Hardware

- Battery: 4S 5300mAh, full charge 16.8V, charge around 15V.
- Charger: source links B6 charger tutorial and Bilibili explanation.
- Motor: TMOTOR KV2550.
- ESC: brushless 4S ESC.
- Regulator: 16.8V to 12V for onboard computer and Mid360.
- Flight controller and power board: Holybro Pixhawk 4 and PM06.
- Receiver and remote: Radiomaster POCKET pairing details are in source.
- Optional camera: 100-degree no-distortion camera.
- Depth camera: Intel RealSense D435.
- Lidar: Livox Mid360.
- Onboard computer: Jetson Orin NX Super 8G with Ubuntu 20.04, ROS Noetic, JetPack 5.1.2 or newer source note.

### Power System

- Battery powers ESCs, PM06, and regulator.
- PM06 powers flight controller and reports battery voltage.
- Regulator powers onboard computer and Mid360.
- Onboard computer powers depth or USB camera through USB.

### Wiring

- Flight-controller power connects to PM06 output.
- Flight controller TELEM connects to onboard computer U1 serial for MAVROS.
- Receiver connects to flight controller.
- ESC signal wires connect to flight controller motor outputs.
- Mid360 uses Ethernet for data and 12V for power.
- D435 uses USB 3.0 Type-C to onboard computer.
- Onboard computer uses 12V power, U1 serial, HDMI, USB0, and gigabit Ethernet adapter for Mid360.

### Software

- MobaXterm for SSH remote connection.
- QGC for PX4 ground-station configuration.
- VS Code for code editing.
- VNC for remote visual login when needed.

### QGC Configuration Notes

Source states PX4 1.13 firmware is already flashed, sensors are calibrated, flight-controller orientation is configured, RC setup is done, and selected EKF and telemetry parameters are configured.

### Program And Command Areas

Source covers ROS workspace, SDK packages, YOLO code, system config files, Mid360 startup files, MAVROS dependencies, and flight-command procedures. Keep raw command usage in this Wiki, not product marketing pages.

## Troubleshooting

- Use source images and source text for exact wiring and QGC screens.
- Treat source password, IP, and local network examples as internal reference; rewrite before publishing publicly.
- Verify baud-rate notes before using in public documentation because source contains a correction note for TELEM1 baud rate.

## Related Product Notes

- `products/sihao.md`: product summary and specs.
- `products/wuhao.md`: higher-payload product summary and specs.
- `products/liuhao.md`: compact high-performance product summary and specs.

## Image Assets

See `docs/content-library/assets/wiki/456-series-operation-guide/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/456wiki.md`. This document is Wiki material, not product-page copy.
```

- [ ] **Step 2: Create `wiki/sim-wsl-install-guide.md`**

Create:

```markdown
# WSL 仿真平台安装与使用说明

## Metadata
- slug: sim-wsl-install-guide
- category: simulation-install-guide
- source_files: `out/p/gd-sim-wsl.md`
- related_products: sim-platform
- recommended_route: `/wiki/sim-wsl-install-guide`

## Summary

这份 Wiki 整理 WSL 版 XTDrone 仿真平台的购买注意事项、安装 WSL、导入平台、准备终端和 VS Code、激活平台以及常见问题。

## Audience

- 购买或试用 WSL 仿真平台的用户。
- 需要在 Windows 11 上运行 XTDrone 相关环境的学生、研究者和竞赛用户。
- 后续维护网站 Wiki 的内容编辑者。

## Prerequisites

- Windows 11.
- NVIDIA GPU.
- 35-70GB 可用空间。
- 管理员权限 PowerShell or Windows command prompt.
- Downloaded `.tar` platform file.
- Activation code when using paid activation flow.

## Procedure Or Guide

### Purchase Notes

Source states activation is required and tied to hardware. Basic and deluxe editions use the same platform; deluxe includes extra materials and more activation codes.

### Install WSL

Source procedure:

1. Enable Developer Mode.
2. Enable Windows Subsystem for Linux.
3. Enable Hyper-V if available.
4. Run `wsl --install` as administrator.
5. Install the WSL kernel update package from Microsoft when needed.
6. Enable VirtualMachinePlatform through Microsoft documented command.
7. Set WSL 2 as default with `wsl --set-default-version 2`.
8. Update WSL with `wsl --update --web-download`.

### Import XTDrone Platform

Use `wsl --import` with a distro name, install location, and `.tar` path. Source example:

```text
wsl --import Ubuntu-18.04 c:\wsl2 d:\save\linux\xtdrone-GDstudio-x.x.tar
```

Paths should avoid Chinese characters.

### Prepare Tools

- Use PowerShell or terminal to enter WSL.
- Use `terminator` as terminal inside platform.
- Use VS Code for editing platform files.

### Activation

Source contains activation workflow and QQ contact details. Treat as internal reference until public contact and activation copy are approved.

## Troubleshooting

Source appendices cover:

- EKF issues.
- WSL dual-platform issues.
- Package issues.
- Missing SDF files in Iris model directory.
- `wsl --install` proxy and install failures.
- `WslRegisterDistribution failed with error: 0x80071772`.
- Reinstalling the platform.
- Windows 11 24H2 WSL directory display issues.
- Opening QGC.

## Related Product Notes

- `products/sim-platform.md` provides product-level summary.

## Image Assets

See `docs/content-library/assets/wiki/sim-wsl-install-guide/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/gd-sim-wsl.md`. Raw activation details, passwords, and QQ contact copy are not public-ready by default.
```

- [ ] **Step 3: Create `wiki/sim-matlab-vm-guide.md`**

Create:

```markdown
# MATLAB 与 VMware 仿真平台说明

## Metadata
- slug: sim-matlab-vm-guide
- category: simulation-install-guide
- source_files: `out/p/gd-sim-matlab.md`
- related_products: sim-platform
- recommended_route: `/wiki/sim-matlab-vm-guide`

## Summary

这份 Wiki 整理 VMware 虚拟机版仿真平台和 MATLAB 相关补充说明，包括虚拟机打开流程、账号密码、课程学习入口、代码替换、导航功能、MATLAB license 注意事项、存储扩容和恢复出厂设置。

## Audience

- 使用 VMware 版仿真平台的用户。
- 需要 MATLAB 与 PX4、ROS、Gazebo 相关实验环境的用户。
- 后续维护仿真平台 Wiki 的内容编辑者。

## Prerequisites

- Windows computer with VMware Workstation.
- Downloaded and fully extracted VM archive.
- Access to Bilibili course videos.
- User-owned MATLAB license for MATLAB-specific add-ons when needed.

## Procedure Or Guide

### Open Virtual Machine

Source workflow:

1. Download compressed package from Baidu Netdisk.
2. Extract the full `.rar` package locally.
3. Open VMware.
4. Use File > Open.
5. Select `ubuntu+matlab.vmx`.
6. Choose that the virtual machine has been copied.
7. Follow source supplement to replace `offboard_control.h` and rebuild when required.

### Account And Password

Source states the virtual machine account/password is `bingo`. This is internal/wiki material and should not be shown on a public marketing page.

### Learning Path

Source says earlier course sections are older entry-level material; users should follow Bilibili video starting from section 7 for this VM.

### New Code Source Coordinate Fix

Replace `offboard_control.h` in `Home-project-volans-src-modules-px4_control-include`, then run:

```text
cd ~/project/volans
catkin build px4_control
```

### Autonomous Navigation

Source commands include:

```text
roslaunch simulation ros_2Dnav_demo_px4.launch
rosrun rqt_reconfigure rqt_reconfigure
roslaunch simulation ros_Auto2Dnav_demo_px4.launch
```

### MATLAB License

Source states MATLAB add-ons and PX4 toolkit use require the user's own license/account.

## Troubleshooting

Source supplements include:

- OMPL 3D RRT course note.
- Expanding virtual machine storage.
- Restoring factory snapshot.
- `Could not get lock /var/lib/dpkg/lock-frontend`.
- EKF visual positioning versus GPS positioning.

## Related Product Notes

- `products/sim-platform.md` provides product-level summary.

## Image Assets

See `docs/content-library/assets/wiki/sim-matlab-vm-guide/_manifest.md` after asset collection.

## Source Notes

Primary source: `out/p/gd-sim-matlab.md`. Passwords and Baidu links are internal reference until public publishing policy is confirmed.
```

- [ ] **Step 4: Create `wiki/liyumen-x8-user-guide.md`**

Create:

```markdown
# 鲤鱼门 X8 用户使用说明

## Metadata
- slug: liyumen-x8-user-guide
- category: product-user-guide
- source_files: `out/p/liyumenx8.md`, `out/liyumenx8.md`
- related_products: liyumen-x8
- recommended_route: `/wiki/liyumen-x8-user-guide`

## Summary

这份 Wiki 整理鲤鱼门 X8 的触屏遥控、雷达启动、地图保存、Bag 录制、雷达关闭、航迹录制和轨迹复飞等使用资料。产品定位、卖点和公开规格整理在 `products/liyumen-x8.md`。

## Audience

- 使用鲤鱼门 X8 的客户。
- 需要从触屏遥控器操作机载 Ubuntu/ROS、扫描、录制、处理地图的技术人员。
- 后续准备网站 Wiki 的内容维护者。

## Prerequisites

- X8 aircraft and touch-screen remote controller.
- Liyumen app on remote controller.
- Odin1 or Mid360 sensor package.
- MindCloud Studio when processing recorded map data.

## Procedure Or Guide

### Remote Control App

Source says the user long-presses the remote power button, opens the `liyumen` app, and uses the touchscreen interface to operate onboard computer functions.

### Start Radar

Source describes a radar startup popup:

- Choosing no starts radar localization only.
- Choosing yes starts radar and silently saves map data in the background.
- Map data is saved on the onboard NX and can be copied to USB for MindCloud processing.
- Source notes 10 minutes of data can use 9.5GB storage.

### Record Bag

After radar startup, Bag recording can choose topics and save data into the `Bags` folder on the NX desktop.

### Stop Radar

Source warns not to stop radar during flight because radar provides positioning data. Stop only when the aircraft is static on the ground.

### Record Trajectory

Source includes trajectory recording operation details. Keep exact UI screenshots and step ordering from source images during final Wiki page writing.

### Trajectory Replay

Source includes trajectory replay operation details. Keep replay warnings and operation sequence in Wiki, not on product marketing pages.

### Map Processing

MindCloud Studio supports processing scanned data, including annotation and processing, loop closure, bundle adjustment, moving-object filtering, and SOR filtering. Supported output formats in source include BIN, TXT, ASC, NEU, XYZ, PTS, CSV, LAS, LAZ, E57, LX, SBF, PLY, VTK, DXF, PCD, SHP, POV, PN, and PV.

## Troubleshooting

- Treat storage usage, radar stop warnings, and replay operation order as high-priority safety notes.
- Confirm final public wording for package prices and standard/all-capability edition differences before publishing.
- Confirm conflicting endurance and battery-capacity values before public product-page use.

## Related Product Notes

- `products/liyumen-x8.md` provides product-level summary, package notes, specs, and website rewrite notes.

## Image Assets

See `docs/content-library/assets/wiki/liyumen-x8-user-guide/_manifest.md` after asset collection.

## Source Notes

Primary latest source: `out/p/liyumenx8.md`. Extra DOCX-derived source and local converted images: `out/liyumenx8.md`, `out/media/media/*`.
```

- [ ] **Step 5: Commit Wiki documents**

Run:

```bash
git add docs/content-library/wiki
git commit -m "docs: add wiki reference library"
```

Expected: commit succeeds.

## Task 5: Collect And Manifest Image Assets

**Files:**
- Modify: `docs/content-library/assets/**`
- Modify: `docs/content-library/sources/image-inventory.md`

- [ ] **Step 1: Run asset collector without network**

Run:

```bash
python3 scripts/content_library_assets.py
```

Expected: command exits with code 0, copies local `out/media/media/*` images where source references are local, and creates manifests with remote images marked `missing: network disabled`.

- [ ] **Step 2: Run asset collector with network**

Run:

```bash
python3 scripts/content_library_assets.py --allow-network
```

Expected: command exits with code 0, downloads remote Yuque images, writes local asset files with names like `liyumen-x8-pointcloud-001-a81f2c.png`, and updates per-folder `_manifest.md` files plus `docs/content-library/sources/image-inventory.md`.

- [ ] **Step 3: Inspect missing images**

Run:

```bash
rg -n "missing:" docs/content-library/assets docs/content-library/sources/image-inventory.md
```

Expected: either no matches, or matches for inaccessible images that remain recorded with original URLs.

- [ ] **Step 4: Commit assets and manifests**

Run:

```bash
git add docs/content-library/assets docs/content-library/sources/image-inventory.md
git commit -m "docs: collect content library images"
```

Expected: commit succeeds.

## Task 6: Add Content Library Verification Script

**Files:**
- Create: `scripts/verify_content_library.py`

- [ ] **Step 1: Add verification script**

Create `scripts/verify_content_library.py`:

```python
#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
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
    "products/sanhao.md",
    "products/sihao.md",
    "products/wuhao.md",
    "products/liuhao.md",
    "products/qihao.md",
    "products/liyumen-x8.md",
    "products/sim-platform.md",
    "wiki/456-series-operation-guide.md",
    "wiki/sim-wsl-install-guide.md",
    "wiki/sim-matlab-vm-guide.md",
    "wiki/liyumen-x8-user-guide.md",
    "sources/source-inventory.md",
    "sources/image-inventory.md",
]

SENSITIVE_TERMS = ["密码", "激活码", "QQ", "账号", "付款", "购买"]


def fail(message: str) -> None:
    print(f"FAIL: {message}", file=sys.stderr)
    raise SystemExit(1)


def check_required_docs() -> None:
    for doc in REQUIRED_DOCS:
        path = LIB_ROOT / doc
        if not path.exists():
            fail(f"missing required document {path.relative_to(ROOT)}")
        if path.stat().st_size == 0:
            fail(f"empty required document {path.relative_to(ROOT)}")


def check_source_inventory() -> None:
    inventory = (LIB_ROOT / "sources" / "source-inventory.md").read_text(encoding="utf-8")
    for source in REQUIRED_SOURCES:
        if source not in inventory:
            fail(f"source inventory missing {source}")


def manifest_rows(path: Path) -> list[str]:
    if not path.exists():
        return []
    return [line for line in path.read_text(encoding="utf-8").splitlines() if line.startswith("| `")]


def check_manifests() -> None:
    image_inventory = LIB_ROOT / "sources" / "image-inventory.md"
    if not image_inventory.exists():
        fail("missing global image inventory")

    seen_paths: set[Path] = set()
    for manifest in (LIB_ROOT / "assets").glob("**/_manifest.md"):
        for row in manifest_rows(manifest):
            match = re.match(r"\| `([^`]+)` \|", row)
            if not match:
                fail(f"malformed manifest row in {manifest.relative_to(ROOT)}: {row}")
            local_name = match.group(1)
            if "/" in local_name:
                local_path = ROOT / local_name
            else:
                local_path = manifest.parent / local_name
            if local_path in seen_paths:
                continue
            seen_paths.add(local_path)
            if not local_name.endswith(".missing") and not local_path.exists():
                fail(f"manifest references missing asset {local_path.relative_to(ROOT)}")


def check_sensitive_readiness() -> None:
    for doc in (LIB_ROOT / "products").glob("*.md"):
        text = doc.read_text(encoding="utf-8")
        if any(term in text for term in SENSITIVE_TERMS):
            if "Website readiness" not in text:
                fail(f"sensitive terms in {doc.relative_to(ROOT)} without Website readiness note")


def main() -> int:
    check_required_docs()
    check_source_inventory()
    check_manifests()
    check_sensitive_readiness()
    print("content library verification passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 2: Run syntax check**

Run:

```bash
python3 -m py_compile scripts/verify_content_library.py
```

Expected: command exits with code 0 and prints no output.

- [ ] **Step 3: Commit verification script**

Run:

```bash
git add scripts/verify_content_library.py
git commit -m "chore: add content library verifier"
```

Expected: commit succeeds.

## Task 7: Run Verification And Final Review

**Files:**
- Modify only if verification finds manifest or document issues:
  - `docs/content-library/**/*.md`
  - `scripts/*.py`

- [ ] **Step 1: Run verifier**

Run:

```bash
python3 scripts/verify_content_library.py
```

Expected:

```text
content library verification passed
```

- [ ] **Step 2: Check worktree status**

Run:

```bash
git status --short
```

Expected: only intended content-library or script changes are present. Existing uncommitted website edits in `src/data/products.ts` and `src/pages/products/liyumen-x8.tsx` may still appear and must not be staged by this task.

- [ ] **Step 3: Review generated inventory for missing downloads**

Run:

```bash
rg -n "missing:|Review|No \\|" docs/content-library/sources/image-inventory.md docs/content-library/assets
```

Expected: any remaining `missing:` lines correspond to inaccessible remote images; all image rows default to `Review` until manually approved for public website use.

- [ ] **Step 4: Commit verification fixes if any**

If Step 1 or Step 3 required manifest or document corrections, run:

```bash
git add docs/content-library scripts
git commit -m "docs: verify content library"
```

Expected: commit succeeds if there were changes. If no changes were needed, skip this commit.

- [ ] **Step 5: Final summary**

Report:

```text
Content library created under docs/content-library.
Product references: 7.
Wiki references: 4.
Image manifests: generated under docs/content-library/assets.
Global inventories: docs/content-library/sources/source-inventory.md and image-inventory.md.
Verifier: python3 scripts/verify_content_library.py.
```

Expected: user can review the library without needing website changes.
