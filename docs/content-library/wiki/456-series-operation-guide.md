# 四/五/六系列使用与交付说明

## 基础信息

- slug：`456-series-operation-guide`
- 分类：`operation-guide`
- 来源文件：`out/p/456wiki.md`
- 关联产品：四好学生、五好学生、六好学生
- 建议未来路由：`/wiki/456-series-operation-guide`

## 摘要

这份 Wiki 面向四好、五好、六好系列的交付后使用和维护参考，覆盖硬件、电源、接线、电脑软件、QGC 已配置内容、程序代码结构、飞行指令和常见注意事项。

## 适用读者

- 已购买或正在交付四好、五好、六好系列无人机的用户。
- 需要理解硬件连接、飞控配置和机载电脑使用方式的技术人员。
- 后续编写网站 Wiki 页面或售后文档的维护者。

## 前置条件

- 已获得对应无人机平台。
- 已获得发货配套视频。
- 能访问无人机机载电脑，或能外接显示器、鼠标、键盘。
- 了解基本终端、SSH、QGC 和 ROS 操作。

## 内容结构

### 硬件说明

- 电池：4S 5300mAh，满电 16.8V，约 15V 需要充电。
- 充电器：来源提供 B6 充电器教程和 B 站讲解链接。
- 电机：TMOTOR KV2550。
- 电调：穿越机单体无刷电调 4S。
- 稳压模块：16.8V 稳出 12V，给机载电脑和 Mid360 供电。
- 飞控和分电板：Holybro Pixhawk 4 和 PM06。
- 接收机和遥控器：Radiomaster POCKET，对频细节见来源。
- 普通相机：100 度无畸变相机，选配。
- 深度相机：Intel RealSense D435。
- 雷达：Livox Mid360。
- 机载电脑：Jetson Orin NX Super 8G，来源提到 Ubuntu 20.04、ROS Noetic、JetPack 5.1.2 或更新版本。

### 供电系统

- 电池给四个电调、PM06 和稳压模块供电。
- PM06 给飞控供电，并向飞控发送当前电池电压。
- 稳压模块给机载电脑和 Mid360 提供 12V。
- 机载电脑通过 USB 给深度相机或 USB 相机供电。

### 接线说明

- 飞控电源线连接 PM06 分电板输出口。
- 飞控 TELEM 与机载电脑 U1 串口连接，用于 MAVROS 通信。
- 接收机连接飞控。
- 电调信号线连接飞控电机输出。
- Mid360 通过网口传输数据，通过 12V 供电。
- D435 使用 USB 3.0 Type-C 连接机载电脑。
- 机载电脑使用 12V 电源、U1 串口、HDMI、USB0 和千兆网口转接头。

### 电脑软件

- MobaXterm：用于 SSH 远程连接。
- QGC：用于 PX4 地面站配置。
- VS Code：用于代码编辑。
- VNC：用于需要图形界面时远程可视化登录。

### QGC 配置说明

来源说明 PX4 1.13 固件已经烧录，传感器已校准，飞控朝向已通过软件方式配置，遥控器已配置，部分 EKF 和串口参数已设置。

### 程序与指令说明

来源包含 ROS 工作空间、各模块 SDK、YOLO 代码、系统配置文件、Mid360 一键启动文件、MAVROS 依赖和飞行指令流程。原始命令适合保留在 Wiki，不适合放入产品营销页。

## 排障与注意事项

- 接线图、QGC 截图和局部硬件图以来源图片为准。
- 源文档中的密码、IP 示例和局域网示例属于内部参考，公开发布前需要改写。
- 串口波特率相关说明里来源包含更正提示，公开使用前应再次确认。
- 实体飞行和代码讲解以发货配套视频为准。

## 关联产品资料

- `products/sihao.md`
- `products/wuhao.md`
- `products/liuhao.md`

## 图片资产

图片来源清单：`docs/content-library/assets/wiki/456-series-operation-guide/_manifest.md`。以下按来源文档中的图片顺序保留，便于结合前文判断用途。

### image-1：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-001-9e708c65.png`
- 备注：已下载

![456-series-operation-guide image-1 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-001-9e708c65.png)

### image-2：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-002-74b6b8d2.png`
- 备注：已下载

![456-series-operation-guide image-2 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-002-74b6b8d2.png)

