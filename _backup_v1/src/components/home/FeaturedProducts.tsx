import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">热门产品</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            精选最受欢迎的无人机产品，满足您在各个领域的专业需求。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
