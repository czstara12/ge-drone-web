# 开发规范文档

> 狗弟爱学无人机官网项目开发标准，供阿爪和搭档协作时参考。

## 1. Git 提交规范

### Commit Message 格式

采用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

<body>
```

### Type 类型

| 类型 | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码格式（不影响逻辑） |
| `refactor` | 重构（非 feat/fix） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建/工具/依赖变更 |
| `revert` | 回滚 |

### 示例

```bash
feat(products): 添加 Vision V3 产品详情页
fix(nav): 修复移动端导航栏折叠问题
docs: 更新中英文 README
chore: 升级 Next.js 至 14.2
```

### 提交原则

- ✅ 一次 commit 只做一件事
- ✅ 提交前确保代码能正常运行
- ✅ 中文提交信息优先（项目面向中文用户）
- ❌ 避免 `fix bug`、`update` 等无意义信息

---

## 2. 分支管理

### 分支命名

| 分支 | 用途 |
|------|------|
| `main` | 生产分支，保持可部署状态 |
| `dev` | 开发分支（可选） |
| `feat/<name>` | 功能分支，如 `feat/swarm-page` |
| `fix/<name>` | 修复分支，如 `fix/mobile-nav` |
| `hotfix/<name>` | 紧急修复 |

### 工作流程

```
1. 从 main 拉取最新代码
2. 创建功能分支开发
3. 完成后合并回 main（或通过 PR）
4. 删除已合并的分支
```

---

## 3. 代码风格

### TypeScript / React

- 使用 **函数式组件** + Hooks
- 组件文件使用 **PascalCase**：`ProductCard.tsx`
- 工具函数使用 **camelCase**：`formatPrice.ts`
- 类型定义放在 `types/` 或组件同目录
- 优先使用 `interface`，复杂类型用 `type`

### CSS / Tailwind

- 优先使用 Tailwind 类名
- 复杂样式抽取到 `@apply` 或组件内 `styled-jsx`
- 响应式顺序：`sm:` → `md:` → `lg:` → `xl:`
- 避免内联 `style={{}}`

### 文件组织

```
src/
├── components/     # 通用组件（未来可迁移）
├── data/           # 静态数据
├── layout/         # 布局组件
├── pages/          # 页面路由
├── templates/      # 页面模板
├── styles/         # 全局样式
└── utils/          # 工具函数 & 配置
```

---

## 4. 命名规范

### 文件命名

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `ProductCard.tsx` |
| 页面 | kebab-case | `about.tsx` |
| 工具 | camelCase | `formatDate.ts` |
| 样式 | kebab-case | `global.css` |
| 数据 | camelCase | `products.ts` |

### 变量命名

- **常量**: `UPPER_SNAKE_CASE`
- **变量/函数**: `camelCase`
- **组件**: `PascalCase`
- **CSS 类**: `kebab-case`

---

## 5. 注释规范

### 必须注释的场景

- 复杂业务逻辑
- Hack 或 workaround
- TODO / FIXME
- API 接口说明

### 格式

```typescript
// 单行注释

/**
 * 多行注释
 * @param name - 参数说明
 * @returns 返回值说明
 */

// TODO: 待完成的功能
// FIXME: 需要修复的问题
// HACK: 临时解决方案，后续需优化
```

---

## 6. 测试与发布

### 发布前检查

```bash
# 类型检查
npm run check-types

# 代码检查
npm run lint

# 本地构建测试
npm run build

# 本地预览
npm run start
```

### 部署流程

1. 确保 `main` 分支代码最新
2. 本地构建测试通过
3. 推送到 Git 仓库
4. Vercel 自动部署（或手动触发）

---

## 7. 阿爪工作约定

### 改动后

- ✅ 主动 commit 或询问是否 commit
- ✅ commit message 遵循规范
- ✅ 重要改动在 commit body 中说明

### 清理工作

- ✅ 删除废弃代码/文件
- ✅ 不留注释掉的代码块
- ✅ 不留 `console.log` 调试语句

### 文档同步

- ✅ 功能变更同步更新 README
- ✅ 中英文文档保持一致
- ✅ 配置变更更新注释

---

## 8. 项目特定约定

### 品牌信息

- **品牌名**: 狗弟爱学无人机
- **公司名**: 狗弟工作室
- **定位**: 教育科研无人机
- **语言**: 中文优先，zh-CN

### SEO 关键词

```
狗弟爱学无人机, 狗弟工作室, 教育无人机, 科研无人机, 
STEM教育, 无人机教学, 编程无人机, 集群无人机
```

### 产品线

| 产品 | 定位 |
|------|------|
| Edu X1 | 教学入门 |
| Lab M2 | 科研平台 |
| Swarm S10 | 集群系统 |
| Vision V3 | 视觉研究 |

---

*最后更新: 2026-02-28*
