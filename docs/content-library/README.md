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
