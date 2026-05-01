# Content Library Design

Date: 2026-05-01

## Purpose

Build a local content reference library for future website changes. The library will organize product-facing material, future Wiki material, source provenance, and image assets from `out/p`, `out/liyumenx8.md`, `out/media`, and remote Yuque image references.

The immediate goal is not to make the website read from this content automatically. The goal is to create a dependable local reference base so later product page, homepage, and Wiki module work can use accurate, traceable content and well-managed image resources.

## Current Context

The website is a Next.js and Tailwind project. Product cards currently read from `src/data/products.ts`, while several products also have independent product pages under `src/pages/products/`.

Current source material:

- `out/p/3hao.md`: Sanhao product material.
- `out/p/4hao.md`: Sihao product material.
- `out/p/5hao.md`: Wuhao product material.
- `out/p/6hao.md`: Liuhao product material.
- `out/p/7hao.md`: Qihao product material.
- `out/p/liyumenx8.md`: latest Liyumen X8 product, pricing, upgrade, and user-operation material.
- `out/liyumenx8.md`: extra Liyumen X8 brochure-like material converted from DOCX.
- `out/p/456wiki.md`: long-form operation, hardware, wiring, software, QGC, and flight-command material for the 4/5/6 series.
- `out/p/gd-sim-wsl.md`: WSL-based simulation platform install and usage material.
- `out/p/gd-sim-matlab.md`: VMware and MATLAB simulation platform material.
- `out/media/media/*`: local media files from the X8 DOCX conversion.
- Remote Yuque image URLs embedded across the markdown files.

Existing uncommitted website edits in `src/data/products.ts` and `src/pages/products/liyumen-x8.tsx` are outside this design task and must not be overwritten.

## Recommended Approach

Use one local content library with separate content domains:

```text
docs/content-library/
  README.md
  products/
  wiki/
  assets/
  sources/
```

This keeps product marketing references and future Wiki references separate while sharing one asset inventory and one source inventory. It remains easy for humans to read, but it also leaves enough structure to support a future `/wiki` module.

## Directory Structure

```text
docs/content-library/
  README.md
  products/
    sanhao.md
    sihao.md
    wuhao.md
    liuhao.md
    qihao.md
    liyumen-x8.md
    sim-platform.md
  wiki/
    456-series-operation-guide.md
    sim-wsl-install-guide.md
    sim-matlab-vm-guide.md
    liyumen-x8-user-guide.md
  assets/
    products/
      sanhao/
      sihao/
      wuhao/
      liuhao/
      qihao/
      liyumen-x8/
      sim-platform/
    wiki/
      456-series-operation-guide/
      sim-wsl-install-guide/
      sim-matlab-vm-guide/
      liyumen-x8-user-guide/
  sources/
    source-inventory.md
    image-inventory.md
```

## Content Classification

Product documents should contain concise, website-facing reference material:

- Product positioning.
- Product card summary.
- Core selling points.
- Key specifications.
- Product features.
- Application scenarios.
- Current website usage notes.
- Related Wiki links.
- Source references.
- Image asset references suitable for product pages.

Wiki documents should contain tutorial, operation, setup, delivery, and troubleshooting material:

- Hardware explanation.
- Wiring and power notes.
- Software setup.
- QGC and flight-controller notes.
- Commands and procedures.
- Installation guides.
- Activation and usage notes.
- Troubleshooting appendices.
- Related products.
- Suggested future website route.

## Source Mapping

| Source | Target |
| --- | --- |
| `out/p/3hao.md` | `products/sanhao.md` |
| `out/p/4hao.md` | `products/sihao.md` |
| `out/p/5hao.md` | `products/wuhao.md` |
| `out/p/6hao.md` | `products/liuhao.md` |
| `out/p/7hao.md` | `products/qihao.md` |
| `out/p/liyumenx8.md` | `products/liyumen-x8.md`, `wiki/liyumen-x8-user-guide.md` |
| `out/liyumenx8.md` | `products/liyumen-x8.md`, `wiki/liyumen-x8-user-guide.md` |
| `out/p/456wiki.md` | `wiki/456-series-operation-guide.md` |
| `out/p/gd-sim-wsl.md` | `products/sim-platform.md`, `wiki/sim-wsl-install-guide.md` |
| `out/p/gd-sim-matlab.md` | `products/sim-platform.md`, `wiki/sim-matlab-vm-guide.md` |
| `out/media/media/*` | `assets/products/liyumen-x8/` or `assets/wiki/liyumen-x8-user-guide/` based on use |
| Remote Yuque image URLs | Download into the matching `assets/` directory and register in manifests |

