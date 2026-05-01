# 鲤鱼门 X8 用户使用说明

## 基础信息

- slug：`liyumen-x8-user-guide`
- 分类：`product-user-guide`
- 来源文件：`out/p/liyumenx8.md`、`out/liyumenx8.md`
- 关联产品：鲤鱼门 X8
- 建议未来路由：`/wiki/liyumen-x8-user-guide`

## 摘要

这份 Wiki 整理鲤鱼门 X8 的触屏遥控、雷达启动、地图保存、Bag 录制、雷达关闭、航迹录制和轨迹复飞等使用资料。产品定位、卖点和公开规格整理在 `products/liyumen-x8.md`。

## 适用读者

- 使用鲤鱼门 X8 的客户。
- 需要从触屏遥控器操作机载 Ubuntu/ROS、扫描、录制、处理地图的技术人员。
- 后续准备网站 Wiki 的内容维护者。

## 前置条件

- X8 无人机本体。
- 触屏遥控器。
- 遥控器上的 Liyumen 应用。
- Odin1 或 Mid360 传感器方案。
- 需要处理地图数据时使用 MindCloud Studio。

## 内容结构

### 遥控器应用

来源说明：长按遥控器电源键开机后，打开 `liyumen` 应用，通过触屏界面操作机载电脑功能。

### 启动雷达

来源描述雷达启动弹窗：

- 选择“否”代表仅启动雷达定位。
- 选择“是”代表启动雷达的同时在后台静默保存地图数据。
- 地图数据保存在机载 NX 内，可复制到 U 盘后用 MindCloud 打开。
- 来源提示 10 分钟数据约占用 9.5GB 存储空间。

### 录制 Bag

启动雷达后，可选择话题并录制 Bag。录制完成后再次点击结束录制，Bag 包保存到 NX 桌面的 `Bags` 文件夹内。

### 关闭雷达

来源明确提醒：飞行中不可关闭雷达，因为雷达为飞行提供定位数据。只有飞机在地面静止时才可以关闭。

### 录制航迹

来源包含航迹录制操作说明。后续生成正式 Wiki 页面时，应结合来源截图保留操作顺序和安全提醒。

### 轨迹复飞

来源包含轨迹复飞操作说明。轨迹复飞属于使用说明内容，不建议放入产品营销页。

### 地图处理

MindCloud Studio 支持扫描数据处理，包括高效空间数据标注与处理、回环检测、平差优化、运动物体滤除、SOR 滤波处理等。来源列出的导出格式包括 BIN、TXT、ASC、NEU、XYZ、PTS、CSV、LAS、LAZ、E57、LX、SBF、PLY、VTK、DXF、PCD、SHP、POV、PN、PV。

## 排障与注意事项

- 存储占用、飞行中不可关闭雷达、航迹复飞操作顺序属于高优先级安全提示。
- 套装价格、标准版/全能版差异在公开发布前需要确认。
- 续航和电池容量存在多个来源版本，公开产品页使用前需要确认最终口径。

## 关联产品资料

- `products/liyumen-x8.md`

## 图片资产

图片来源清单：`docs/content-library/assets/wiki/liyumen-x8-user-guide/_manifest.md`。以下按来源文档中的图片顺序保留，便于结合前文判断用途。

### image-1：点云/扫描

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-001-1b9dc446.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-001-1b9dc446.png`

![liyumen-x8-user-guide image-1 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-001-1b9dc446.png)

### image-2：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-002-5482330a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-002-5482330a.png`

![liyumen-x8-user-guide image-2 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-002-5482330a.png)

### image-3：点云/扫描

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-003-5bebdeed.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-003-5bebdeed.png`

![liyumen-x8-user-guide image-3 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-003-5bebdeed.png)

### image-4：点云/扫描

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-004-73ec7004.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-004-73ec7004.png`

![liyumen-x8-user-guide image-4 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-004-73ec7004.png)

### image-14：接线/配置

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-014-9fa751b7.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-014-9fa751b7.png`

![liyumen-x8-user-guide image-14 接线/配置](../assets/products/liyumen-x8/liyumen-x8-wiring-014-9fa751b7.png)

### image-15：接线/配置

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-015-c9cc0fd3.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-015-c9cc0fd3.png`

![liyumen-x8-user-guide image-15 接线/配置](../assets/products/liyumen-x8/liyumen-x8-wiring-015-c9cc0fd3.png)

### image-16：接线/配置

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-016-9db6501a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-016-9db6501a.png`

![liyumen-x8-user-guide image-16 接线/配置](../assets/products/liyumen-x8/liyumen-x8-wiring-016-9db6501a.png)

### image-17：接线/配置

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-017-5b57e931.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-017-5b57e931.png`

![liyumen-x8-user-guide image-17 接线/配置](../assets/products/liyumen-x8/liyumen-x8-wiring-017-5b57e931.png)

### image-18：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-018-1e1440c1.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-018-1e1440c1.png`

![liyumen-x8-user-guide image-18 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-018-1e1440c1.png)

### image-19：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-019-41a7c1ef.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-019-41a7c1ef.png`

![liyumen-x8-user-guide image-19 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-019-41a7c1ef.png)

