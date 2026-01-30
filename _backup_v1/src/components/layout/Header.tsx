import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "首页", href: "/" },
  { name: "产品中心", href: "/products" },
  { name: "关于我们", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">ZFLY</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "h-9 px-4 py-2"
            )}
          >
            立即咨询
          </Link>
        </div>
      </div>
    </header>
  );
}
