# Godi Drone Education Website

Official website for **Godi Drone Education** (狗弟爱学无人机), a brand by **Godi Studio** (狗弟工作室).

Built with Next.js 14 + Tailwind CSS + TypeScript.

[中文文档](README_ZH.md)

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Deployment**: Vercel / Netlify

## Quick Start

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
.
├── public/                 # Static assets
│   └── assets/images/      # Images
├── src/
│   ├── background/         # Background components
│   ├── button/             # Button components
│   ├── cta/                # CTA components
│   ├── data/               # Data (products, etc.)
│   ├── feature/            # Feature components
│   ├── footer/             # Footer components
│   ├── hero/               # Hero components
│   ├── layout/             # Layout components (Meta, etc.)
│   ├── navigation/         # Navbar components
│   ├── pages/              # Pages
│   │   ├── index.tsx       # Home
│   │   ├── about.tsx       # About Us
│   │   ├── contact.tsx     # Contact
│   │   └── products/       # Products
│   ├── templates/          # Page templates
│   ├── styles/             # Global styles
│   └── utils/              # Utilities & config
├── tailwind.config.js      # Tailwind config
├── next.config.js          # Next.js config
└── tsconfig.json           # TypeScript config
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Home |
| `/products` | Product List |
| `/products/[slug]` | Product Detail |
| `/about` | About Us |
| `/contact` | Contact |

## Configuration

Site config is in `src/utils/AppConfig.ts`:

```typescript
export const AppConfig = {
  site_name: '狗弟爱学无人机',
  title: '狗弟爱学无人机 - 狗弟工作室 | 教育科研无人机专家',
  description: '...',
  locale: 'zh-CN',
  keywords: '狗弟爱学无人机,狗弟工作室,...',
};
```

## Customization

- **Favicon**: Replace files in `public/`
- **Global styles**: Edit `src/styles/global.css`
- **Products**: Edit `src/data/products.ts`
- **Page content**: Edit components in `src/templates/`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Lint code |
| `npm run format` | Format code |
| `npm run check-types` | Type check |

## Deployment

### Vercel (Recommended)

Project includes `vercel.json`. Connect your Git repo for auto-deploy.

### Netlify

Project includes `netlify.toml`. One-click deploy supported.

### Manual

```bash
npm run build-prod
```

Output in `out/` directory, deployable to any static hosting.

## License

MIT License
