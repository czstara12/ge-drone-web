import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ProductJsonLd } from 'next-seo';

import { Background } from '../../background/Background';
import { Button } from '../../button/Button';
import type { Product } from '../../data/products';
import { products } from '../../data/products';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { AppConfig } from '../../utils/AppConfig';

type IProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: IProductDetailProps) => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`${product.name} - ${product.category}无人机 - ${AppConfig.site_name}`}
      description={product.description}
      canonical={`${AppConfig.site_name}/products/${product.slug}`}
    />

    <ProductJsonLd
      productName={product.name}
      images={[product.image]}
      description={product.description}
      brand="ZFly"
      offers={[
        {
          price: product.price === '询价' ? '0' : product.price,
          priceCurrency: 'CNY',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `${AppConfig.site_name}/products/${product.slug}`,
          seller: {
            name: 'ZFly Drones',
          },
        },
      ]}
    />

    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/">首页</Link>
          </li>
          <li>
            <Link href="/products">产品中心</Link>
          </li>
          <li>
            <Link href="/about">关于我们</Link>
          </li>
          <li>
            <Link href="/contact">联系我们</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-10 pb-20">
        <div className="overflow-hidden rounded-xl bg-white shadow-xl">
          <div className="md:flex">
            <div className="relative h-96 bg-gray-200 md:h-auto md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="size-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2 md:p-12">
              <div className="text-sm font-semibold uppercase tracking-wide text-primary-500">
                {product.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {product.description}
              </p>

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
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

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

          <div className="border-t border-gray-200 bg-gray-50 p-8 md:p-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">技术规格</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <div className="mb-1 text-sm text-gray-500">{key}</div>
                  <div className="text-lg font-medium text-gray-900">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Footer />
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.slug === params?.slug);

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;
