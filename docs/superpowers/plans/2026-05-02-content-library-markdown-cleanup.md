# Content Library Markdown Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean the Chinese product/wiki Markdown library so正文文档可阅读、可稳定渲染、命令块可复制执行，同时保留图片上下文和内部追踪能力。

**Architecture:** Treat `docs/content-library/products/*.md` and `docs/content-library/wiki/*.md` as public reading documents, and move source/manifests into `docs/content-library/internal/`. Update the verifier first so it encodes the new cleanup contract, then make narrowly scoped Markdown edits by document group.

**Tech Stack:** Markdown, Python 3 verification scripts, existing Git workflow.

---

## File Structure

- Modify `scripts/verify_content_library.py`: make it validate the new clean Markdown contract and the new `internal/` archive paths.
- Modify `docs/content-library/README.md`: describe the reading area, asset area, and internal tracking archive in Chinese.
- Move `docs/content-library/sources/source-inventory.md` to `docs/content-library/internal/sources/source-inventory.md`.
- Move `docs/content-library/sources/image-inventory.md` to `docs/content-library/internal/sources/image-inventory.md`.
- Move every `docs/content-library/assets/**/_manifest.md` to `docs/content-library/internal/manifests/<same-relative-parent>/_manifest.md`.
- Modify `docs/content-library/products/*.md`: clean frontmatter, generated residue, quote blocks, code blocks, image captions, and broken tables.
- Modify `docs/content-library/wiki/*.md`: clean frontmatter, generated residue, tutorial code blocks, explanatory text inside code blocks, quote blocks, and broken tables.
- Leave image files in `docs/content-library/assets/` untouched unless a Markdown reference is proven broken.
- Do not commit `docs/content-library/.obsidian/`.

## Task 1: Update Verifier For New Contract

**Files:**
- Modify: `scripts/verify_content_library.py`
- Test: existing command `python3 scripts/verify_content_library.py`

- [ ] **Step 1: Add failing expectations for internal archive paths**

  Edit `REQUIRED_DOCS` so it expects:

  ```python
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
  ```

- [ ] **Step 2: Replace source and manifest roots**

  Change source inventory reads from `LIB_ROOT / "sources"` to `LIB_ROOT / "internal" / "sources"`.

  Change manifest discovery from:

  ```python
  manifests = list((LIB_ROOT / "assets").glob("**/_manifest.md"))
  ```

  to:

  ```python
  manifests = list((LIB_ROOT / "internal" / "manifests").glob("**/_manifest.md"))
  ```

- [ ] **Step 3: Make manifest image paths resolve against assets**

  Replace `resolve_manifest_path()` with logic that supports archived manifests while still checking real image files under `assets/`:

  ```python
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
  ```

- [ ] **Step 4: Remove obsolete sensitive-readiness check**

  Delete `SENSITIVE_TERMS`, `check_sensitive_readiness_notes()`, and its call in `main()`. The approved design keeps sensitive source text in place and removes the website-readiness note from正文文档.

