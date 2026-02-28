import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { ProductCard } from '../../components/ProductCard';
import { Section } from '../../components/Section';
import { products } from '../../data/products';
import { AppConfig } from '../../utils/AppConfig';

const Products = () => (
  <Layout>
    <Meta
      title={`产品中心 - ${AppConfig.site_name}`}
      description="浏览狗弟工作室全系列教育科研无人机产品，从入门教学到前沿科研。"
    />

    <Section
      title="产品系列"
      description="满足各类教学与科研需求的专业无人机平台"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  </Layout>
);

export default Products;
