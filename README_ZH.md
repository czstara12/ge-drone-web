# ZFly 无人机官网

基于 Next.js 14 + Tailwind CSS + TypeScript 构建的企业展示网站。

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
.
├── public/                 # 静态资源
│   └── assets/images/      # 图片
├── src/
│   ├── background/         # 背景组件
│   ├── button/             # 按钮组件
│   ├── cta/                # CTA 组件
│   ├── data/               # 数据（产品信息等）
│   ├── feature/            # 特性展示组件
│   ├── footer/             # 页脚组件
│   ├── hero/               # Hero 组件
│   ├── layout/             # 布局组件（Meta 等）
│   ├── navigation/         # 导航栏组件
│   ├── pages/              # 页面
│   │   ├── index.tsx       # 首页
│   │   ├── about.tsx       # 关于我们
│   │   ├── contact.tsx     # 联系我们
│   │   └── products/       # 产品页
│   ├── templates/          # 页面模板
│   ├── styles/             # 全局样式
│   └── utils/              # 工具函数 & 配置
├── tailwind.config.js      # Tailwind 配置
├── next.config.js          # Next.js 配置
└── tsconfig.json           # TypeScript 配置
```

## 页面

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/products` | 产品列表 |
| `/products/[slug]` | 产品详情 |
| `/about` | 关于我们 |
| `/contact` | 联系我们 |

## 配置

站点配置位于 `src/utils/AppConfig.ts`：

```typescript
export const AppConfig = {
  site_name: 'ZFly Drones',
  title: 'ZFly - 专业的工业级无人机制造商',
  description: 'ZFly 专注于研发和制造高性能工业级、消费级和专业航拍无人机...',
  locale: 'zh-CN',
};
```

## 自定义

- **网站图标**: 替换 `public/` 下的 favicon 文件
- **全局样式**: 编辑 `src/styles/global.css`
- **产品数据**: 编辑 `src/data/products.ts`
- **页面内容**: 编辑 `src/templates/` 下的组件

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run start` | 启动生产服务 |
| `npm run lint` | 代码检查 |
| `npm run format` | 代码格式化 |
| `npm run check-types` | 类型检查 |

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
