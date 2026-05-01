# MATLAB 与 VMware 仿真平台说明

## 基础信息

- slug：`sim-matlab-vm-guide`
- 分类：`simulation-install-guide`
- 来源文件：`out/p/gd-sim-matlab.md`
- 关联产品：狗弟仿真平台
- 建议未来路由：`/wiki/sim-matlab-vm-guide`

## 摘要

这份 Wiki 整理 VMware 虚拟机版仿真平台和 MATLAB 相关补充说明，包括虚拟机打开流程、账号密码、课程学习入口、代码替换、导航功能、MATLAB license 注意事项、存储扩容和恢复出厂设置。

## 适用读者

- 使用 VMware 版仿真平台的用户。
- 需要 MATLAB 与 PX4、ROS、Gazebo 相关实验环境的用户。
- 后续维护仿真平台 Wiki 的内容编辑者。

## 前置条件

- Windows 电脑。
- VMware Workstation。
- 已下载并完整解压的虚拟机压缩包。
- 能访问 B 站课程视频。
- MATLAB 特定功能需要用户自己的 license。

## 内容结构

### 打开虚拟机

来源流程包括：

1. 从百度网盘下载压缩包。
2. 在 Windows 中完整解压 `.rar` 压缩包。
3. 打开 VMware。
4. 通过“文件 > 打开”选择虚拟机。
5. 选择 `ubuntu+matlab.vmx`。
6. 打开后选择“我已复制了此虚拟机”。
7. 按补充说明替换 `offboard_control.h` 并重新编译。

### 账号与密码

来源说明虚拟机账号密码为 `bingo`。这是内部/Wiki 操作信息，不应出现在公开营销页。

### 学习路径

来源说明前 4 节课属于较早的入门内容，此虚拟机应从 B 站课程第 7 节开始跟随学习。

### 新代码源坐标修复

将 `offboard_control.h` 替换到 `Home-project-volans-src-modules-px4_control-include` 路径下，然后执行：

```text
cd ~/project/volans
catkin build px4_control
```

### 自主导航功能

来源命令包括：

```text
roslaunch simulation ros_2Dnav_demo_px4.launch
rosrun rqt_reconfigure rqt_reconfigure
roslaunch simulation ros_Auto2Dnav_demo_px4.launch
```

### MATLAB license

来源说明 MATLAB add-ons 和 PX4 工具包相关操作需要用户自己的 license 或账号。

## 排障与补充说明

来源补充说明覆盖：

- OMPL 3D RRT 路径规划课程说明。
- 扩展虚拟机存储空间。
- 恢复出厂设置快照。
- `Could not get lock /var/lib/dpkg/lock-frontend`。
- EKF 中视觉定位与 GPS 定位的区别。

## 关联产品资料

- `products/sim-platform.md`

## 图片资产

图片来源清单：`docs/content-library/assets/wiki/sim-matlab-vm-guide/_manifest.md`。以下按来源文档中的图片顺序保留，便于结合前文判断用途。

### image-1：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-001-40d11226.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-001-40d11226.png`

![sim-matlab-vm-guide image-1 安装流程](../assets/products/sim-platform/sim-platform-install-001-40d11226.png)

### image-2：产品图

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-product-002-a9d3e1e1.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-product-002-a9d3e1e1.png`

![sim-matlab-vm-guide image-2 产品图](../assets/products/sim-platform/sim-platform-product-002-a9d3e1e1.png)

### image-3：接线/配置

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-wiring-003-2cb3ba81.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-wiring-003-2cb3ba81.png`

![sim-matlab-vm-guide image-3 接线/配置](../assets/products/sim-platform/sim-platform-wiring-003-2cb3ba81.png)

### image-4：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-004-ac75337c.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-004-ac75337c.png`

![sim-matlab-vm-guide image-4 安装流程](../assets/products/sim-platform/sim-platform-install-004-ac75337c.png)

### image-5：安装流程

- 来源：`out/p/gd-sim-matlab.md`
- 文件：`docs/content-library/assets/products/sim-platform/sim-platform-install-005-c539d2a9.png`
- 备注：重复图片；canonical 文件为 `docs/content-library/assets/products/sim-platform/sim-platform-install-005-c539d2a9.png`

![sim-matlab-vm-guide image-5 安装流程](../assets/products/sim-platform/sim-platform-install-005-c539d2a9.png)

## 来源备注

主要来源：`out/p/gd-sim-matlab.md`。密码、百度网盘链接和购买信息在公开发布前需要确认策略。