## Product Document Template

Each product document should use this structure:

```markdown
# Product Name

## Metadata
- slug:
- source_files:
- related_wiki:
- current_site_pages:

## Quick Summary

## Product Positioning

## Core Selling Points

## Key Specifications

## Features And Capabilities

## Application Scenarios

## Pricing And Packages

## Website Rewrite Notes

## Image Assets

## Source Notes
```

`Pricing And Packages` should preserve source values when present. If values are sensitive, uncertain, or not intended for the public site, mark them as internal reference rather than removing them.

## Wiki Document Template

Each Wiki document should use this structure:

```markdown
# Wiki Title

## Metadata
- slug:
- category:
- source_files:
- related_products:
- recommended_route:

## Summary

## Audience

## Prerequisites

## Procedure Or Guide

## Troubleshooting

## Related Product Notes

## Image Assets

## Source Notes
```

The recommended route is advisory only. The implementation of a `/wiki` module is out of scope for this design.

## Image Asset Rules

Images are part of the content library and must be managed strictly.

Rules:

- Download remote Yuque images into the matching `docs/content-library/assets/` directory.
- Move local `out/media/media/*` images into the matching assets directory and record their original source paths.
- Do not overwrite or move existing website images in `public/images/products`.
- Do not keep random remote filenames as canonical names.
- Avoid duplicate filenames by including a slug, use label, sequence number, and short hash.
- Keep original URLs and source references in manifests.
- Record whether each image is suitable for public website use.
- Preserve the original source image URL even after downloading.
- If two sources point to the same image content, keep one local file and record both source references.

Naming format:

```text
content-slug-use-000-shorthash.ext
```

Examples:

```text
liyumen-x8-hero-001-a81f2c.png
liyumen-x8-pointcloud-002-c91a04.png
456-series-wiring-004-d92b11.png
sim-wsl-install-007-4bf03a.png
```

Each asset directory should contain `_manifest.md`:

```markdown
# Image Manifest

| Local File | Source URL Or Path | Source Document | Original ID Or Alt | Suggested Use | Website Ready | Notes |
| --- | --- | --- | --- | --- | --- | --- |
```

The global `sources/image-inventory.md` should aggregate all image records across the library.

## Source Tracking

`sources/source-inventory.md` should list every source file and its target documents:

```markdown
| Source | Type | Target Documents | Notes |
| --- | --- | --- | --- |
```

Each generated product or Wiki document should also include a local source note so someone reading one document can trace its origin without opening the global inventory.

## Handling Ambiguity

The library must preserve source truth and mark uncertainty explicitly.

Examples:

- If a unit appears suspicious, such as drone mass written as `2450kg`, keep a note that the source says `kg` and mark it as requiring confirmation before public website use.
- If a document mixes product marketing and operational instructions, split it into product and Wiki targets.
- If a remote image cannot be downloaded, keep its URL in the manifest and mark local file as missing.
- If a source contains private activation, account, password, or purchase details, preserve it as internal reference and mark it as not website-ready.

## Future Wiki Module Readiness

This design prepares content for a future independent Wiki module, but does not implement frontend routes.

Wiki documents should include:

- Stable slug.
- Category.
- Related products.
- Suggested route.
- Short summary.
- Internal/public readiness notes.

Suggested routes:

```text
/wiki/456-series-operation-guide
/wiki/sim-wsl-install-guide
/wiki/sim-matlab-vm-guide
/wiki/liyumen-x8-user-guide
```

## Implementation Boundaries

This project phase should create the local content library only.

In scope:

- Create `docs/content-library`.
- Create product reference documents.
- Create Wiki reference documents.
- Download and organize image assets.
- Create per-folder image manifests.
- Create global source and image inventories.
- Preserve provenance and uncertainty notes.

Out of scope:

- Implement `/wiki` frontend pages.
- Convert the library into a CMS or website data source.
- Rewrite existing product pages.
- Replace current `public/images/products` assets.
- Commit unrelated website edits.

## Verification

The implementation should be verified by:

- Checking that every nonempty source markdown file is mapped to at least one target document.
- Checking that every downloaded or moved image is listed in a manifest.
- Checking that no two asset files share the same final path.
- Checking that all local image references in generated documents point to existing files.
- Checking that sensitive or operational-only content is not marked as website-ready by default.
- Running `git status --short` to confirm only intended documentation and asset files were changed.
