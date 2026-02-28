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
  <div className="min-h-screen text-gray-600 antialiased">
    {/* Navbar */}
    <header className="bg-gray-100">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between px-3 py-6">
        <Link
          href="/"
          className="flex items-center text-3xl font-semibold text-gray-900"
        >
          <svg
            className="mr-1 size-11 stroke-current text-primary-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <rect x="3" y="12" width="6" height="8" rx="1" />
            <rect x="9" y="8" width="6" height="12" rx="1" />
            <rect x="15" y="4" width="6" height="16" rx="1" />
            <path d="M4 20h14" />
          </svg>
          {AppConfig.site_name}
        </Link>

        <nav>
          <ul className="flex items-center gap-5 text-xl font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main>{children}</main>

    {/* Footer */}
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg px-3 py-8">
        <div className="text-center">
          {/* Logo */}
          <Link
            href="/"
            className="inline-flex items-center text-xl font-semibold text-gray-900"
          >
            <svg
              className="mr-1 size-8 stroke-current text-primary-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <rect x="3" y="12" width="6" height="8" rx="1" />
              <rect x="9" y="8" width="6" height="12" rx="1" />
              <rect x="15" y="4" width="6" height="16" rx="1" />
              <path d="M4 20h14" />
            </svg>
            {AppConfig.site_name}
          </Link>

          {/* Nav Links */}
          <nav className="mt-5">
            <ul className="flex flex-wrap justify-center gap-4 text-xl font-medium text-gray-800">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="mt-8 text-sm text-gray-500">
            © {new Date().getFullYear()} {AppConfig.site_name}. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export { Layout };
