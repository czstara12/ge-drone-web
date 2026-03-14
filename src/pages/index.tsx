import Link from 'next/link';

import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import { AppConfig } from '../utils/AppConfig';

type FeatureRowProps = {
  title: string;
  description: string;
  icon: string;
  reverse?: boolean;
};

const FeatureRow = ({ title, description, icon, reverse }: FeatureRowProps) => (
  <div
    className={`flex flex-col items-center gap-10 md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}
  >
    <FadeIn direction={reverse ? 'right' : 'left'} className="md:w-1/2">
      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-primary-500/10 to-accent-400/5 shadow-glow">
        <span className="text-[100px] drop-shadow-md">{icon}</span>
      </div>
    </FadeIn>
    <FadeIn
      direction={reverse ? 'left' : 'right'}
      delay={0.15}
      className="md:w-1/2"
    >
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-400">
        {description}
      </p>
    </FadeIn>
  </div>
);

type StatCardProps = { value: string; label: string };
const StatCard = ({ value, label }: StatCardProps) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
    <div className="text-4xl font-bold text-primary-400">{value}</div>
    <div className="mt-1 text-sm text-gray-400">{label}</div>
  </div>
);

const Index = () => (
  <Layout>
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* Hero */}
    <div className="relative overflow-hidden bg-hero-gradient pb-32 pt-28">
      {/* 背景装饰光晕 */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-screen-lg px-6 text-center">
        <FadeIn>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400">
            <span className="size-1.5 animate-pulse rounded-full bg-primary-400" />
            专注无人机教育与科研平台
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-4 whitespace-pre-line text-5xl font-bold leading-tight text-white md:text-6xl">
            {'让科研与教育\n'}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              在空中起飞
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mx-auto mb-10 mt-6 max-w-2xl text-xl text-gray-400">
            专为高校科研与 STEM
            教育打造的无人机平台，从入门教学到前沿研究，助力培养下一代航空人才。
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <Button xl>查看产品系列</Button>
            </Link>
            <Link href="/contact">
              <button className="rounded-lg border border-white/20 px-6 py-3 text-lg font-medium text-gray-300 transition-all hover:border-white/40 hover:text-white">
                联系我们
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>

    {/* Stats */}
    <div className="bg-dark-800">
      <div className="mx-auto max-w-screen-lg px-6 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: '50+', label: '合作高校' },
            { value: '200+', label: '交付机型' },
            { value: '10+', label: '行业应用场景' },
            { value: '98%', label: '客户好评率' },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <StatCard {...stat} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>

    {/* Features */}
    <div className="bg-dark-900 py-24">
      <div className="mx-auto max-w-screen-lg px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-white">核心优势</h2>
            <p className="mt-4 text-gray-400">
              为什么选择我们作为您的教育科研合作伙伴
            </p>
          </div>
        </FadeIn>
        <div className="space-y-20">
          <FeatureRow
            title="开放的二次开发平台"
            description="全系列产品支持 PX4/ArduPilot 开源飞控，提供完整的 SDK 和 ROS2 接口，让学生和研究人员专注于算法创新而非底层适配。"
            icon="🔧"
          />
          <FeatureRow
            title="完善的课程与教材配套"
            description="配套从小学到研究生的分层课程体系，包含教案、实验指导书、在线视频和仿真环境，降低教学门槛，快速开课。"
            icon="📚"
            reverse
          />
          <FeatureRow
            title="安全可靠的飞行体验"
            description="室内光流定位、全向桨叶保护罩、低电量自动返航，确保教学和实验环境下的飞行安全，让师生放心使用。"
            icon="🛡️"
          />
        </div>
      </div>
    </div>

    {/* CTA Banner */}
    <div className="bg-dark-800 py-24">
      <div className="mx-auto max-w-screen-lg px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-primary-500/20 bg-gradient-to-br from-primary-900/50 to-dark-800 p-8 text-center sm:p-16">
            {/* 背景光晕 */}
            <div className="pointer-events-none absolute left-1/2 top-0 size-64 -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                准备好开启无人机教学与科研之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-primary-400">
                联系我们获取产品资料、课程方案和定制报价。
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button xl>立即咨询</Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </Layout>
);

export default Index;
