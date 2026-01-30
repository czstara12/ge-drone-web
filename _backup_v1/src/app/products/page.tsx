import { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "无人机产品大全_工业级|消费级|专业级无人机",
  description: "ZFLY提供全系列无人机产品，包括工业巡检、农业植保、专业航拍和消费级娱乐无人机。",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

const categories = [
  { name: "全部产品", value: "all" },
  { name: "工业级", value: "industrial" },
  { name: "专业级", value: "professional" },
  { name: "消费级", value: "consumer" },
];

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = params.category || "all";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">产品中心</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          探索我们先进的无人机产品线，找到最适合您需求的解决方案。
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={cat.value === "all" ? "/products" : `/products?category=${cat.value}`}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-colors border",
              (category === cat.value || (category === undefined && cat.value === "all"))
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:bg-muted"
            )}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          暂无该分类产品
        </div>
      )}
    </div>
  );
}