### image-3：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-003-b6a6b89e.png`
- 备注：已下载

![456-series-operation-guide image-3 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-003-b6a6b89e.png)

### image-4：遥控器/交互

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-004-b5041380.png`
- 备注：已下载

![456-series-operation-guide image-4 遥控器/交互](../assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-004-b5041380.png)

### image-5：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-005-b5bdee8f.png`
- 备注：已下载

![456-series-operation-guide image-5 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-005-b5bdee8f.png)

### image-6：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-006-e5419ad9.png`
- 备注：已下载

![456-series-operation-guide image-6 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-006-e5419ad9.png)

### image-7：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-007-d0347de8.png`
- 备注：已下载

![456-series-operation-guide image-7 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-007-d0347de8.png)

### image-8：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-008-fb175efc.png`
- 备注：已下载

![456-series-operation-guide image-8 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-008-fb175efc.png)

### image-9：安装流程

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-install-009-7ac2e744.png`
- 备注：已下载

![456-series-operation-guide image-9 安装流程](../assets/wiki/456-series-operation-guide/456-series-operation-guide-install-009-7ac2e744.png)

### image-10：安装流程

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-install-010-6d13cc7a.png`
- 备注：已下载

![456-series-operation-guide image-10 安装流程](../assets/wiki/456-series-operation-guide/456-series-operation-guide-install-010-6d13cc7a.png)

### image-11：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/products/sihao/sihao-wiring-001-e01dafa0.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sihao/sihao-wiring-001-e01dafa0.png`

![456-series-operation-guide image-11 图片](../assets/products/sihao/sihao-wiring-001-e01dafa0.png)

### image-12：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-012-635802c4.png`
- 备注：已下载

![456-series-operation-guide image-12 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-012-635802c4.png)

### image-13：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-013-efdd9853.png`
- 备注：已下载

![456-series-operation-guide image-13 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-013-efdd9853.png)

### image-14：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-014-8bb40996.jpg`
- 备注：已下载

![456-series-operation-guide image-14 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-014-8bb40996.jpg)

### image-15：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-015-eca41615.png`
- 备注：已下载

![456-series-operation-guide image-15 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-015-eca41615.png)

### image-16：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-016-a6cf93f2.png`
- 备注：已下载

![456-series-operation-guide image-16 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-016-a6cf93f2.png)

### image-17：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-017-b9038a6f.png`
- 备注：已下载

![456-series-operation-guide image-17 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-017-b9038a6f.png)

### image-18：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-018-26e9bbdb.png`
- 备注：已下载

![456-series-operation-guide image-18 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-018-26e9bbdb.png)

### image-19：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-019-bbe2bcc2.png`
- 备注：已下载

![456-series-operation-guide image-19 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-019-bbe2bcc2.png)

### image-20：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-020-acfa2d0f.png`
- 备注：已下载

![456-series-operation-guide image-20 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-020-acfa2d0f.png)

### image-21：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-021-63762e6d.png`
- 备注：已下载

![456-series-operation-guide image-21 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-021-63762e6d.png)

### image-22：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-022-5f4f79a0.png`
- 备注：已下载

![456-series-operation-guide image-22 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-022-5f4f79a0.png)

### image-23：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-023-95f6a86c.png`
- 备注：已下载

![456-series-operation-guide image-23 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-023-95f6a86c.png)

### image-24：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-024-6c95cd6f.png`
- 备注：已下载

![456-series-operation-guide image-24 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-024-6c95cd6f.png)

### image-25：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-025-39e8feba.png`
- 备注：已下载

![456-series-operation-guide image-25 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-025-39e8feba.png)

### image-26：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-026-278ada5e.png`
- 备注：已下载

![456-series-operation-guide image-26 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-026-278ada5e.png)

### image-27：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-027-5d704bca.png`
- 备注：已下载

![456-series-operation-guide image-27 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-027-5d704bca.png)

### image-28：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-028-0ed6b1db.png`
- 备注：已下载

![456-series-operation-guide image-28 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-028-0ed6b1db.png)

### image-29：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-029-9cd1dad0.png`
- 备注：已下载

![456-series-operation-guide image-29 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-029-9cd1dad0.png)

