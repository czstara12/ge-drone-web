import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '../data/products';
import { Button } from './Button';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    href={`/products/${product.slug}`}
    className={`block overflow-hidden rounded-2xl ${product.theme.cardClassName} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
  >
    <div className="relative h-64 overflow-hidden bg-gray-200">
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 via-transparent to-transparent" />
      <div
        className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-bold ${product.theme.badgeClassName}`}
      >
        {product.category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-white">{product.name}</h3>
      <p className="mb-4 line-clamp-2 text-gray-300">{product.description}</p>
      <ul className="mb-6 space-y-1">
        {product.features.slice(0, 2).map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-300">
            <svg
              className={`mr-2 size-4 ${product.theme.accentClassName}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <span className={`font-bold ${product.theme.accentClassName}`}>
          {product.price === '询价' ? '价格面议' : product.price}
        </span>
        <Button className={product.theme.buttonClassName}>查看详情</Button>
      </div>
    </div>
  </Link>
);

export { ProductCard };
