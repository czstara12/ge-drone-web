import Link from 'next/link';

import { Background } from '../../background/Background';
import { Button } from '../../button/Button';
import { products } from '../../data/products';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { AppConfig } from '../../utils/AppConfig';

const Products = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`产品中心 - ${AppConfig.title}`}
      description="浏览狗弟工作室全系列教育科研无人机产品，从入门教学到前沿科研。"
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
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">产品系列</h1>
          <p className="mt-4 text-xl text-gray-500">
            满足各行业需求的专业飞行平台
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded bg-primary-500 px-2 py-1 text-xs font-bold text-white">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mb-4 h-12 overflow-hidden text-gray-600">
                    {product.description}
                  </p>
                  <ul className="mb-6 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <svg
                          className="mr-2 size-4 text-primary-500"
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
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-600">
                      {product.price === '询价' ? '价格面议' : product.price}
                    </span>
                    <Button>查看详情</Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </Background>

    <Footer />
  </div>
);

export default Products;
