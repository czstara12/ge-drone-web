# WSL 仿真平台安装与使用说明

## 基础信息

- slug：`sim-wsl-install-guide`
- 分类：`simulation-install-guide`
- 来源文件：`out/p/gd-sim-wsl.md`
- 关联产品：狗弟仿真平台
- 建议未来路由：`/wiki/sim-wsl-install-guide`

## 摘要

这份 Wiki 整理 WSL 版 XTDrone 仿真平台的购买注意事项、安装 WSL、导入平台、准备终端和 VS Code、激活平台以及常见问题。

## 适用读者

- 购买或试用 WSL 仿真平台的用户。
- 需要在 Windows 11 上运行 XTDrone 相关环境的学生、研究者和竞赛用户。
- 后续维护网站 Wiki 的内容编辑者。

## 前置条件

- Windows 11。
- NVIDIA 显卡。
- 35-70GB 可用空间。
- 管理员权限 PowerShell 或 Windows 命令提示符。
- 已下载 `.tar` 平台文件。
- 付费激活流程需要激活码。

## 内容结构

### 购买注意事项

来源说明平台需要激活，激活码与电脑硬件绑定。基础版和豪华版使用的平台一致，豪华版额外提供资料和更多激活码。

### 安装 WSL

来源流程包括：

1. 开启开发人员模式。
2. 开启适用于 Linux 的 Windows 子系统。
3. 如系统有 Hyper-V，则开启 Hyper-V。
4. 以管理员身份运行 `wsl --install`。
5. 必要时安装微软 WSL 内核更新包。
6. 按微软文档启用 VirtualMachinePlatform。
7. 使用 `wsl --set-default-version 2` 将 WSL 2 设置为默认版本。
8. 使用 `wsl --update --web-download` 更新 WSL。

### 导入 XTDrone 平台

使用 `wsl --import` 指定发行版名称、安装位置和 `.tar` 文件路径。来源示例：

```text
wsl --import Ubuntu-18.04 c:\wsl2 d:\save\linux\xtdrone-GDstudio-x.x.tar
```

路径中不要包含中文。

### 准备工具

- 使用 PowerShell 或终端进入 WSL。
- 在平台内使用 `terminator`。
- 使用 VS Code 编辑平台文件。

### 激活平台

来源包含激活流程和 QQ 联系方式。该部分先作为内部参考，公开页面需要按正式联系策略重写。

## 排障与附录

来源附录覆盖：

- EKF 问题。
- WSL 双平台问题。
- 功能包问题。
- Iris 无人机模型目录中看不到 SDF 文件。
- `wsl --install` 代理与安装失败问题。
- `WslRegisterDistribution failed with error: 0x80071772`。
- 重装平台。
- Windows 11 24H2 后资源管理器不显示 WSL2 目录。
- 打开 QGC。

## 关联产品资料

- `products/sim-platform.md`

## 图片资产

图片来源清单：`docs/content-library/assets/wiki/sim-wsl-install-guide/_manifest.md`。以下按来源文档中的图片顺序保留，便于结合前文判断用途。

### image-1：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-001-803a837a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-001-803a837a.png`

![sim-wsl-install-guide image-1 图片](../assets/products/sim-platform/sim-platform-image-001-803a837a.png)

### image-2：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-002-ee762ac9.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-002-ee762ac9.png`

![sim-wsl-install-guide image-2 安装流程](../assets/products/sim-platform/sim-platform-install-002-ee762ac9.png)

### image-3：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-003-4a0582f8.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-003-4a0582f8.png`

![sim-wsl-install-guide image-3 安装流程](../assets/products/sim-platform/sim-platform-install-003-4a0582f8.png)

### image-4：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-004-9083fbfe.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-004-9083fbfe.png`

![sim-wsl-install-guide image-4 图片](../assets/products/sim-platform/sim-platform-image-004-9083fbfe.png)

### image-5：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-005-9355bc3a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-005-9355bc3a.png`

![sim-wsl-install-guide image-5 图片](../assets/products/sim-platform/sim-platform-image-005-9355bc3a.png)

### image-6：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-006-4af55394.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-006-4af55394.png`

![sim-wsl-install-guide image-6 图片](../assets/products/sim-platform/sim-platform-image-006-4af55394.png)

### image-7：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-007-489d03e4.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-007-489d03e4.png`

![sim-wsl-install-guide image-7 安装流程](../assets/products/sim-platform/sim-platform-install-007-489d03e4.png)

### image-8：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-008-a7e04edd.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-008-a7e04edd.png`

![sim-wsl-install-guide image-8 安装流程](../assets/products/sim-platform/sim-platform-install-008-a7e04edd.png)

### image-9：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-009-fd8cab70.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-009-fd8cab70.png`

![sim-wsl-install-guide image-9 安装流程](../assets/products/sim-platform/sim-platform-install-009-fd8cab70.png)

### image-10：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-010-e2aeb196.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-010-e2aeb196.png`

![sim-wsl-install-guide image-10 安装流程](../assets/products/sim-platform/sim-platform-install-010-e2aeb196.png)

### image-11：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-011-5ba419c3.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-011-5ba419c3.png`

![sim-wsl-install-guide image-11 安装流程](../assets/products/sim-platform/sim-platform-install-011-5ba419c3.png)

### image-12：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-012-abb48367.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-012-abb48367.png`

