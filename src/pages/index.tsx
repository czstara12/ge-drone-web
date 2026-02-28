import Link from 'next/link';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { AppConfig } from '../utils/AppConfig';

type FeatureRowProps = {
  title: string;
  description: string;
  icon: string;
  color: string;
  reverse?: boolean;
};

const FeatureRow = ({
  title,
  description,
  icon,
  color,
  reverse,
}: FeatureRowProps) => (
  <div
    className={`flex flex-col items-center gap-8 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
  >
    <div className="md:w-1/2">
      <div
        className={`flex aspect-[4/3] items-center justify-center rounded-lg ${color}`}
      >
        <span className="text-8xl">{icon}</span>
      </div>
    </div>
    <div className="md:w-1/2">
      <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-xl leading-relaxed">{description}</p>
    </div>
  </div>
);

const Index = () => (
  <Layout>
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* Hero */}
    <div className="bg-gray-100 pb-32 pt-20">
      <div className="mx-auto max-w-screen-lg px-3 text-center">
        <h1 className="whitespace-pre-line text-5xl font-bold leading-tight text-gray-900">
          {'让科研与教育\n'}
          <span className="text-primary-500">在空中起飞</span>
        </h1>
        <p className="mb-16 mt-4 text-2xl">
          专为高校科研与 STEM
          教育打造的无人机平台，从入门教学到前沿研究，助力培养下一代航空人才。
        </p>
        <Link href="/products">
          <Button xl>查看产品系列</Button>
        </Link>
      </div>
    </div>

    {/* Features */}
    <Section
      title="核心优势"
      description="为什么选择狗弟工作室作为您的教育科研合作伙伴？我们专注于为教学与研究提供最专业的无人机平台。"
    >
      <div className="space-y-16">
        <FeatureRow
          title="开放的二次开发平台"
          description="全系列产品支持 PX4/ArduPilot 开源飞控，提供完整的 SDK 和 ROS2 接口，让学生和研究人员专注于算法创新而非底层适配。"
          icon="🔧"
          color="bg-gradient-to-br from-blue-100 to-blue-200"
        />
        <FeatureRow
          title="完善的课程与教材配套"
          description="配套从小学到研究生的分层课程体系，包含教案、实验指导书、在线视频和仿真环境，降低教学门槛，快速开课。"
          icon="📚"
          color="bg-gradient-to-br from-green-100 to-green-200"
          reverse
        />
        <FeatureRow
          title="安全可靠的飞行体验"
          description="室内光流定位、全向桨叶保护罩、低电量自动返航，确保教学和实验环境下的飞行安全，让师生放心使用。"
          icon="🛡️"
          color="bg-gradient-to-br from-amber-100 to-amber-200"
        />
      </div>
    </Section>

    {/* CTA Banner */}
    <Section>
      <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
        <div className="text-2xl font-semibold">
          <div className="text-gray-900">
            准备好开启无人机教学与科研之旅了吗？
          </div>
          <div className="text-primary-500">
            联系我们获取产品资料、课程方案和定制报价。
          </div>
        </div>
        <div className="mt-3 sm:ml-2 sm:mt-0">
          <Link href="/contact">
            <Button>立即咨询</Button>
          </Link>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Index;
