import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type LayoutProps = {
  children: ReactNode;
};

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/products', label: '产品中心' },
  { href: '/about', label: '关于我们' },
  { href: '/contact', label: '联系我们' },
];

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-dark-900 text-gray-300 antialiased">
    {/* Navbar */}
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          {/* 无人机 SVG 图标 */}
          <svg className="size-8 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <line x1="3" y1="6" x2="7" y2="10" />
            <line x1="21" y1="6" x2="17" y2="10" />
            <line x1="3" y1="18" x2="7" y2="14" />
            <line x1="21" y1="18" x2="17" y2="14" />
            <circle cx="3" cy="6" r="2" />
            <circle cx="21" cy="6" r="2" />
            <circle cx="3" cy="18" r="2" />
            <circle cx="21" cy="18" r="2" />
          </svg>
          {AppConfig.site_name}
        </Link>

        <nav>
          <ul className="flex items-center gap-6 text-base font-medium text-gray-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main className="pt-16">{children}</main>

    {/* Footer */}
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="mx-auto max-w-screen-lg px-6 py-12">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white">
            <svg className="size-6 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <line x1="3" y1="6" x2="7" y2="10" />
              <line x1="21" y1="6" x2="17" y2="10" />
              <line x1="3" y1="18" x2="7" y2="14" />
              <line x1="21" y1="18" x2="17" y2="14" />
              <circle cx="3" cy="6" r="2" />
              <circle cx="21" cy="6" r="2" />
              <circle cx="3" cy="18" r="2" />
              <circle cx="21" cy="18" r="2" />
            </svg>
            {AppConfig.site_name}
          </Link>

          <nav className="mt-6">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 text-sm text-gray-600">
            © {new Date().getFullYear()} {AppConfig.site_name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export { Layout };
