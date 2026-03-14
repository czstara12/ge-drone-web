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
src/
├── components/         # Reusable components
│   ├── Layout.tsx      # Main layout (Navbar + Footer)
│   ├── Button.tsx      # Button component
│   ├── Meta.tsx        # SEO meta tags
│   ├── ProductCard.tsx # Product card
│   └── Section.tsx     # Page section wrapper
├── data/               # Data (products, etc.)
│   └── products.ts     # Product definitions
├── pages/              # Pages
│   ├── index.tsx       # Home
│   ├── about.tsx       # About Us
│   ├── contact.tsx     # Contact
│   └── products/       # Products
│       ├── index.tsx   # Product list
│       └── [slug].tsx  # Product detail
├── styles/             # Global styles
│   └── global.css      # Tailwind + custom styles
└── utils/              # Utilities & config
    └── AppConfig.ts    # Site configuration
```

## Pages

| Path                     | Description                           |
| ------------------------ | ------------------------------------- |
| `/`                      | Home                                  |
| `/products`              | Product List                          |
| `/products/liyumen-x8`   | Liyumen-X8 Survey Drone               |
| `/products/sanhao`       | Sanhao Indoor Navigation Platform     |
| `/products/wuhao`        | Wuhao Competition & Research Platform |
| `/products/sim-platform` | Godi Simulation Platform              |
| `/about`                 | About Us                              |
| `/contact`               | Contact                               |

## Products

Currently featuring 5 real products:

| Product                  | Category              | Highlights                                           |
| ------------------------ | --------------------- | ---------------------------------------------------- |
| Liyumen-X8               | Professional Survey   | Odin1 sensor module, RTK positioning, 21min flight   |
| Sanhao (三好学生)        | Education/Competition | 2D Lidar SLAM, YOLO detection, Ubuntu + ROS          |
| Wuhao (五好学生)         | Competition/Research  | 3 navigation modes, 13th-gen i5, Intel sensor suite  |
| Godi Sim (狗弟仿真平台) | Simulation Software   | XTDrone + PX4 + Gazebo + ROS, WSL2-based             |
| Qihao (七好学生)         | General Platform      | 40min flight, foldable, Livox Mid-360, NUC13/Orin NX |

## Configuration

Site config is in `src/utils/AppConfig.ts`:

```typescript
export const AppConfig = {
  site_name: "狗弟爱学无人机",
  title: "狗弟爱学无人机 - 狗弟工作室 | 教育科研无人机专家",
  description: "...",
  locale: "zh-CN",
  keywords: "...",
  siteUrl: "https://godi-drone.com", // For SEO canonical URLs
};
```

## Customization

- **Favicon**: Replace files in `public/`
- **Global styles**: Edit `src/styles/global.css`
- **Products**: Edit `src/data/products.ts`
- **Layout**: Edit `src/components/Layout.tsx` for navbar/footer
- **Page content**: Edit page files in `src/pages/`

## Scripts

| Command               | Description             |
| --------------------- | ----------------------- |
| `npm run dev`         | Start dev server        |
| `npm run build`       | Production build        |
| `npm run start`       | Start production server |
| `npm run lint`        | Lint code               |
| `npm run format`      | Format code             |
| `npm run check-types` | Type check              |

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
