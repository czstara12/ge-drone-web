# 狗弟爱学无人机官网

**狗弟工作室**旗下教育科研无人机品牌官方网站。

基于 Next.js 14 + Tailwind CSS + TypeScript 构建。

[English](README.md)

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS 3
- **语言**: TypeScript
- **部署**: Vercel / Netlify

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（http://localhost:3000）
npm run dev

# 生产构建
npm run build

# 启动生产服务
npm run start
```

## 项目结构

```
src/
├── components/         # 可复用组件
│   ├── Layout.tsx      # 主布局（导航栏 + 页脚）
│   ├── Button.tsx      # 按钮组件
│   ├── Meta.tsx        # SEO meta 标签
│   ├── ProductCard.tsx # 产品卡片
│   └── Section.tsx     # 页面区块容器
├── data/               # 数据
│   └── products.ts     # 产品定义
├── pages/              # 页面
│   ├── index.tsx       # 首页
│   ├── about.tsx       # 关于我们
│   ├── contact.tsx     # 联系我们
│   └── products/       # 产品页
│       ├── index.tsx   # 产品列表
│       └── [slug].tsx  # 产品详情
├── styles/             # 全局样式
│   └── global.css      # Tailwind + 自定义样式
└── utils/              # 工具 & 配置
    └── AppConfig.ts    # 站点配置
```

## 页面

| 路径                     | 说明                      |
| ------------------------ | ------------------------- |
| `/`                      | 首页                      |
| `/products`              | 产品列表                  |
| `/products/liyumen-x8`   | 鲤鱼门-X8 勘测无人机      |
| `/products/sanhao`       | 三好学生 室内导航教学平台 |
| `/products/wuhao`        | 五好学生 竞赛科研平台     |
| `/products/sim-platform` | 狗弟仿真平台              |
| `/about`                 | 关于我们                  |
| `/contact`               | 联系我们                  |

## 产品

目前收录 4 款真实产品：

| 产品         | 类别     | 特点                                              |
| ------------ | -------- | ------------------------------------------------- |
| 鲤鱼门-X8    | 专业勘测 | Odin1 传感器模组、RTK 定位、21 分钟续航           |
| 三好学生     | 教学竞赛 | 2D Lidar SLAM、YOLO 识别、Ubuntu + ROS            |
| 五好学生     | 竞赛科研 | 3 种导航方案、13 代 i5 处理器、Intel 传感器全家桶 |
| 狗弟仿真平台 | 仿真软件 | XTDrone + PX4 + Gazebo + ROS，基于 WSL2           |

## 配置

站点配置位于 `src/utils/AppConfig.ts`：

```typescript
export const AppConfig = {
  site_name: "狗弟爱学无人机",
  title: "狗弟爱学无人机 - 狗弟工作室 | 教育科研无人机专家",
  description: "...",
  locale: "zh-CN",
  keywords: "...",
  siteUrl: "https://godi-drone.com", // 用于 SEO canonical URL
};
```

## 自定义

- **网站图标**: 替换 `public/` 下的 favicon 文件
- **全局样式**: 编辑 `src/styles/global.css`
- **产品数据**: 编辑 `src/data/products.ts`
- **布局**: 编辑 `src/components/Layout.tsx` 修改导航栏/页脚
- **页面内容**: 编辑 `src/pages/` 下的页面文件

## 常用命令

| 命令                  | 说明           |
| --------------------- | -------------- |
| `npm run dev`         | 启动开发服务器 |
| `npm run build`       | 生产构建       |
| `npm run start`       | 启动生产服务   |
| `npm run lint`        | 代码检查       |
| `npm run format`      | 代码格式化     |
| `npm run check-types` | 类型检查       |

## 部署

### Vercel（推荐）

项目已配置 `vercel.json`，直接连接 Git 仓库即可自动部署。

### Netlify

项目已配置 `netlify.toml`，支持一键部署。

### 手动部署

```bash
npm run build-prod
```

构建产物在 `out/` 目录，可部署到任意静态托管服务。

## 许可证

MIT License