### image-30：产品图

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-product-030-982e6b3d.png`
- 备注：已下载

![456-series-operation-guide image-30 产品图](../assets/wiki/456-series-operation-guide/456-series-operation-guide-product-030-982e6b3d.png)

### image-31：遥控器/交互

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-031-423261ff.png`
- 备注：已下载

![456-series-operation-guide image-31 遥控器/交互](../assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-031-423261ff.png)

### image-32：遥控器/交互

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-032-d069dc2d.png`
- 备注：已下载

![456-series-operation-guide image-32 遥控器/交互](../assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-032-d069dc2d.png)

### image-33：产品图

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-product-033-785a47cb.png`
- 备注：已下载

![456-series-operation-guide image-33 产品图](../assets/wiki/456-series-operation-guide/456-series-operation-guide-product-033-785a47cb.png)

### image-34：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-034-e0ef75f1.png`
- 备注：已下载

![456-series-operation-guide image-34 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-034-e0ef75f1.png)

### image-35：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-035-868bdff9.png`
- 备注：已下载

![456-series-operation-guide image-35 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-035-868bdff9.png)

### image-36：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-036-a96476cf.png`
- 备注：已下载

![456-series-operation-guide image-36 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-036-a96476cf.png)

### image-37：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-037-0039cf61.png`
- 备注：已下载

![456-series-operation-guide image-37 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-037-0039cf61.png)

### image-38：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-038-ee126ee6.png`
- 备注：已下载

![456-series-operation-guide image-38 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-038-ee126ee6.png)

### image-39：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-039-0588f99b.png`
- 备注：已下载

![456-series-operation-guide image-39 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-039-0588f99b.png)

### image-40：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-040-5ab8eda1.png`
- 备注：已下载

![456-series-operation-guide image-40 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-040-5ab8eda1.png)

### image-41：安装流程

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-install-041-06e2706e.png`
- 备注：已下载

![456-series-operation-guide image-41 安装流程](../assets/wiki/456-series-operation-guide/456-series-operation-guide-install-041-06e2706e.png)

### image-42：安装流程

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-install-042-2338b744.png`
- 备注：已下载

![456-series-operation-guide image-42 安装流程](../assets/wiki/456-series-operation-guide/456-series-operation-guide-install-042-2338b744.png)

### image-43：点云/扫描

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-pointcloud-043-39a7a1fa.png`
- 备注：已下载

![456-series-operation-guide image-43 点云/扫描](../assets/wiki/456-series-operation-guide/456-series-operation-guide-pointcloud-043-39a7a1fa.png)

### image-44：接线/配置

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-044-1316c74d.png`
- 备注：已下载

![456-series-operation-guide image-44 接线/配置](../assets/wiki/456-series-operation-guide/456-series-operation-guide-wiring-044-1316c74d.png)

### image-45：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-045-ff3f6a64.png`
- 备注：已下载

![456-series-operation-guide image-45 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-045-ff3f6a64.png)

### image-46：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-046-01d50b81.png`
- 备注：已下载

![456-series-operation-guide image-46 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-046-01d50b81.png)

### image-47：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-047-83963ade.png`
- 备注：已下载

![456-series-operation-guide image-47 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-047-83963ade.png)

### image-48：遥控器/交互

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-048-42fdacfe.png`
- 备注：已下载

![456-series-operation-guide image-48 遥控器/交互](../assets/wiki/456-series-operation-guide/456-series-operation-guide-remote-control-048-42fdacfe.png)

### image-49：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-049-248dc6aa.png`
- 备注：已下载

![456-series-operation-guide image-49 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-049-248dc6aa.png)

### image-50：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-050-5999c304.png`
- 备注：已下载

![456-series-operation-guide image-50 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-050-5999c304.png)

### image-51：图片

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-image-051-13a87e4a.png`
- 备注：已下载

![456-series-operation-guide image-51 图片](../assets/wiki/456-series-operation-guide/456-series-operation-guide-image-051-13a87e4a.png)

### image-52：硬件

- 来源：`out/p/456wiki.md`
- 文件：`docs/content-library/assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-052-ce67378d.png`
- 备注：已下载

![456-series-operation-guide image-52 硬件](../assets/wiki/456-series-operation-guide/456-series-operation-guide-hardware-052-ce67378d.png)

## 来源备注

主要来源：`out/p/456wiki.md`。这份资料属于 Wiki/售后/使用说明，不作为产品页主体文案。
