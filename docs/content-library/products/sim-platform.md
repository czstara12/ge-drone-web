# 狗弟仿真平台

## 基础信息

- slug：`sim-platform`
- 来源文件：`out/p/gd-sim-wsl.md`、`out/p/gd-sim-matlab.md`
- 关联 Wiki：`wiki/sim-wsl-install-guide.md`、`wiki/sim-matlab-vm-guide.md`
- 当前网站位置：`/products/sim-platform`，产品卡片数据在 `src/data/products.ts`

## 快速摘要

狗弟仿真平台包含 WSL 版 XTDrone 平台和 VMware + MATLAB 相关虚拟机资料。WSL 版面向 Windows 11 + NVIDIA 显卡用户，强调导入即用、GPU 适配、预装 XTDrone 相关环境和配套教程；VMware 版强调直接打开已配置虚拟机并跟随 B 站课程学习。

## 产品定位

面向论文实验、项目验收、仿真竞赛、算法验证和教学学习。核心价值是减少环境配置时间，把用户带到可运行的平台状态。

## 核心卖点

- WSL 版在 Windows 中运行 Linux 子系统，避免双系统和传统虚拟机卡顿。
- 预装 XTDrone 相关环境，导入后直接使用。
- 支持 NVIDIA GPU 适配。
- 基础版已开源，豪华版提供额外资料和激活码数量。
- VMware + MATLAB 版提供完整虚拟机复制体，代码、地面站、MATLAB 代码可直接使用。
- 文档提供安装、激活、恢复、常见错误处理和补充说明。

## 关键参数

| 参数 | 数值 | 备注 |
| --- | --- | --- |
| WSL 系统要求 | Windows 11 | 来源说明 Windows 10 无法使用 GPU。 |
| 显卡要求 | NVIDIA 显卡 | 来源说明过旧显卡可能不适配。 |
| 存储空间 | 安装需要 35-70GB，后期约 35GB | 保留来源参数。 |
| WSL 发行版 | Ubuntu 18.04 | 来自导入示例和平台说明。 |
| PX4 版本 | 1.13 | 来源说明。 |
| 激活方式 | 与电脑硬件绑定的激活码 | 原始激活流程不适合直接公开。 |
| VMware 账号密码 | bingo | 敏感操作信息，仅作内部/Wiki 参考。 |
| WSL 平台密码 | 1234 | 敏感操作信息，仅作内部/Wiki 参考。 |

## 功能能力

- WSL 导入流程。
- VS Code 与终端工作流。
- 激活流程。
- XTDrone 学习平台。
- VMware 虚拟机流程。
- MATLAB 与路径规划补充。
- WSL 和功能包常见问题排障。

## 适用场景

- 算法验证。
- 无人机仿真竞赛。
- 论文实验。
- 教学实验。
- PX4、Gazebo、ROS、XTDrone 学习。

## 价格与套装信息

来源包含 B 站小店链接，并说明基础版和豪华版。来源称平台需要激活，基础版和豪华版平台内容一致，豪华版额外提供整理资料和更多激活码。

网站可用性：公开页面只建议表达产品差异和使用价值；原始激活流程、QQ 联系、密码、购买说明应放入 Wiki 或内部参考。

## 网页修改参考

- 产品页重点表达“开箱即用的仿真平台”和“算法验证环境”。
- 安装和排障细节放入 Wiki。
- 不在公开营销页展示原始密码。

## 图片资产

图片来源清单：`docs/content-library/assets/products/sim-platform/_manifest.md`。以下按来源文档中的图片顺序保留，便于结合前文判断用途。

### image-1：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-001-803a837a.png`
- 备注：已下载

![sim-platform image-1 图片](../assets/products/sim-platform/sim-platform-image-001-803a837a.png)

### image-2：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-002-ee762ac9.png`
- 备注：已下载

