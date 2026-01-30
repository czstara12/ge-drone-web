import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductJsonLd } from "nextjs-schema-org";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ProductJsonLd
        productName={product.name}
        images={[product.image]}
        description={product.description}
        brand={siteConfig.name}
        reviews={[]}
        aggregateRating={{
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
        }}
        offers={{
          price: product.price,
          priceCurrency: 'CNY',
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          url: `${siteConfig.url}/products/${product.slug}`,
          seller: {
            name: siteConfig.name,
          },
        }}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="relative aspect-[4/3] bg-muted rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-2">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {product.description}
          </p>
          <div className="text-3xl font-bold text-primary mb-8">
            ¥{product.price.toLocaleString()}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md font-medium transition-colors">
            立即咨询
          </button>
        </div>
      </div>

      <div className="border-t pt-16">
        <h2 className="text-2xl font-bold mb-8">技术规格</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">重量</span>
            <span className="font-medium">{product.specs.weight}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">续航时间</span>
            <span className="font-medium">{product.specs.flightTime}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">图传距离</span>
            <span className="font-medium">{product.specs.range}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">最大飞行速度</span>
            <span className="font-medium">{product.specs.speed}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">相机参数</span>
            <span className="font-medium">{product.specs.camera}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
