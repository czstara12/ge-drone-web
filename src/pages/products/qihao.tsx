import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 核心参数
const coreSpecs = [
  { label: '续航时间', value: '40min', desc: '高压 14000mAh 电池' },
  { label: '折叠尺寸', value: '30×26cm', desc: '便携收纳' },
  { label: '展开轴距', value: '85cm', desc: '对角线（上桨后）' },
  { label: '机载算力', value: 'NUC13/Orin', desc: '可选配置' },
];

// 模块配置
const modules = [
  {
    icon: '🎮',
    name: 'PX4 飞控',
    desc: '开源飞控系统，稳定可靠，支持二次开发',
  },
  {
    icon: '📡',
    name: 'Livox Mid-360',
    desc: '360° 激光雷达，高精度三维感知',
  },
  {
    icon: '💻',
    name: '机载电脑',
    desc: 'Intel NUC 13 或 Jetson Orin NX 可选',
  },
  {
    icon: '📺',
    name: '高清图传',
    desc: '实时图像回传，低延迟',
  },
  {
    icon: '🎥',
    name: '三轴云台',
    desc: '稳定拍摄，支持多种相机',
  },
  {
    icon: '🕹️',
    name: '可视化遥控器',
    desc: '带屏遥控器，直观操作',
  },
];

// 产品特点
const features = [
  {
    icon: '🦅',
    title: '大折叠设计',
    desc: '85cm 轴距折叠至 30×26cm，便携性与性能兼得',
  },
  {
    icon: '⚡',
    title: '超长续航',
    desc: '40 分钟飞行时间，高压 4.35V 电芯，14000mAh 大容量',
  },
  {
    icon: '🧠',
    title: '强劲算力',
    desc: 'NUC 13 或 Jetson Orin NX，满足复杂算法需求',
  },
  {
    icon: '🔧',
    title: '完全开放',
    desc: '支持二次开发，所有代码都在机载电脑内',
  },
];

// 规格参数
const specs = {
  flight: [
    { label: '续航时间', value: '40 分钟' },
    { label: '电池规格', value: '高压 4.35V / 14000mAh' },
    { label: '飞控系统', value: 'PX4' },
  ],
  size: [
    { label: '折叠尺寸', value: '30 × 26 cm' },
    { label: '展开轴距', value: '85 cm（对角线）' },
  ],
  sensor: [
    { label: '激光雷达', value: 'Livox Mid-360' },
    { label: '图传系统', value: '高清数字图传' },
    { label: '云台', value: '三轴增稳云台' },
  ],
  compute: [
    { label: '机载电脑', value: 'NUC 13 / Jetson Orin NX' },
    { label: '软件环境', value: '完整开发环境预装' },
    { label: '开发支持', value: '支持完全二次开发' },
  ],
};

// 服务支持
const services = [
  { icon: '📦', title: '算法预部署', desc: '支持该系列无人机的所有算法预部署' },
  { icon: '🎬', title: '教程视频', desc: '官方标准机型用户操作视频' },
  { icon: '🛠️', title: '定制功能', desc: '可根据需求定制特定功能' },
  { icon: '📄', title: '发票支持', desc: '支持任意发票，公司账户付款' },
];

const QihaoProduct = () => (
  <Layout>
    <Meta
      title={`七好学生 通用无人机平台 - ${AppConfig.site_name}`}
      description="七好学生通用无人机平台，大折叠高续航设计，40 分钟续航，搭载 Livox Mid-360 激光雷达和 NUC13/Jetson Orin NX 机载电脑，支持完全二次开发。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-orange-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-yellow-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-orange-500/30 px-4 py-1 text-sm font-semibold">
              通用无人机平台
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              七好学生
              <span className="mt-2 block text-2xl font-normal text-orange-200">
                大折叠 · 高续航 · 强算力
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-orange-100">
              专为户外算法研究打造的通用无人机平台。85cm 轴距折叠至背包大小， 40
              分钟超长续航，搭载 Livox Mid-360 激光雷达和高性能机载电脑。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-orange-400/30 bg-orange-800/50 p-4"
                >
                  <div className="text-sm text-orange-200">{spec.label}</div>
                  <div className="text-2xl font-bold text-white">
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
            <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl" />
            <Image
              src="/images/products/qihao-drone.jpg"
              alt="七好学生 通用无人机平台"
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
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">核心参数</h2>
        <p className="mt-2 text-gray-400">性能与便携的完美平衡</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-orange-600">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-white">{spec.label}</div>
            <div className="text-sm text-gray-400">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 折叠展示 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">大折叠设计</h2>
        <p className="mt-2 text-gray-400">85cm 轴距，折叠后仅 30×26cm</p>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/products/qihao-folded.jpg"
              alt="七好学生 折叠状态"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">折叠状态</span>
            <span className="ml-2 text-gray-400">30 × 26 cm</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/products/qihao-outdoor.jpg"
              alt="七好学生 户外飞行"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">展开状态</span>
            <span className="ml-2 text-gray-400">85 cm 轴距</span>
          </div>
        </div>
      </div>
    </Section>

    {/* 产品特点 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">产品特点</h2>
        <p className="mt-2 text-gray-400">专为户外算法研究打造</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-lg border border-gray-700 bg-gray-800/50 p-6"
          >
            <div className="shrink-0 text-4xl">{feature.icon}</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-orange-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 模块配置 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">模块配置</h2>
        <p className="mt-2 text-gray-400">专业级硬件组合</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="rounded-lg border border-white/10 bg-gray-800/60 p-6 shadow-sm"
          >
            <div className="mb-3 text-3xl">{mod.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-white">{mod.name}</h3>
            <p className="text-gray-400">{mod.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 详细规格 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">详细规格</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 飞行参数 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-orange-600">飞行参数</h3>
          {specs.flight.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 尺寸参数 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-orange-600">尺寸参数</h3>
          {specs.size.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 传感器 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-orange-600">传感器</h3>
          {specs.sensor.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 算力平台 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-orange-600">算力平台</h3>
          {specs.compute.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* 服务支持 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">服务支持</h2>
        <p className="mt-2 text-gray-400">完善的售后保障</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {services.map((svc) => (
          <div key={svc.title} className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
              {svc.icon}
            </div>
            <h3 className="mb-2 font-bold text-white">{svc.title}</h3>
            <p className="text-sm text-gray-400">{svc.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-orange-600">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          准备好探索户外算法研究了吗？
        </h2>
        <p className="mb-8 text-xl text-orange-100">
          大折叠、高续航、强算力，七好学生为你而来
        </p>
        <Link href="/contact">
          <Button xl className="bg-orange-500 text-white hover:bg-orange-400">
            立即咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default QihaoProduct;
