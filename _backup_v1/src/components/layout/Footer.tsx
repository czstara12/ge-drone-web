import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ZFLY</h3>
            <p className="text-sm text-muted-foreground">
              专业级无人机解决方案提供商，致力于为各行业提供高效、可靠的空中作业平台。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">产品系列</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=industrial" className="text-muted-foreground hover:text-primary">工业级无人机</Link></li>
              <li><Link href="/products?category=consumer" className="text-muted-foreground hover:text-primary">消费级无人机</Link></li>
              <li><Link href="/products?category=professional" className="text-muted-foreground hover:text-primary">专业航拍机</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">公司简介</Link></li>
              <li><Link href="/about#team" className="text-muted-foreground hover:text-primary">核心团队</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">联系我们</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>电话：400-123-4567</li>
              <li>邮箱：contact@zfly-drones.com</li>
              <li>地址：深圳市南山区科技园</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