![sim-wsl-install-guide image-12 安装流程](../assets/products/sim-platform/sim-platform-install-012-abb48367.png)

### image-13：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-013-ad4bd760.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-013-ad4bd760.png`

![sim-wsl-install-guide image-13 安装流程](../assets/products/sim-platform/sim-platform-install-013-ad4bd760.png)

### image-14：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-014-435250fd.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-014-435250fd.png`

![sim-wsl-install-guide image-14 安装流程](../assets/products/sim-platform/sim-platform-install-014-435250fd.png)

### image-15：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-015-aca8f555.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-015-aca8f555.png`

![sim-wsl-install-guide image-15 安装流程](../assets/products/sim-platform/sim-platform-install-015-aca8f555.png)

### image-16：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-016-c026338e.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-016-c026338e.png`

![sim-wsl-install-guide image-16 安装流程](../assets/products/sim-platform/sim-platform-install-016-c026338e.png)

### image-17：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-017-eb6961e9.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-017-eb6961e9.png`

![sim-wsl-install-guide image-17 安装流程](../assets/products/sim-platform/sim-platform-install-017-eb6961e9.png)

### image-18：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-018-7ebb198a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-018-7ebb198a.png`

![sim-wsl-install-guide image-18 安装流程](../assets/products/sim-platform/sim-platform-install-018-7ebb198a.png)

### image-19：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-019-2eb34085.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-019-2eb34085.png`

![sim-wsl-install-guide image-19 安装流程](../assets/products/sim-platform/sim-platform-install-019-2eb34085.png)

### image-20：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-020-59caff00.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-020-59caff00.png`

![sim-wsl-install-guide image-20 安装流程](../assets/products/sim-platform/sim-platform-install-020-59caff00.png)

### image-21：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-021-a4c93344.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-021-a4c93344.png`

![sim-wsl-install-guide image-21 安装流程](../assets/products/sim-platform/sim-platform-install-021-a4c93344.png)

### image-22：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-022-6b92ba85.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-022-6b92ba85.png`

![sim-wsl-install-guide image-22 安装流程](../assets/products/sim-platform/sim-platform-install-022-6b92ba85.png)

### image-23：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-023-3a8bdd36.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-023-3a8bdd36.png`

![sim-wsl-install-guide image-23 安装流程](../assets/products/sim-platform/sim-platform-install-023-3a8bdd36.png)

### image-24：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-024-21e2ce3d.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-024-21e2ce3d.png`

![sim-wsl-install-guide image-24 图片](../assets/products/sim-platform/sim-platform-image-024-21e2ce3d.png)

### image-25：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-025-af443cc4.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-025-af443cc4.png`

![sim-wsl-install-guide image-25 图片](../assets/products/sim-platform/sim-platform-image-025-af443cc4.png)

### image-26：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-026-92b6c75c.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-026-92b6c75c.png`

![sim-wsl-install-guide image-26 图片](../assets/products/sim-platform/sim-platform-image-026-92b6c75c.png)

### image-27：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-027-157fbb14.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-027-157fbb14.png`

![sim-wsl-install-guide image-27 图片](../assets/products/sim-platform/sim-platform-image-027-157fbb14.png)

### image-28：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-028-c25e6cb2.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-028-c25e6cb2.png`

![sim-wsl-install-guide image-28 图片](../assets/products/sim-platform/sim-platform-image-028-c25e6cb2.png)

### image-29：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-029-9178c433.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-029-9178c433.png`

![sim-wsl-install-guide image-29 图片](../assets/products/sim-platform/sim-platform-image-029-9178c433.png)

### image-30：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-030-45a66d33.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-030-45a66d33.png`

![sim-wsl-install-guide image-30 安装流程](../assets/products/sim-platform/sim-platform-install-030-45a66d33.png)

### image-31：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-031-d0936150.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-031-d0936150.png`

![sim-wsl-install-guide image-31 图片](../assets/products/sim-platform/sim-platform-image-031-d0936150.png)

### image-32：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-032-9902e0e1.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-032-9902e0e1.png`

![sim-wsl-install-guide image-32 图片](../assets/products/sim-platform/sim-platform-image-032-9902e0e1.png)

### image-33：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-033-12d7caee.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-image-033-12d7caee.png`

![sim-wsl-install-guide image-33 图片](../assets/products/sim-platform/sim-platform-image-033-12d7caee.png)

### image-34：产品图

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-product-034-04a1f2c6.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-product-034-04a1f2c6.png`

![sim-wsl-install-guide image-34 产品图](../assets/products/sim-platform/sim-platform-product-034-04a1f2c6.png)

### image-35：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-035-7c1f73a1.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-035-7c1f73a1.png`

![sim-wsl-install-guide image-35 安装流程](../assets/products/sim-platform/sim-platform-install-035-7c1f73a1.png)

### image-36：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-036-2c35e4a3.jpg`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-036-2c35e4a3.jpg`

![sim-wsl-install-guide image-36 安装流程](../assets/products/sim-platform/sim-platform-install-036-2c35e4a3.jpg)

### image-37：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-037-7c7e887a.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-037-7c7e887a.png`

![sim-wsl-install-guide image-37 安装流程](../assets/products/sim-platform/sim-platform-install-037-7c7e887a.png)

## 来源备注

主要来源：`out/p/gd-sim-wsl.md`。原始激活细节、密码和 QQ 联系文案默认不公开。
