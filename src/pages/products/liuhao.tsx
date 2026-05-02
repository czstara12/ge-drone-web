import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

const coreSpecs = [
  { label: '飞机重量', value: '900g', desc: '不含电池，轻量紧凑' },
  { label: '最大起飞重量', value: '1.9kg', desc: '兼顾载重与机动性' },
  { label: '定位精度', value: '<0.5cm', desc: 'FastLivo2 雷达定位' },
  { label: '外轮廓', value: '30×30cm', desc: '轴距 210mm' },
];

const highlights = [
  {
    title: '减震优化结构',
    desc: '机体中间和下方加入减震优化结构，提升高性能平台在定位、识别和导航任务中的稳定表现。',
  },
  {
    title: '定位异常保护',
    desc: '检测到定位数据紊乱后可自动切换降落保护模式，让教学、科研和演示飞行更安心。',
  },
  {
    title: '视觉识别优化',
    desc: '视觉识别内容经过优化，速度更快、内存占用更小，便于在机载端持续运行智能任务。',
  },
];

const productImages = [
  {
    src: '/images/products/liuhao/liuhao-hardware.jpg',
    alt: '六好学生无人机硬件平台',
    title: '整机硬件',
    desc: '高性能、多功能、小巧灵活的通用无人机平台',
  },
  {
    src: '/images/products/liuhao/liuhao-wiring.jpg',
    alt: '六好学生硬件连接与模块布局',
    title: '模块连接',
    desc: '工业级飞控、雷达、机载电脑与相机组合',
  },
  {
    src: '/images/products/liuhao/sihao-wiring-reference.png',
    alt: '六好学生参考模块连接图',
    title: '配置参考',
    desc: '延续通用平台能力，适合二次开发与维护',
  },
];

const modules = [
  {
    icon: '🎮',
    name: '工业级飞控 / Nxt PX4',
    category: '飞控',
    desc: '塔式 PX4 方案升级至工业级飞控或 Nxt PX4，支撑更稳定的自主飞行控制。',
  },
  {
    icon: '📡',
    name: 'Livox Mid360',
    category: '三维激光雷达',
    desc: '提供高质量点云感知，与 FastLivo2 雷达定位能力配合用于室内高精度定位。',
  },
  {
    icon: '💻',
    name: 'Jetson Orin NX Super',
    category: '机载电脑',
    desc: '高算力机载计算平台，适合 SLAM、规划、识别与巡检应用持续运行。',
  },
  {
    icon: '📷',
    name: '星光级 USB 相机',
    category: '视觉模块',
    desc: '1080P 2.6mm 无畸变相机，水平 100 度视角，支持硬件同步，便于多传感器感知融合。',
  },
  {
    icon: '🕹️',
    name: 'RadioMaster POCKET',
    category: '遥控器',
    desc: '便携遥控器配置，适合教学、演示和项目交付使用。',
  },
];

const capabilities = [
  {
    icon: '🗺️',
    title: 'SLAM 建图定位',
    desc: '获取无人机定位数据并进行三维扫描建图，为无 GNSS 室内任务提供稳定空间基础。',
  },
  {
    icon: '🛡️',
    title: '自主避障导航',
    desc: '利用 Mid360 障碍物点云信息进行路径规划与飞行控制，适合复杂室内环境验证。',
  },
  {
    icon: '🔎',
    title: '自主探索',
    desc: '面向未知空间探索任务，支持结合建图、避障和导航能力完成自主飞行演示。',
  },
  {
    icon: '🎯',
    title: '智能识别',
    desc: '优化后的视觉识别链路速度更快、占用更低，服务检测、巡检和交互类任务。',
  },
  {
    icon: '🖥️',
    title: '地面站巡检',
    desc: '支持基于地面站进行室内自主巡检，便于教学演示、实验验证和项目交付。',
  },
  {
    icon: '🧩',
    title: '完全二次开发',
    desc: '保留通用无人机开发平台特性，便于团队开展算法优化、功能扩展和长期维护。',
  },
];

const droneSpecs = [
  { label: '电池', value: '4S 5300mAh' },
  { label: '最大起飞重量', value: '1.9kg' },
  { label: '5 寸桨续航', value: '9 分钟' },
  { label: '7 寸桨续航', value: '13 分钟' },
  { label: '轴距', value: '210mm' },
  { label: '外轮廓', value: '30×30cm' },
  { label: '定位精度', value: '<0.5cm（FastLivo2）' },
  { label: '飞机重量', value: '900g（不含电池）' },
];

