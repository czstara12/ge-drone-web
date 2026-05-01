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

图片采集后查看 `docs/content-library/assets/products/sim-platform/_manifest.md`。

## 来源备注

主要来源：`out/p/gd-sim-wsl.md`、`out/p/gd-sim-matlab.md`。
