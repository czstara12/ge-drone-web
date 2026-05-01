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

图片采集后查看 `docs/content-library/assets/wiki/sim-wsl-install-guide/_manifest.md`。

## 来源备注

主要来源：`out/p/gd-sim-wsl.md`。原始激活细节、密码和 QQ 联系文案默认不公开。
