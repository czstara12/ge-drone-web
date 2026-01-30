import Link from 'next/link';

import { Background } from '../../background/Background';
import { Button } from '../../button/Button';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../navigation/NavbarTwoColumns';
import { Footer } from '../../templates/Footer';
import { Logo } from '../../templates/Logo';
import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { products } from '../../data/products';

const Products = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={`产品中心 - ${AppConfig.title}`} description="浏览 ZFly 全系列无人机产品，包括工业巡检、农业植保和专业航拍无人机。" />
    
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">ZFly 产品系列</h1>
          <p className="mt-4 text-xl text-gray-500">满足各行业需求的专业飞行平台</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/products/${product.slug}`}>
                <div className="h-64 overflow-hidden bg-gray-200 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
                  <ul className="mb-6 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold">{product.price === '询价' ? '价格面议' : product.price}</span>
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
