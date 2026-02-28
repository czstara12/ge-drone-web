import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import type { Product } from '../../data/products';
import { products } from '../../data/products';
import { AppConfig } from '../../utils/AppConfig';

type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => (
  <Layout>
    <Meta
      title={`${product.name} - ${product.category} - ${AppConfig.site_name}`}
      description={product.description}
    />

    <Section>
      <div className="overflow-hidden rounded-xl bg-white shadow-xl">
        <div className="md:flex">
          {/* Image */}
          <div className="relative h-96 bg-gray-200 md:h-auto md:min-h-[400px] md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="p-8 md:w-1/2 md:p-12">
            <div className="text-sm font-semibold uppercase tracking-wide text-primary-500">
              {product.category}
            </div>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{product.description}</p>

            {/* Features */}
            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                核心特性
              </h3>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="mr-2 size-5 text-green-500"
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
            </div>

            {/* Price & CTA */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  {product.price}
                </div>
                <Link href="/contact">
                  <Button xl>立即咨询</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="border-t border-gray-200 bg-gray-50 p-8 md:p-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">技术规格</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="rounded border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="mb-1 text-sm text-gray-500">{key}</div>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // 排除有独立页面的产品
  const excludeSlugs = [
    'liyumen-x8',
    'sanhao',
    'wuhao',
    'sim-platform',
    'qihao',
  ];
  const paths = products
    .filter((product) => !excludeSlugs.includes(product.slug))
    .map((product) => ({
      params: { slug: product.slug },
    }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.slug === params?.slug);

  return {
    props: { product },
  };
};

export default ProductDetail;