![sim-platform image-2 安装流程](../assets/products/sim-platform/sim-platform-install-002-ee762ac9.png)

### image-3：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-003-4a0582f8.png`
- 备注：已下载

![sim-platform image-3 安装流程](../assets/products/sim-platform/sim-platform-install-003-4a0582f8.png)

### image-4：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-004-9083fbfe.png`
- 备注：已下载

![sim-platform image-4 图片](../assets/products/sim-platform/sim-platform-image-004-9083fbfe.png)

### image-5：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-005-9355bc3a.png`
- 备注：已下载

![sim-platform image-5 图片](../assets/products/sim-platform/sim-platform-image-005-9355bc3a.png)

### image-6：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-006-4af55394.png`
- 备注：已下载

![sim-platform image-6 图片](../assets/products/sim-platform/sim-platform-image-006-4af55394.png)

### image-7：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-007-489d03e4.png`
- 备注：已下载

![sim-platform image-7 安装流程](../assets/products/sim-platform/sim-platform-install-007-489d03e4.png)

### image-8：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-008-a7e04edd.png`
- 备注：已下载

![sim-platform image-8 安装流程](../assets/products/sim-platform/sim-platform-install-008-a7e04edd.png)

### image-9：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-009-fd8cab70.png`
- 备注：已下载

![sim-platform image-9 安装流程](../assets/products/sim-platform/sim-platform-install-009-fd8cab70.png)

### image-10：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-010-e2aeb196.png`
- 备注：已下载

![sim-platform image-10 安装流程](../assets/products/sim-platform/sim-platform-install-010-e2aeb196.png)

### image-11：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-011-5ba419c3.png`
- 备注：已下载

![sim-platform image-11 安装流程](../assets/products/sim-platform/sim-platform-install-011-5ba419c3.png)

### image-12：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-012-abb48367.png`
- 备注：已下载

![sim-platform image-12 安装流程](../assets/products/sim-platform/sim-platform-install-012-abb48367.png)

### image-13：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-013-ad4bd760.png`
- 备注：已下载

![sim-platform image-13 安装流程](../assets/products/sim-platform/sim-platform-install-013-ad4bd760.png)

### image-14：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-014-435250fd.png`
- 备注：已下载

![sim-platform image-14 安装流程](../assets/products/sim-platform/sim-platform-install-014-435250fd.png)

### image-15：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-015-aca8f555.png`
- 备注：已下载

![sim-platform image-15 安装流程](../assets/products/sim-platform/sim-platform-install-015-aca8f555.png)

### image-16：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-016-c026338e.png`
- 备注：已下载

![sim-platform image-16 安装流程](../assets/products/sim-platform/sim-platform-install-016-c026338e.png)

### image-17：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-017-eb6961e9.png`
- 备注：已下载

![sim-platform image-17 安装流程](../assets/products/sim-platform/sim-platform-install-017-eb6961e9.png)

### image-18：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-018-7ebb198a.png`
- 备注：已下载

![sim-platform image-18 安装流程](../assets/products/sim-platform/sim-platform-install-018-7ebb198a.png)

### image-19：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-019-2eb34085.png`
- 备注：已下载

![sim-platform image-19 安装流程](../assets/products/sim-platform/sim-platform-install-019-2eb34085.png)

### image-20：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-020-59caff00.png`
- 备注：已下载

![sim-platform image-20 安装流程](../assets/products/sim-platform/sim-platform-install-020-59caff00.png)

### image-21：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-021-a4c93344.png`
- 备注：已下载

![sim-platform image-21 安装流程](../assets/products/sim-platform/sim-platform-install-021-a4c93344.png)

### image-22：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-022-6b92ba85.png`
- 备注：已下载

![sim-platform image-22 安装流程](../assets/products/sim-platform/sim-platform-install-022-6b92ba85.png)

### image-23：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-023-3a8bdd36.png`
- 备注：已下载

