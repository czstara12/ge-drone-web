import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wider">
          {product.category === 'industrial' ? '工业级' : product.category === 'consumer' ? '消费级' : '专业级'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-primary">
            ¥{product.price.toLocaleString()}
          </span>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            查看详情 <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
