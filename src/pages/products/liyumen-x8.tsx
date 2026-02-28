import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 产品核心参数
const coreSpecs = [
  { label: '飞行时间', value: '21分钟', desc: '室内悬停工况下的续航时间' },
  {
    label: '最大飞行速度',
    value: '70km/h',
    desc: '高速巡航能力，快速覆盖勘测区域',
  },
  { label: '最大带载重量', value: '350g', desc: '支持多种传感器模组' },
  { label: 'GPS定位', value: 'RTK级', desc: '厘米级定位精度' },
];

// Odin1 传感器模组规格
const sensorSpecs = [
  {
    title: '高精度 Lidar（Depth）',
    value: '940nm 激光',
    features: ['±3cm 精度', '最高 700,000 pts/s 点频', 'Class 1 人眼安全'],
  },
  {
    title: '高清 RGB 相机',
    value: '4K 分辨率',
    features: ['±5cm+1% 定位精度', '400Hz 高频数据'],
  },
  {
    title: '工业级可靠性',
    value: 'IP67 防护',
    features: ['-20℃~55℃ 工作温度', '仅 280g 轻量化设计'],
  },
];

// 产品特点
const features = [
  {
    icon: '🛡️',
    title: '笼式安全型设计',
    desc: '紧凑高效的工业级外形，X结构设计提供最优的稳定性和灵活性',
  },
  {
    icon: '🔋',
    title: '滑块式智能电池',
    desc: '快速更换和管理，支持热插拔，提升作业效率',
  },
  {
    icon: '🎮',
    title: '专业级遥控器',
    desc: '专业级控制面板，实时反馈和监控，操作直观便捷',
  },
  {
    icon: '📡',
    title: '传感器模组',
    desc: 'Lidar + Depth + RGB 一体化集成模组，满足多场景勘测需求',
  },
];

const LiyumenX8 = () => (
  <Layout>
    <Meta
      title={`鲤鱼门-X8 勘测无人机 - ${AppConfig.site_name}`}
      description="鲤鱼门-X8 专业勘测无人机，配备 Odin1 传感器模组，高精度 Lidar、RGB 相机一体化设计，为您的勘测任务提供精准、高效、可靠的解决方案。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-primary-500 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-400">
              专业勘测无人机
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              鲤鱼门-X8
              <span className="mt-2 block text-2xl font-normal text-gray-400">
                勘测无人机
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              精心设计的每一个参数都为了在复杂的勘测环境中提供最佳的性能和可靠性。
              为您的勘测任务提供精准、高效、可靠的解决方案。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-gray-700 bg-gray-800/50 p-4"
                >
                  <div className="text-sm text-gray-400">{spec.label}</div>
                  <div className="text-2xl font-bold text-primary-400">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button xl>立即咨询</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-3xl" />
            <Image
              src="/images/products/drone-product-real.jpg"
              alt="鲤鱼门-X8 勘测无人机"
              width={500}
              height={400}
              className="relative mx-auto w-full max-w-lg rounded-lg drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>

    {/* 核心参数 */}
    <Section className="bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">核心参数</h2>
        <p className="mt-2 text-gray-600">卓越的飞行性能</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-primary-600">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-gray-900">{spec.label}</div>
            <div className="text-sm text-gray-500">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品特点 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">产品特点</h2>
        <p className="mt-2 text-gray-600">
          笼式安全型设计，紧凑高效的工业级外形
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="shrink-0 text-4xl">{feature.icon}</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Odin1 传感器模组 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Odin1 传感器模组</h2>
        <p className="mt-2 text-gray-400">Lidar + Depth + RGB 一体化集成模组</p>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/images/products/odin1-product.png"
            alt="Odin1 传感器模组"
            width={384}
            height={300}
            className="max-w-sm drop-shadow-2xl"
          />
        </div>

        <div className="space-y-6">
          {sensorSpecs.map((spec) => (
            <div
              key={spec.title}
              className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
            >
              <div className="mb-1 text-lg font-bold text-primary-400">
                {spec.title}
              </div>
              <div className="mb-3 text-2xl font-bold">{spec.value}</div>
              <ul className="space-y-1">
                {spec.features.map((f, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="mr-2 text-primary-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* 飞行性能展示 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">卓越的飞行性能</h2>
        <p className="mt-2 text-gray-600">飞行性能展示</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/images/products/flight-performance-drone.png"
          alt="鲤鱼门-X8 飞行展示"
          width={1200}
          height={600}
          className="w-full"
        />
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-primary-100">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          准备好体验专业级勘测无人机了吗？
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          联系我们获取详细产品资料、定制方案和报价
        </p>
        <Link href="/contact">
          <Button xl>立即咨询</Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default LiyumenX8;