- [ ] **Step 5: Add clean Markdown checks**

  Add this helper and call it from `main()` after `check_chinese_document_labels()`:

  ```python
  FORBIDDEN_CONTENT_PATTERNS = [
      "描述已自动生成",
      "可信度",
      "网站可用性与来源备注",
      "来源文件：",
      "本文档按原始资料",
      "source_docs:",
      "assets_manifest:",
      "```plain",
      "```text",
      "```c",
  ]

  ALLOWED_FRONTMATTER_KEYS = {"title", "category", "product", "updated"}


  def frontmatter_keys(text: str) -> set[str]:
      if not text.startswith("---\n"):
          return set()
      end = text.find("\n---", 4)
      if end == -1:
          fail("frontmatter 未闭合")
      keys: set[str] = set()
      for line in text[4:end].splitlines():
          if not line.strip() or line.startswith("  "):
              continue
          if ":" in line:
              keys.add(line.split(":", 1)[0].strip())
      return keys


  def check_clean_markdown_contract() -> None:
      for doc in content_docs():
          text = doc.read_text(encoding="utf-8")
          rel = doc.relative_to(ROOT)
          keys = frontmatter_keys(text)
          unexpected = keys - ALLOWED_FRONTMATTER_KEYS
          if unexpected:
              fail(f"frontmatter 包含内部字段：{rel} -> {sorted(unexpected)}")
          for pattern in FORBIDDEN_CONTENT_PATTERNS:
              if pattern in text:
                  fail(f"正文仍包含脚手架或错误代码块 `{pattern}`：{rel}")
          for lineno, line in enumerate(text.splitlines(), start=1):
              if re.match(r"^\|\s*$", line):
                  fail(f"发现孤立表格竖线：{rel}:{lineno}")
              if re.match(r"^ {4,}\S", line) and not line.startswith("    - "):
                  fail(f"发现可疑缩进代码块：{rel}:{lineno}")
  ```

- [ ] **Step 6: Run verifier and confirm it fails before cleanup**

  Run:

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected: FAIL because `internal/sources/source-inventory.md` does not exist yet or正文 still contains脚手架关键词.

- [ ] **Step 7: Commit verifier change after it fails for the expected reason**

  ```bash
  git add scripts/verify_content_library.py
  git commit -m "test(content-library): enforce clean markdown contract"
  ```

## Task 2: Archive Internal Tracking Files

**Files:**
- Move: `docs/content-library/sources/*.md`
- Move: `docs/content-library/assets/**/_manifest.md`
- Modify: `docs/content-library/README.md`
- Test: `python3 scripts/verify_content_library.py`

- [ ] **Step 1: Create archive directories**

  ```bash
  mkdir -p docs/content-library/internal/sources
  mkdir -p docs/content-library/internal/manifests/products
  mkdir -p docs/content-library/internal/manifests/wiki
  ```

- [ ] **Step 2: Move source inventory files**

  ```bash
  git mv docs/content-library/sources/source-inventory.md docs/content-library/internal/sources/source-inventory.md
  git mv docs/content-library/sources/image-inventory.md docs/content-library/internal/sources/image-inventory.md
  ```

- [ ] **Step 3: Move product manifests**

  For each existing product manifest, preserve the product directory name under `internal/manifests/products/`:

  ```bash
  mkdir -p docs/content-library/internal/manifests/products/sanhao
  git mv docs/content-library/assets/products/sanhao/_manifest.md docs/content-library/internal/manifests/products/sanhao/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/sihao
  git mv docs/content-library/assets/products/sihao/_manifest.md docs/content-library/internal/manifests/products/sihao/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/wuhao
  git mv docs/content-library/assets/products/wuhao/_manifest.md docs/content-library/internal/manifests/products/wuhao/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/liuhao
  git mv docs/content-library/assets/products/liuhao/_manifest.md docs/content-library/internal/manifests/products/liuhao/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/qihao
  git mv docs/content-library/assets/products/qihao/_manifest.md docs/content-library/internal/manifests/products/qihao/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/liyumen-x8
  git mv docs/content-library/assets/products/liyumen-x8/_manifest.md docs/content-library/internal/manifests/products/liyumen-x8/_manifest.md
  mkdir -p docs/content-library/internal/manifests/products/sim-platform
  git mv docs/content-library/assets/products/sim-platform/_manifest.md docs/content-library/internal/manifests/products/sim-platform/_manifest.md
  ```

- [ ] **Step 4: Move wiki manifests**

  ```bash
  mkdir -p docs/content-library/internal/manifests/wiki/456-series-operation-guide
  git mv docs/content-library/assets/wiki/456-series-operation-guide/_manifest.md docs/content-library/internal/manifests/wiki/456-series-operation-guide/_manifest.md
  mkdir -p docs/content-library/internal/manifests/wiki/sim-wsl-install-guide
  git mv docs/content-library/assets/wiki/sim-wsl-install-guide/_manifest.md docs/content-library/internal/manifests/wiki/sim-wsl-install-guide/_manifest.md
  mkdir -p docs/content-library/internal/manifests/wiki/sim-matlab-vm-guide
  git mv docs/content-library/assets/wiki/sim-matlab-vm-guide/_manifest.md docs/content-library/internal/manifests/wiki/sim-matlab-vm-guide/_manifest.md
  mkdir -p docs/content-library/internal/manifests/wiki/liyumen-x8-user-guide
  git mv docs/content-library/assets/wiki/liyumen-x8-user-guide/_manifest.md docs/content-library/internal/manifests/wiki/liyumen-x8-user-guide/_manifest.md
  ```

- [ ] **Step 5: Rewrite README for the new layout**

  Replace the README body with a concise Chinese description:

  ````markdown
  # 中文产品资料库

  这个目录保存后续网站修改和 Wiki 模块建设所需的中文产品资料。正文文档以阅读和内容复用为主，图片保留在正文对应位置。

  ## 目录

  - `products/`：产品资料正文。
  - `wiki/`：教程和交付说明正文。
  - `assets/`：正文引用的图片资源。
  - `internal/`：来源清单和图片 manifest，仅用于维护追踪。

  ## 使用原则

  - 阅读和改写内容时优先查看 `products/` 和 `wiki/`。
  - 不要把 `internal/` 中的维护表格复制进正文。
  - 图片应继续放在正文相关段落附近，不集中堆到文末。
  - 公开发布到网站前，再单独审校价格、账号、密码、购买渠道、QQ、激活码等信息。

  ## 维护检查

  运行：

  ```bash
  python3 scripts/verify_content_library.py
  ```
  ````

- [ ] **Step 6: Run verifier and inspect failure list**

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected: archive checks pass, but正文 cleanup checks still fail.

- [ ] **Step 7: Commit archive layout**

  ```bash
  git add docs/content-library scripts/verify_content_library.py
  git commit -m "docs(content-library): archive internal tracking files"
  ```

## Task 3: Clean Shared Document Scaffolding

**Files:**
- Modify: `docs/content-library/products/*.md`
- Modify: `docs/content-library/wiki/*.md`
- Test: `python3 scripts/verify_content_library.py`

- [ ] **Step 1: For every正文 doc, reduce frontmatter**

  Convert the top block from this shape:

  ```yaml
  ---
  title: 三好学生
  category: 产品资料
  product: 三好学生
  source_docs:
    - out/p/3hao.md
  assets_manifest:
    - docs/content-library/assets/products/sanhao/_manifest.md
  updated: 2026-05-01
  ---
  ```

  to:

  ```yaml
  ---
  title: 三好学生
  category: 产品资料
  product: 三好学生
  updated: 2026-05-01
  ---
  ```

- [ ] **Step 2: Remove the generated intro sentence**

  Delete this exact sentence wherever it appears:

  ```markdown
  本文档按原始资料的图文顺序重建，图片保留在对应上下文位置，便于作为中文知识库继续整理。
  ```

- [ ] **Step 3: Remove website-readiness footer sections**

  In every正文 doc, delete the section starting at:

  ```markdown
  ## 网站可用性与来源备注
  ```

  through the source file list at the end of the document.

- [ ] **Step 4: Remove generated confidence residue**

  Delete standalone lines containing:

  ```text
  描述已自动生成
  中度可信度描述已自动生成
  低可信度描述已自动生成
  ```

  Also delete the same phrases when prefixed by broken table markers or indentation, such as `| 中度可信度描述已自动生成`.

- [ ] **Step 5: Run scaffold keyword scan**

  ```bash
  rg -n '描述已自动生成|可信度|网站可用性与来源备注|来源文件|source_docs|assets_manifest|本文档按原始资料' docs/content-library/products docs/content-library/wiki
  ```

  Expected: no matches.

- [ ] **Step 6: Commit shared scaffold cleanup**

  ```bash
  git add docs/content-library/products docs/content-library/wiki
  git commit -m "docs(content-library): remove markdown scaffolding"
  ```

## Task 4: Clean Product Documents

**Files:**
- Modify: `docs/content-library/products/sanhao.md`
- Modify: `docs/content-library/products/sihao.md`
- Modify: `docs/content-library/products/wuhao.md`
- Modify: `docs/content-library/products/liuhao.md`
- Modify: `docs/content-library/products/qihao.md`
- Modify: `docs/content-library/products/liyumen-x8.md`
- Test: `python3 scripts/verify_content_library.py`

- [ ] **Step 1: Convert product quote blocks to normal Markdown**

  For product configuration and service sections that currently use `>`, remove the quote marker and normalize as ordinary lists. Example:

  ```markdown
  > 1.飞控：Holybro pixhawk 6c
  >
  > 2.雷达：思岚 S1
  ```

  becomes:

  ```markdown
  1. 飞控：Holybro pixhawk 6c
  2. 雷达：思岚 S1
  ```

- [ ] **Step 2: Clean `liuhao.md` command blocks**

  Change `plain` and the mistaken `c` command block to `bash`. Split all command explanation lines. For example:

  ````markdown
  获取无人机的定位数据并进行三维扫描建图。

  ```bash
  ./3DSLAM.sh
  ```

  获取无人机的定位数据并进行三维建图。

  ```bash
  ./fastlivo2.sh
  ```
  ````

  For the “新手建议” block, move `新手建议：` outside the code block and split each command from its explanation.

- [ ] **Step 3: Clean `liyumen-x8.md` broken table and caption fragments**

  Remove broken confidence rows and convert image-caption table fragments into linear captions:

  ```markdown
  ![image-2](../assets/products/liyumen-x8/liyumen-x8-image-002-70d85c23.jpg)

  俯视图

  ![image3](../assets/products/liyumen-x8/image3.jpeg)

  后侧俯视图
  ```

  Apply the same style to side view, rear view, tunnel scan, bridge scan, vehicle scan, and bridge opening scan captions. Remove leading spaces before caption text.

- [ ] **Step 4: Remove bad trailing table pipes in `liyumen-x8.md`**

  Replace lines like:

  ```markdown
  （2 块） |
  ```

  with:

  ```markdown
  （2 块）
  ```

- [ ] **Step 5: Run product scans**

  ```bash
  rg -n '^>|```plain|```c|^ {4,}\\S|^\\|\\s*$|^\\|[^|]*$|[^|]*\\|\\s*$' docs/content-library/products
  ```

  Expected: no quote blocks, no `plain` blocks, no shell command block marked `c`, and no obvious broken table/caption residue. If legitimate Markdown tables still match, inspect them manually and keep only valid tables.

- [ ] **Step 6: Run verifier**

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected: product-related failures are gone; wiki command block failures may remain.

- [ ] **Step 7: Commit product cleanup**

  ```bash
  git add docs/content-library/products
  git commit -m "docs(content-library): clean product markdown"
  ```

## Task 5: Clean Wiki Tutorial Documents

**Files:**
- Modify: `docs/content-library/wiki/456-series-operation-guide.md`
- Modify: `docs/content-library/wiki/sim-wsl-install-guide.md`
- Modify: `docs/content-library/wiki/sim-matlab-vm-guide.md`
- Test: `python3 scripts/verify_content_library.py`

- [ ] **Step 1: Convert all tutorial command fences to `bash`**

  Change every ` ```plain ` command fence in wiki docs to ` ```bash ` after moving non-command prose outside the code block.

- [ ] **Step 2: Split `456-series-operation-guide.md` command explanations**

  For lines like:

  ````markdown
  ```plain
  ./3DSLAM.sh 获取无人机的定位数据（记得检查定位数据是否正常输出）
  roslaunch ego_planner single_run_in_expmid.launch   启动egoplanner(mid360提供的障碍物点云信息)；
  解锁无人机 按下 offboard 模式按键 无人机将在机载电脑的控制下飞到 1 m,然后按照 rviz 打点的位置进行飞行。
  在rviz上打点飞行
  ```
  ````

  rewrite as:

  ````markdown
  获取无人机定位数据，执行前记得检查定位数据是否正常输出。

  ```bash
  ./3DSLAM.sh
  ```

  启动 egoplanner，使用 mid360 提供的障碍物点云信息。

  ```bash
  roslaunch ego_planner single_run_in_expmid.launch
  ```

  启动控制器，上至 rviz，下至 egoplanner 算法。

  ```bash
  roslaunch egoctrl_v1 egoctrl_yuanshi.launch
  ```

  解锁无人机，按下 offboard 模式按键。无人机会在机载电脑控制下飞到 1 m，然后按照 rviz 打点位置飞行。

  在 rviz 上打点飞行。
  ````

  Apply this pattern to all “上手飞行常用指令” command groups.

- [ ] **Step 3: Fix shell-script block comments in `456-series-operation-guide.md`**

  In the `./3DSLAM.sh` script listing, preserve executable lines in bash and convert Chinese explanations into comments when they explain the same script line:

  ```bash
  source ~/.bashrc
  roscore &
  sleep 4
  roslaunch imu_tf mid360_imu_tf.launch &
  # 进行 mid360 的 IMU 姿态变换
  roslaunch slam_to_mavros tf_to_mavros.launch &
  # 将 mid360 话题变换为 mavros 系列话题
  ```

  Keep comments short and do not invent new technical meaning.

- [ ] **Step 4: Fix `sim-matlab-vm-guide.md` prose code block**

  Move the “注：合集中的前4节课...” paragraph out of the code block. Convert numbered statements inside it into ordinary Markdown list items:

  ```markdown
  注：合集中的前 4 节课是较早的入门内容，可以看看，不用跟着操作。这个虚拟机对应后面的动手操作内容，可以直接使用，并从第 7 节视频开始学习：[视频链接](https://www.bilibili.com/video/BV1Km411y75k/?vd_source=4289c781adc3a9ced242221ce6b3f4e0)。

  本虚拟机基于开源项目进行修复和优化，开源链接在视频简介中。

  1. 资料和文档在虚拟机桌面上，不要看其他位置。
  2. 桌面上的教学视频是装包过程记录，不要跟着重复编译或安装。
  ```

- [ ] **Step 5: Convert wiki quote blocks that are notes**

  In `sim-matlab-vm-guide.md`, convert the VMware/Baidu Netdisk note from quote block to normal note text or list, preserving the link and提取码.

- [ ] **Step 6: Run wiki scans**

  ```bash
  rg -n '^>|```plain|```c|^ {4,}\\S|^\\|\\s*$|^\\|[^|]*$' docs/content-library/wiki
  ```

  Expected: no quote blocks, no `plain` blocks, no shell command block marked `c`, no obvious bad tables, and no unintended indented code.

- [ ] **Step 7: Run verifier**

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected: content library verification passed.

- [ ] **Step 8: Commit wiki cleanup**

  ```bash
  git add docs/content-library/wiki
  git commit -m "docs(content-library): clean wiki tutorial markdown"
  ```

## Task 6: Final Verification And Review

**Files:**
- Review: `docs/content-library/products/*.md`
- Review: `docs/content-library/wiki/*.md`
- Review: `docs/content-library/README.md`
- Review: `scripts/verify_content_library.py`

- [ ] **Step 1: Run full verifier**

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected:

  ```text
  content library verification passed
  ```

- [ ] **Step 2: Compile Python verification scripts**

  ```bash
  PYTHONPYCACHEPREFIX=/private/tmp/zfly_pycache python3 -m py_compile scripts/verify_content_library.py scripts/rebuild_content_library_docs.py
  ```

  Expected: no output and exit code 0.

- [ ] **Step 3: Run final text scans**

  ```bash
  rg -n '描述已自动生成|可信度|网站可用性与来源备注|来源文件|source_docs|assets_manifest|本文档按原始资料|```plain|```text' docs/content-library/products docs/content-library/wiki
  ```

  Expected: no matches.

- [ ] **Step 4: Verify image references**

  ```bash
  python3 scripts/verify_content_library.py
  ```

  Expected: all local Markdown image references resolve to existing files.

- [ ] **Step 5: Inspect largest diffs manually**

  Run:

  ```bash
  git diff --stat HEAD
  git diff -- docs/content-library/wiki/456-series-operation-guide.md
  git diff -- docs/content-library/products/liyumen-x8.md
  git diff -- docs/content-library/products/liuhao.md
  ```

  Confirm:

  - Images remain near their original context.
  - Command explanations were moved outside code blocks.
  - No product/tutorial sections were accidentally deleted.
  - External links remain present.

- [ ] **Step 6: Check whitespace errors**

  ```bash
  git diff --check
  ```

  Expected: no whitespace errors.

- [ ] **Step 7: Commit final verification fixes if needed**

  If Task 6 finds small fixes, apply them and commit:

  ```bash
  git add docs/content-library scripts/verify_content_library.py
  git commit -m "docs(content-library): verify markdown cleanup"
  ```

  If there are no extra fixes, do not create an empty commit.

## Self-Review

- Spec coverage: The plan covers frontmatter cleanup, scaffolding deletion, code block strictness, command/prose splitting, quote cleanup, broken table/caption cleanup, internal archive layout, README updates, image reference validation, and final manual review.
- Placeholder scan: No task uses open-ended placeholders; each task includes exact files, commands, and expected outcomes.
- Type and path consistency: New internal paths are consistently `docs/content-library/internal/sources/` and `docs/content-library/internal/manifests/...`; verifier path changes match the archive task.
