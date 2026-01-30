import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const About = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={`关于我们 - ${AppConfig.title}`} description="了解 ZFly 的发展历程、企业文化和技术团队。" />
    
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">关于 ZFly</h1>
            <p className="mt-4 text-xl text-gray-500">致力于成为全球领先的工业级无人机解决方案提供商</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">公司简介</h2>
            <p className="mb-4 text-lg leading-relaxed">
              ZFly 成立于 2020 年，是一家专注于高性能工业级无人机研发、制造与销售的科技创新型企业。我们拥有一支由资深航空航天工程师、AI 算法专家和结构设计师组成的研发团队。
            </p>
            <p className="text-lg leading-relaxed">
              我们的产品广泛应用于电力巡检、农业植保、安防救援、地理测绘等领域，以"稳定、智能、高效"著称。ZFly 始终坚持技术驱动，不断突破飞行边界，为各行各业提供可靠的空中生产力工具。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">企业愿景</h2>
              <p className="text-lg">让飞行更智能，让作业更简单。构建空地一体的数字化未来。</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">核心价值观</h2>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>创新驱动 (Innovation)</li>
                <li>品质至上 (Quality)</li>
                <li>客户为本 (Customer First)</li>
                <li>合作共赢 (Win-Win)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">发展历程</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-primary-500">2023</div>
                <div>
                  <h3 className="font-bold text-gray-900">发布 ZFly Cine 8</h3>
                  <p>进军专业影视航拍市场，获得行业高度评价。</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-primary-500">2022</div>
                <div>
                  <h3 className="font-bold text-gray-900">完成 A 轮融资</h3>
                  <p>获得顶级风投机构投资，扩大研发中心规模。</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-primary-500">2021</div>
                <div>
                  <h3 className="font-bold text-gray-900">推出首款农业无人机</h3>
                  <p>M300 AG 上市，助力智慧农业发展。</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 font-bold text-primary-500">2020</div>
                <div>
                  <h3 className="font-bold text-gray-900">ZFly 成立</h3>
                  <p>确立"工业级无人机"为核心发展方向。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>
    
    <Footer />
  </div>
);

export default About;
