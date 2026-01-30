import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "关于我们_无人机行业领先企业",
  description: "ZFLY致力于无人机技术的创新与应用，拥有专业的研发团队和完善的服务体系。",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">关于 ZFLY</h1>
        
        <div className="prose prose-lg mx-auto dark:prose-invert">
          <p className="lead text-xl text-muted-foreground mb-8 text-center">
            我们是一群热爱飞行的极客，致力于用技术拓展人类的视野。
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">公司简介</h2>
            <p className="mb-4">
              ZFLY 成立于2018年，总部位于中国深圳，是一家专注于高性能无人机研发、生产和销售的高科技企业。我们拥有一支来自全球顶尖航空航天院校和知名科技公司的研发团队，掌握了飞行控制、图像传输、视觉感知等核心技术。
            </p>
            <p>
              我们的产品涵盖工业级、专业级和消费级三大领域，广泛应用于电力巡检、地理测绘、影视航拍、农业植保等场景。ZFLY 始终坚持"技术驱动、品质至上"的理念，为全球用户提供安全、可靠、智能的飞行体验。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">发展历程</h2>
            <div className="border-l-2 border-primary/20 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold">2023年</h3>
                <p className="text-muted-foreground">发布 ZFLY Mavic 3 Pro，搭载哈苏三摄系统，定义航拍新高度。</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold">2021年</h3>
                <p className="text-muted-foreground">推出 ZFLY Agri T40 农业无人机，引领智慧农业发展。</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold">2019年</h3>
                <p className="text-muted-foreground">ZFLY X8 Pro 工业无人机发布，成功应用于国家电网巡检项目。</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-lg font-bold">2018年</h3>
                <p className="text-muted-foreground">ZFLY 品牌正式成立，获得首轮融资。</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">我们的使命</h2>
            <blockquote className="border-l-4 border-primary pl-4 italic text-xl">
              "让飞行更简单，让世界更广阔。"
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
}