const deliveryItems = [
  {
    title: '二次开发支持',
    desc: '适合作为高性能通用无人机平台开展 SLAM、导航、探索、识别和巡检算法开发。',
  },
  {
    title: '维护与交付',
    desc: '提供设备维护与使用支持，帮助学校、实验室和企业团队降低平台搭建成本。',
  },
  {
    title: '采购发票',
    desc: '支持按采购需求开具发票，便于教学科研、竞赛项目和企业采购流程对接。',
  },
];

const LiuhaoProduct = () => (
  <Layout>
    <Meta
      title={`六好学生 高性能通用无人机平台 - ${AppConfig.site_name}`}
      description="六好学生高性能通用无人机平台，搭载工业级飞控或 Nxt PX4、Mid360、Jetson Orin NX Super、星光级 USB 相机，适配 FastLivo2 雷达定位，支持 SLAM、自主避障导航、自主探索、智能识别和地面站巡检。"
    />

    {/* Hero */}
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-cyan-950 py-20 text-white">
      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-emerald-500/25 px-4 py-1 text-sm font-semibold text-emerald-100">
              高性能 · 多功能 · 小巧灵活
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              六好学生
              <span className="mt-2 block text-2xl font-normal text-emerald-200">
                高性能通用无人机平台
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-emerald-100">
              六好学生适配 FastLivo2
              雷达定位，在性能、续航与体积之间取得优质平衡。平台面向科研、竞赛、巡检和二次开发，兼顾高精度定位、强算力感知与紧凑灵活机身。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(1, 3).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-emerald-400/30 bg-emerald-950/50 p-4"
                >
                  <div className="text-sm text-emerald-200">{spec.label}</div>
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
            <Image
              src="/images/products/liuhao/liuhao-hardware.jpg"
              alt="六好学生 高性能通用无人机平台"
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
        <p className="mt-2 text-gray-400">
          轻量机身，高精度定位，兼容 5 寸与 7 寸动力配置
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-emerald-400">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-white">{spec.label}</div>
            <div className="text-sm text-gray-400">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 更新亮点 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">更新亮点</h2>
        <p className="mt-2 text-gray-400">
          围绕结构稳定性、飞行保护和识别效率进行优化
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/10 bg-gray-800/60 p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-bold text-emerald-300">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品展示 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">产品展示</h2>
        <p className="mt-2 text-gray-400">整机硬件、接线布局与配置参考</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {productImages.map((item) => (
          <div
            key={item.src}
            className="overflow-hidden rounded-xl bg-gray-800/60 shadow-lg"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <div className="font-semibold text-white">{item.title}</div>
              <div className="mt-1 text-sm text-gray-400">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 模块配置 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">模块配置</h2>
        <p className="mt-2 text-gray-400">
          工业级飞控、Mid360、Orin NX Super 与星光级相机组合
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl">{mod.icon}</span>
              <span className="text-sm text-emerald-400">{mod.category}</span>
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
          覆盖建图定位、避障导航、探索、识别与巡检
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
        <p className="mt-2 text-gray-400">在续航、体积和定位能力之间取得平衡</p>
      </div>

      <div className="mx-auto max-w-3xl rounded-xl bg-gray-800/60 p-6 shadow-md">
        {droneSpecs.map((spec) => (
          <div
            key={spec.label}
            className="flex justify-between gap-6 border-b border-white/10 py-3 last:border-0"
          >
            <span className="text-gray-400">{spec.label}</span>
            <span className="text-right font-medium text-white">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </Section>

    {/* 服务与交付 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">服务与交付</h2>
        <p className="mt-2 text-gray-400">面向科研、教学、竞赛与采购流程</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {deliveryItems.map((item) => (
          <div key={item.title} className="rounded-xl bg-emerald-950/40 p-6">
            <h3 className="mb-3 text-xl font-bold text-emerald-300">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-emerald-700">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">让高性能平台更快进入任务</h2>
        <p className="mb-8 text-xl text-emerald-100">
          六好学生适合快速搭建室内高精度定位、导航、探索、识别和巡检应用。
        </p>
        <Link href="/contact">
          <Button xl className="bg-emerald-500 text-white hover:bg-emerald-400">
            联系咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default LiuhaoProduct;