### image-20：点云/扫描

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-020-f76ca4cc.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-020-f76ca4cc.png`

![liyumen-x8-user-guide image-20 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-020-f76ca4cc.png)

### image-21：点云/扫描

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-021-f1ca3265.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-021-f1ca3265.png`

![liyumen-x8-user-guide image-21 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-021-f1ca3265.png)

### image-22：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-022-c2b46718.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-022-c2b46718.png`

![liyumen-x8-user-guide image-22 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-022-c2b46718.png)

### image-23：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-023-395f88dd.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-023-395f88dd.png`

![liyumen-x8-user-guide image-23 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-023-395f88dd.png)

### image-24：硬件

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-024-d72f91b4.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-hardware-024-d72f91b4.png`

![liyumen-x8-user-guide image-24 硬件](../assets/products/liyumen-x8/liyumen-x8-hardware-024-d72f91b4.png)

### image-25：遥控器/交互

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-remote-control-025-a5e1190b.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-remote-control-025-a5e1190b.png`

![liyumen-x8-user-guide image-25 遥控器/交互](../assets/products/liyumen-x8/liyumen-x8-remote-control-025-a5e1190b.png)

### image-26：接线/配置

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-026-b749d1b5.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-wiring-026-b749d1b5.png`

![liyumen-x8-user-guide image-26 接线/配置](../assets/products/liyumen-x8/liyumen-x8-wiring-026-b749d1b5.png)

### image-27：图片

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-027-4b402992.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-027-4b402992.png`

![liyumen-x8-user-guide image-27 图片](../assets/products/liyumen-x8/liyumen-x8-image-027-4b402992.png)

### image-28：图片

- 来源：`out/p/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-028-3785c7ca.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-028-3785c7ca.png`

![liyumen-x8-user-guide image-28 图片](../assets/products/liyumen-x8/liyumen-x8-image-028-3785c7ca.png)

### image-1：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-001-357552fb.jpg`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-001-357552fb.jpg`

![liyumen-x8-user-guide image-1 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-001-357552fb.jpg)

### image-2：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-002-70d85c23.jpg`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-002-70d85c23.jpg`

![liyumen-x8-user-guide image-2 图片](../assets/products/liyumen-x8/liyumen-x8-image-002-70d85c23.jpg)

### image-3：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-003-8b3dc034.jpg`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-003-8b3dc034.jpg`

![liyumen-x8-user-guide image-3 图片](../assets/products/liyumen-x8/liyumen-x8-image-003-8b3dc034.jpg)

### image-5：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-005-e6e658a2.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-005-e6e658a2.png`

![liyumen-x8-user-guide image-5 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-005-e6e658a2.png)

### image-6：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-006-93af7d53.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-006-93af7d53.png`

![liyumen-x8-user-guide image-6 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-006-93af7d53.png)

### image-7：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-007-66ff731b.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-007-66ff731b.png`

![liyumen-x8-user-guide image-7 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-007-66ff731b.png)

### image-8：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-008-bb8146c4.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-008-bb8146c4.png`

![liyumen-x8-user-guide image-8 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-008-bb8146c4.png)

### image-9：产品图

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-product-009-927619fb.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-product-009-927619fb.png`

![liyumen-x8-user-guide image-9 产品图](../assets/products/liyumen-x8/liyumen-x8-product-009-927619fb.png)

### image-10：遥控器/交互

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-remote-control-010-b76ffa7a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-remote-control-010-b76ffa7a.png`

![liyumen-x8-user-guide image-10 遥控器/交互](../assets/products/liyumen-x8/liyumen-x8-remote-control-010-b76ffa7a.png)

### image-11：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-011-58416449.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-011-58416449.png`

![liyumen-x8-user-guide image-11 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-011-58416449.png)

### image-12：点云/扫描

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-012-59f81fab.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-pointcloud-012-59f81fab.png`

![liyumen-x8-user-guide image-12 点云/扫描](../assets/products/liyumen-x8/liyumen-x8-pointcloud-012-59f81fab.png)

### image-13：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-013-452bef40.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-013-452bef40.png`

![liyumen-x8-user-guide image-13 图片](../assets/products/liyumen-x8/liyumen-x8-image-013-452bef40.png)

### image-14：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-014-82908d03.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-014-82908d03.png`

![liyumen-x8-user-guide image-14 图片](../assets/products/liyumen-x8/liyumen-x8-image-014-82908d03.png)

### image-15：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-015-d4c6762f.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-015-d4c6762f.png`

![liyumen-x8-user-guide image-15 图片](../assets/products/liyumen-x8/liyumen-x8-image-015-d4c6762f.png)

### image-16：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-016-4edd93fe.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-016-4edd93fe.png`

![liyumen-x8-user-guide image-16 图片](../assets/products/liyumen-x8/liyumen-x8-image-016-4edd93fe.png)

### image-17：图片

- 来源：`out/liyumenx8.md`
- 文件：`docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-017-e4cfe45d.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/liyumen-x8/liyumen-x8-image-017-e4cfe45d.png`

![liyumen-x8-user-guide image-17 图片](../assets/products/liyumen-x8/liyumen-x8-image-017-e4cfe45d.png)

## 来源备注

最新主要来源：`out/p/liyumenx8.md`。补充手册来源和本地导出图片：`out/liyumenx8.md`、`out/media/media/*`。
