# ZFly Website 项目学习指南

> 写给有基础编程知识、但没接触过 Next.js/React/TypeScript 的开发者

## 目录

1. [技术栈概述](#1-技术栈概述)
2. [项目结构详解](#2-项目结构详解)
3. [核心概念](#3-核心概念)
4. [文件逐个解读](#4-文件逐个解读)
5. [常见模式](#5-常见模式)
6. [如何修改](#6-如何修改)
7. [调试技巧](#7-调试技巧)
8. [学习资源](#8-学习资源)

---

## 1. 技术栈概述

### 1.1 TypeScript（语言）

TypeScript = JavaScript + 类型系统。

```typescript
// JavaScript（动态类型，运行时才报错）
let name = "hello";
name = 123; // 不报错，但可能导致 bug

// TypeScript（静态类型，写代码时就报错）
let name: string = "hello";
name = 123; // ❌ 编辑器立刻报错：不能把 number 赋给 string
```

**为什么用它**：写代码时就能发现错误，不用等到运行才崩溃。

### 1.2 React（UI 库）

React 用"组件"构建界面。组件就是返回 HTML 的函数。

```tsx
// 一个简单的组件
function Welcome() {
  return <h1>你好，世界</h1>;
}

// 带参数的组件（props）
function Welcome({ name }: { name: string }) {
  return <h1>你好，{name}</h1>;
}

// 使用组件
<Welcome name="张三" />; // 渲染出：<h1>你好，张三</h1>
```

**核心思想**：把页面拆成小组件，组件可以复用、嵌套。

### 1.3 Next.js（框架）

Next.js 是基于 React 的框架，提供：

- **文件路由**：`pages/about.tsx` 自动变成 `/about` 页面
- **静态生成**：构建时生成 HTML，访问速度快
- **SEO 友好**：服务端渲染，搜索引擎能抓取内容

### 1.4 Tailwind CSS（样式）

传统 CSS：写一堆类名，然后在 CSS 文件定义样式。

Tailwind：直接在 HTML 里用预定义的工具类。

```html
<!-- 传统方式 -->
<div class="card">...</div>
<style>
  .card {
    padding: 16px;
    background: white;
    border-radius: 8px;
  }
</style>

<!-- Tailwind 方式 -->
<div class="p-4 bg-white rounded-lg">...</div>
```

**常用类名速查**：

| 类名              | 作用       | CSS 等价                   |
| ----------------- | ---------- | -------------------------- |
| `p-4`             | 内边距     | `padding: 1rem`            |
| `m-4`             | 外边距     | `margin: 1rem`             |
| `px-4`            | 左右内边距 | `padding-left/right: 1rem` |
| `py-4`            | 上下内边距 | `padding-top/bottom: 1rem` |
| `mt-4`            | 上外边距   | `margin-top: 1rem`         |
| `text-xl`         | 字体大小   | `font-size: 1.25rem`       |
| `font-bold`       | 粗体       | `font-weight: 700`         |
| `text-gray-500`   | 文字颜色   | `color: #6b7280`           |
| `bg-white`        | 背景色     | `background: white`        |
| `rounded-lg`      | 圆角       | `border-radius: 0.5rem`    |
| `shadow-md`       | 阴影       | `box-shadow: ...`          |
| `flex`            | 弹性布局   | `display: flex`            |
| `grid`            | 网格布局   | `display: grid`            |
| `hidden`          | 隐藏       | `display: none`            |
| `w-full`          | 宽度 100%  | `width: 100%`              |
| `max-w-screen-lg` | 最大宽度   | `max-width: 1024px`        |

**响应式前缀**：

- `md:` = 768px 以上生效
- `lg:` = 1024px 以上生效
- `sm:` = 640px 以上生效

```html
<!-- 手机上隐藏，平板以上显示 -->
<div class="hidden md:block">平板才能看到我</div>
```

---

## 2. 项目结构详解

```
zfly_website/
├── public/                 # 静态文件（图片、favicon 等）
│   ├── favicon.ico         # 网站图标
│   └── assets/images/      # 图片资源
│
├── src/                    # 源代码（你主要改这里）
│   ├── components/         # 可复用组件
│   ├── data/               # 数据文件
│   ├── pages/              # 页面（自动变成路由）
│   ├── styles/             # 样式文件
│   └── utils/              # 工具函数和配置
│
├── package.json            # 项目依赖和脚本
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
├── next.config.js          # Next.js 配置
└── next-sitemap.config.js  # Sitemap 生成配置
```

### 2.1 为什么这样组织？

| 目录          | 职责             | 什么时候改它           |
| ------------- | ---------------- | ---------------------- |
| `components/` | 可复用的 UI 组件 | 想改导航栏、按钮样式   |
| `pages/`      | 页面内容         | 想改某个页面的内容     |
| `data/`       | 业务数据         | 想加产品、改产品信息   |
| `utils/`      | 配置和工具       | 想改站点名称、SEO 信息 |
| `styles/`     | 全局样式         | 想改全局字体、颜色     |

---

## 3. 核心概念

### 3.1 组件（Component）

组件是 React 的核心。一个组件 = 一个函数，返回要显示的内容。

```tsx
// 最简单的组件
const Hello = () => {
  return <div>Hello</div>;
};

// 带 props（参数）的组件
type ButtonProps = {
  text: string;      // 必填参数
  size?: 'sm' | 'lg'; // 可选参数（? 表示可选）
};

const Button = ({ text, size = 'sm' }: ButtonProps) => {
  return <button className={size === 'lg' ? 'text-xl' : 'text-sm'}>{text}</button>;
};

// 使用
<Button text="点击我" />
<Button text="大按钮" size="lg" />
```

### 3.2 Props（属性）

Props 是组件的输入参数，父组件传给子组件。

```tsx
// 父组件
const Page = () => {
  return <ProductCard name="无人机 A" price="¥999" />;
};

// 子组件接收 props
const ProductCard = ({ name, price }: { name: string; price: string }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};
```

### 3.3 Children（子元素）

有些组件需要包裹其他内容：

```tsx
// Section 组件接收 children
type SectionProps = {
  title: string;
  children: ReactNode; // ReactNode = 任何可渲染的内容
};

const Section = ({ title, children }: SectionProps) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

// 使用时，标签之间的内容就是 children
<Section title="产品介绍">
  <p>这里是产品介绍内容</p>
  <img src="product.jpg" />
</Section>;
```

### 3.4 文件路由

Next.js 的 `pages/` 目录下的文件自动变成路由：

| 文件路径                    | URL 路径             |
| --------------------------- | -------------------- |
| `pages/index.tsx`           | `/`                  |
| `pages/about.tsx`           | `/about`             |
| `pages/contact.tsx`         | `/contact`           |
| `pages/products/index.tsx`  | `/products`          |
| `pages/products/[slug].tsx` | `/products/任意名称` |

**动态路由**：`[slug]` 是占位符，可以匹配任意值。

```tsx
// pages/products/[slug].tsx
// 访问 /products/drone-a 时，slug = "drone-a"
// 访问 /products/drone-b 时，slug = "drone-b"
```

---

## 4. 文件逐个解读

### 4.1 `src/utils/AppConfig.ts` - 站点配置

```typescript
export const AppConfig = {
  site_name: "狗弟爱学无人机", // 站点名称，显示在导航栏/页脚
  title: "狗弟爱学无人机 - ...", // 浏览器标签页标题
  description: "狗弟爱学无人机是...", // SEO 描述，搜索结果里显示
  locale: "zh-CN", // 语言设置
  keywords: "教育无人机,科研无人机,...", // SEO 关键词
  siteUrl: "https://gd-drone.com", // 网站域名，用于 SEO
};
```

**修改场景**：改站点名称、SEO 信息、域名。

### 4.2 `src/components/Layout.tsx` - 页面布局

这是最重要的组件，定义了所有页面共用的结构：

```tsx
const Layout = ({ children }: LayoutProps) => (
  <div>
    {/* 导航栏 */}
    <header>
      <nav>...</nav>
    </header>

    {/* 页面内容（每个页面不同） */}
    <main>{children}</main>

    {/* 页脚 */}
    <footer>...</footer>
  </div>
);
```

**修改场景**：

- 改导航链接：修改 `navLinks` 数组
- 改 Logo：修改 `<Link href="/">` 里的 SVG
- 改页脚内容：修改 `<footer>` 部分

### 4.3 `src/components/Button.tsx` - 按钮组件

```tsx
type ButtonProps = {
  xl?: boolean;           // 是否大号按钮
  children: ReactNode;    // 按钮文字
  className?: string;     // 额外样式
  type?: 'button' | 'submit';  // 按钮类型
  onClick?: () => void;   // 点击事件
};

const Button = ({ xl, children, ... }: ButtonProps) => {
  // classNames 函数用来动态拼接 CSS 类
  const btnClass = classNames(
    '基础样式',
    xl ? '大按钮样式' : '普通按钮样式',
  );

  return <button className={btnClass}>{children}</button>;
};
```

**使用方式**：

```tsx
<Button>普通按钮</Button>
<Button xl>大号按钮</Button>
<Button type="submit">提交表单</Button>
```

### 4.4 `src/components/Meta.tsx` - SEO 组件

```tsx
const Meta = ({ title, description, canonical }: MetaProps) => (
  <Head>
    {/* 这些标签影响搜索引擎和社交分享 */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />

    {/* Open Graph 标签，影响微信/微博分享卡片 */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Head>
);
```

**每个页面都要用**：

```tsx
<Meta title="产品中心 - 狗弟爱学无人机" description="浏览我们的无人机产品..." />
```

### 4.5 `src/data/products.ts` - 产品数据

```typescript
export type Product = {
  id: number;
  slug: string; // URL 友好的标识，如 "edu-drone-lite"
  name: string; // 产品名称
  category: string; // 分类
  description: string; // 简短描述
  image: string; // 图片 URL
  price: string; // 价格（字符串，因为可能是"询价"）
  features: string[]; // 特性列表
  specs: Record<string, string>; // 技术规格
};

export const products: Product[] = [
  {
    id: 1,
    slug: "edu-drone-lite",
    name: "小飞侠 Lite",
    // ...
  },
  // 更多产品...
];
```

**添加新产品**：在 `products` 数组里加一个对象即可。

### 4.6 页面文件解读

#### `pages/index.tsx` - 首页

```tsx
const Index = () => (
  <Layout>                           {/* 包裹在 Layout 里 */}
    <Meta title="..." description="..." />  {/* SEO 信息 */}

    {/* Hero 区域 - 大标题 */}
    <div className="bg-gray-100 pt-20 pb-32">
      <h1>让科研与教育在空中起飞</h1>
      <Button>查看产品</Button>
    </div>

    {/* 特性区域 */}
    <Section title="核心优势">
      <FeatureRow title="开放平台" ... />
    </Section>

    {/* CTA 区域 */}
    <Section>
      <div>准备好了吗？<Button>联系我们</Button></div>
    </Section>
  </Layout>
);

export default Index;  // 必须 export default
```

#### `pages/products/[slug].tsx` - 动态产品详情页

```tsx
// 这个页面根据 URL 动态显示不同产品
// /products/edu-drone-lite → 显示 edu-drone-lite 产品
// /products/research-quad → 显示 research-quad 产品

const ProductDetail = ({ product }: { product: Product }) => (
  <Layout>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    {/* ... */}
  </Layout>
);

// 告诉 Next.js 有哪些页面需要生成
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({
    params: { slug: p.slug }, // 每个产品一个页面
  }));
  return { paths, fallback: false };
};

// 告诉 Next.js 每个页面的数据从哪来
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.slug === params?.slug);
  return { props: { product } };
};
```

---

## 5. 常见模式

### 5.1 条件渲染

```tsx
// 方式 1：三元运算符
{isLoggedIn ? <UserMenu /> : <LoginButton />}

// 方式 2：&& 短路
{error && <ErrorMessage>{error}</ErrorMessage>}

// 方式 3：在 className 里
<div className={`base ${active ? 'text-blue-500' : 'text-gray-500'}`}>
```

### 5.2 列表渲染

```tsx
// 用 .map() 遍历数组
{
  products.map((product) => <ProductCard key={product.id} product={product} />);
}

// key 是必须的，用于 React 识别每个元素
```

### 5.3 解构赋值

```tsx
// 不解构
const ProductCard = (props: ProductCardProps) => {
  return <div>{props.product.name}</div>;
};

// 解构（更简洁）
const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.name}</div>;
};

// 深度解构
const ProductCard = ({ product: { name, price } }: ProductCardProps) => {
  return (
    <div>
      {name} - {price}
    </div>
  );
};
```

### 5.4 组件组合

```tsx
// 小组件
const Avatar = ({ src }: { src: string }) => (
  <img src={src} className="rounded-full w-10 h-10" />
);

const Name = ({ children }: { children: string }) => (
  <span className="font-bold">{children}</span>
);

// 组合成大组件
const UserCard = ({ user }: { user: User }) => (
  <div className="flex items-center gap-3">
    <Avatar src={user.avatar} />
    <Name>{user.name}</Name>
  </div>
);
```

---

## 6. 如何修改

### 6.1 改文字内容

直接找到对应页面文件，改里面的文字。

**例**：改首页标题

```tsx
// src/pages/index.tsx
<h1>让科研与教育在空中起飞</h1> // 改这里
```

### 6.2 改样式

找到对应元素的 `className`，修改 Tailwind 类。

**例**：让标题更大

```tsx
// 原来
<h1 className="text-4xl">标题</h1>

// 改成
<h1 className="text-5xl">标题</h1>
```

### 6.3 改颜色

项目定义了主题色 `primary`，在 `tailwind.config.js` 里配置。

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        100: '#E6F0FF',  // 最浅
        500: '#3B82F6',  // 主色
        600: '#2563EB',  // hover 时
      },
    },
  },
},
```

使用：`text-primary-500`、`bg-primary-100`

### 6.4 加新页面

1. 在 `src/pages/` 下新建文件，如 `faq.tsx`
2. 写一个导出默认组件的页面：

```tsx
import { Layout } from "../components/Layout";
import { Meta } from "../components/Meta";
import { Section } from "../components/Section";
import { AppConfig } from "../utils/AppConfig";

const FAQ = () => (
  <Layout>
    <Meta
      title={`常见问题 - ${AppConfig.site_name}`}
      description="常见问题解答"
    />
    <Section title="常见问题">
      <p>内容...</p>
    </Section>
  </Layout>
);

export default FAQ;
```

3. 新页面自动可以通过 `/faq` 访问
4. 如果要加到导航栏，编辑 `Layout.tsx` 的 `navLinks`

### 6.5 加新产品

编辑 `src/data/products.ts`，在 `products` 数组里加一个对象：

```typescript
{
  id: 5,  // 新 ID
  slug: 'new-drone',  // URL 路径
  name: '新产品名称',
  category: '教学系列',
  description: '产品描述...',
  image: 'https://...',  // 图片 URL
  price: '¥9999',
  features: ['特性1', '特性2', '特性3'],
  specs: {
    '重量': '500g',
    '续航': '20min',
  },
},
```

---

## 7. 调试技巧

### 7.1 开发服务器

```bash
npm run dev
```

打开 http://localhost:3000，修改代码后自动刷新。

### 7.2 浏览器开发者工具

- `F12` 或 `Cmd+Option+I` 打开
- **Elements**：查看/修改 HTML 和 CSS
- **Console**：看 JavaScript 错误
- **Network**：看网络请求

### 7.3 TypeScript 报错

编辑器（VS Code）会直接显示红色波浪线，鼠标悬停看错误信息。

常见错误：

- `Property 'xxx' does not exist`：拼写错误或缺少属性
- `Type 'string' is not assignable to type 'number'`：类型不匹配
- `Cannot find module`：导入路径错误

### 7.4 构建检查

```bash
npm run build
```

如果有错误，会显示具体文件和行号。

### 7.5 格式化代码

```bash
npm run format
```

自动修复格式问题。

---

## 8. 学习资源

### 官方文档（推荐）

| 技术       | 文档                                | 说明                              |
| ---------- | ----------------------------------- | --------------------------------- |
| React      | https://react.dev/learn             | 中文版：https://zh-hans.react.dev |
| Next.js    | https://nextjs.org/docs             | 框架文档                          |
| TypeScript | https://www.typescriptlang.org/docs | 类型系统                          |
| Tailwind   | https://tailwindcss.com/docs        | 样式类速查                        |

### 推荐学习顺序

1. **先看 React 基础**

   - [快速入门](https://zh-hans.react.dev/learn)
   - [组件和 Props](https://zh-hans.react.dev/learn/passing-props-to-a-component)
   - [条件渲染](https://zh-hans.react.dev/learn/conditional-rendering)
   - [列表渲染](https://zh-hans.react.dev/learn/rendering-lists)

2. **再看 Tailwind**

   - [核心概念](https://tailwindcss.com/docs/utility-first)
   - [响应式设计](https://tailwindcss.com/docs/responsive-design)
   - 用的时候直接搜类名

3. **Next.js 按需学**

   - [路由](https://nextjs.org/docs/pages/building-your-application/routing)
   - [静态生成](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)

4. **TypeScript 边用边学**
   - 遇到报错再查
   - [基础类型](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## 附录：术语表

| 术语          | 解释                                     |
| ------------- | ---------------------------------------- |
| Component     | 组件，可复用的 UI 单元                   |
| Props         | 组件的输入参数                           |
| Children      | 组件标签之间的内容                       |
| JSX/TSX       | 在 JS/TS 里写 HTML 的语法                |
| Hook          | React 的功能钩子（如 useState）          |
| SSG           | Static Site Generation，静态站点生成     |
| SSR           | Server-Side Rendering，服务端渲染        |
| SEO           | Search Engine Optimization，搜索引擎优化 |
| Canonical URL | 标准网址，告诉搜索引擎页面的权威地址     |
| Responsive    | 响应式，适配不同屏幕尺寸                 |

---

有问题随时问我！
