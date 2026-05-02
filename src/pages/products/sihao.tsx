import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

const coreSpecs = [
  { label: '整机重量', value: '1.46kg', desc: '包含电池' },
  { label: '最大起飞重量', value: '1.9kg', desc: '轻量级通用平台' },
  { label: '续航时间', value: '9-10min', desc: '悬停续航' },
  { label: '定位精度', value: '1cm', desc: 'Mid360 定位' },
];

const modules = [
  {
    icon: '🎮',
    name: 'Pix4（PX4）',
    category: '飞控',
    desc: '成熟 PX4 飞控平台，适合教学、竞赛与算法验证',
  },
  {
    icon: '📡',
    name: 'Livox Mid360',
    category: '三维激光雷达',
    desc: '提供三维感知、定位和建图能力',
  },
  {
    icon: '💻',
    name: 'Jetson Orin NX Super 8G',
    category: '机载电脑',
    desc: '算力从 70T 升级至 117T，支持复杂 AI 与导航任务',
  },
  {
    icon: '📷',
    name: 'Intel RealSense D435',
    category: '深度相机',
    desc: '提供 RGB-D 深度感知，服务识别与动态障碍物检测',
  },
];

const capabilities = [
  {
    icon: '📍',
    title: '高精度定位',
    desc: '基于 Mid360 的室内定位能力，适合无 GNSS 场景下的稳定飞行',
  },
  {
    icon: '🗺️',
    title: '三维建图',
    desc: '支持三维扫描建图，为科研、竞赛和算法演示提供环境感知基础',
  },
  {
    icon: '🧭',
    title: '自主导航',
    desc: '预装多种动态导航能力，支持更丝滑的航向变化和路径执行',
  },
  {
    icon: '🔎',
    title: '自主探索',
    desc: '面向未知空间探索任务，便于验证前沿自主飞行算法',
  },
  {
    icon: '🎯',
    title: '智能识别',
    desc: '融合 YOLO、深度相机和雷达数据，支持动态障碍物识别展示',
  },
  {
    icon: '🧩',
    title: '完全二次开发',
    desc: '代码位于机载电脑内，开发人员可直接进行功能优化和算法扩展',
  },
];

const droneSpecs = [
  { label: '电池', value: '4S 5300mAh' },
  { label: '最大起飞重量', value: '1.9kg' },
  { label: '悬停续航', value: '9-10 分钟' },
  { label: '整机重量', value: '1.46kg（包含电池）' },
  { label: '轴距', value: '250mm' },
  { label: '定位精度', value: '1cm' },
];

const deliveryItems = [
  {
    title: '机载电脑软件环境',
    desc: '预置软件环境，所有代码保存在无人机机载电脑内，支持完全二次开发。',
  },
  {
    title: '维护与使用支持',
    desc: '提供完善的设备维护和使用支持，配套标准机型用户操作视频。',
  },
  {
    title: '发票支持',
    desc: '支持按采购需求开具发票，便于学校、实验室和企业流程对接。',
  },
];

const SihaoProduct = () => (
  <Layout>
    <Meta
      title={`四好学生 通用无人机平台 - ${AppConfig.site_name}`}
      description="四好学生通用无人机平台，搭载 Pix4、Mid360、Jetson Orin NX Super 和 D435，降低开发门槛，支持定位、建图、导航、探索和智能识别。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-950 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-cyan-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-cyan-500/30 px-4 py-1 text-sm font-semibold">
              低门槛 · 高性价比 · 强算力
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              四好学生
              <span className="mt-2 block text-2xl font-normal text-cyan-200">
                通用无人机开发平台
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-cyan-100">
              面向开发者、学校和竞赛团队，四好学生以顶级硬件和完整软件环境降低开发门槛，让团队把精力集中在高价值任务和功能优化上。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-cyan-400/30 bg-cyan-900/50 p-4"
                >
                  <div className="text-sm text-cyan-200">{spec.label}</div>
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
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
            <Image
              src="/images/products/sihao/sihao-flight.jpg"
              alt="四好学生 通用无人机平台"
              width={560}
              height={420}
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
        <p className="mt-2 text-gray-400">轻量平台，完整感知，高性价比交付</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-cyan-500">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-white">{spec.label}</div>
            <div className="text-sm text-gray-400">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 模块配置 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">模块配置</h2>
        <p className="mt-2 text-gray-400">
          Pix4、Mid360、Orin NX Super 与 D435 组合
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl">{mod.icon}</span>
              <span className="text-sm text-cyan-400">{mod.category}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{mod.name}</h3>
            <p className="text-gray-400">{mod.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 关键能力 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">关键能力</h2>
        <p className="mt-2 text-gray-400">
          覆盖定位、建图、导航、探索与识别能力
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {capabilities.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-white/10 bg-gray-800/60 p-6 shadow-sm"
          >
            <div className="mb-3 text-3xl">{item.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 详细规格 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">详细规格</h2>
      </div>

      <div className="mx-auto max-w-3xl rounded-xl bg-gray-800/60 p-6 shadow-md">
        {droneSpecs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between border-b border-white/10 py-3 last:border-0"
          >
            <span className="text-gray-400">{spec.label}</span>
            <span className="font-medium text-white">{spec.value}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* 服务与交付 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">服务与交付</h2>
        <p className="mt-2 text-gray-400">面向教学、科研、竞赛采购的完整支持</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {deliveryItems.map((item) => (
          <div key={item.title} className="rounded-xl bg-cyan-950/40 p-6">
            <h3 className="mb-3 text-xl font-bold text-cyan-300">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-cyan-700">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">把开发重心放回算法与功能</h2>
        <p className="mb-8 text-xl text-cyan-100">
          四好学生提供完整硬件、软件环境和维护支持，适合快速搭建无人机开发平台。
        </p>
        <Link href="/contact">
          <Button xl className="bg-cyan-500 text-white hover:bg-cyan-400">
            联系咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default SihaoProduct;