![sim-platform image-23 安装流程](../assets/products/sim-platform/sim-platform-install-023-3a8bdd36.png)

### image-24：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-024-21e2ce3d.png`
- 备注：已下载

![sim-platform image-24 图片](../assets/products/sim-platform/sim-platform-image-024-21e2ce3d.png)

### image-25：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-025-af443cc4.png`
- 备注：已下载

![sim-platform image-25 图片](../assets/products/sim-platform/sim-platform-image-025-af443cc4.png)

### image-26：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-026-92b6c75c.png`
- 备注：已下载

![sim-platform image-26 图片](../assets/products/sim-platform/sim-platform-image-026-92b6c75c.png)

### image-27：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-027-157fbb14.png`
- 备注：已下载

![sim-platform image-27 图片](../assets/products/sim-platform/sim-platform-image-027-157fbb14.png)

### image-28：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-028-c25e6cb2.png`
- 备注：已下载

![sim-platform image-28 图片](../assets/products/sim-platform/sim-platform-image-028-c25e6cb2.png)

### image-29：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-029-9178c433.png`
- 备注：已下载

![sim-platform image-29 图片](../assets/products/sim-platform/sim-platform-image-029-9178c433.png)

### image-30：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-030-45a66d33.png`
- 备注：已下载

![sim-platform image-30 安装流程](../assets/products/sim-platform/sim-platform-install-030-45a66d33.png)

### image-31：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-031-d0936150.png`
- 备注：已下载

![sim-platform image-31 图片](../assets/products/sim-platform/sim-platform-image-031-d0936150.png)

### image-32：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-032-9902e0e1.png`
- 备注：已下载

![sim-platform image-32 图片](../assets/products/sim-platform/sim-platform-image-032-9902e0e1.png)

### image-33：图片

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-image-033-12d7caee.png`
- 备注：已下载

![sim-platform image-33 图片](../assets/products/sim-platform/sim-platform-image-033-12d7caee.png)

### image-34：产品图

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-product-034-04a1f2c6.png`
- 备注：已下载

![sim-platform image-34 产品图](../assets/products/sim-platform/sim-platform-product-034-04a1f2c6.png)

### image-35：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-035-7c1f73a1.png`
- 备注：已下载

![sim-platform image-35 安装流程](../assets/products/sim-platform/sim-platform-install-035-7c1f73a1.png)

### image-36：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-036-2c35e4a3.jpg`
- 备注：已下载

![sim-platform image-36 安装流程](../assets/products/sim-platform/sim-platform-install-036-2c35e4a3.jpg)

### image-37：安装流程

- 来源：`out/p/gd-sim-wsl.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-037-7c7e887a.png`
- 备注：已下载

![sim-platform image-37 安装流程](../assets/products/sim-platform/sim-platform-install-037-7c7e887a.png)

### image-1：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-001-40d11226.png`
- 备注：已下载

![sim-platform image-1 安装流程](../assets/products/sim-platform/sim-platform-install-001-40d11226.png)

### image-2：产品图

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-product-002-a9d3e1e1.png`
- 备注：已下载

![sim-platform image-2 产品图](../assets/products/sim-platform/sim-platform-product-002-a9d3e1e1.png)

### image-3：接线/配置

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-wiring-003-2cb3ba81.png`
- 备注：已下载

![sim-platform image-3 接线/配置](../assets/products/sim-platform/sim-platform-wiring-003-2cb3ba81.png)

### image-4：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-004-ac75337c.png`
- 备注：已下载

![sim-platform image-4 安装流程](../assets/products/sim-platform/sim-platform-install-004-ac75337c.png)

### image-5：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-005-c539d2a9.png`
- 备注：已下载

![sim-platform image-5 安装流程](../assets/products/sim-platform/sim-platform-install-005-c539d2a9.png)

## 来源备注

主要来源：`out/p/gd-sim-wsl.md`、`out/p/gd-sim-matlab.md`。
