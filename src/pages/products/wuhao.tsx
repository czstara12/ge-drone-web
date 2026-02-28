import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 核心参数
const coreSpecs = [
  { label: '整机重量', value: '~3kg', desc: '含电池' },
  { label: '最大载重', value: '3-4kg', desc: '可挂载大容量电池' },
  { label: '定位精度', value: '1-3cm', desc: '厘米级精度' },
  { label: '续航时间', value: '7-20min', desc: '根据电池容量' },
];

// 硬件模块
const modules = [
  {
    icon: '🎮',
    name: 'Holybro Pixhawk 4',
    category: '飞控',
    desc: 'PM06 电源模块，稳定顺手',
  },
  {
    icon: '📡',
    name: 'Livox Mid-360',
    category: '3D 激光雷达',
    desc: '三维点云，精准定位建图',
  },
  {
    icon: '💻',
    name: 'Intel NUC 13 i5',
    category: '机载电脑',
    desc: '13 代 i5 / 16GB / 512GB SSD',
  },
  {
    icon: '📷',
    name: 'Intel D435',
    category: '深度相机',
    desc: 'RGB-D 深度感知',
  },
  {
    icon: '🎥',
    name: '星光级摄像头',
    category: 'USB 相机',
    desc: '1080P 无畸变',
  },
  {
    icon: '🕹️',
    name: 'RadioMaster POCKET',
    category: '遥控器',
    desc: '美国手，便携设计',
  },
  {
    icon: '⚡',
    name: '四合一电调 ×2',
    category: '电调',
    desc: '60A，共轴双桨专用',
  },
  {
    icon: '🔋',
    name: '6S 电池',
    category: '电源',
    desc: '5200~22000mAh 可选',
  },
];

// 导航方案
const navModes = [
  {
    icon: '🗺️',
    title: 'Mid-360 点云 + Ego-Planner',
    desc: 'Mid-360 提供定位和点云数据，基于航点程序进行 Ego-Planner 飞行',
  },
  {
    icon: '📷',
    title: 'Mid-360 + D435 深度',
    desc: 'Mid-360 定位，D435 深度相机提供深度图像，Ego-Planner 避障飞行',
  },
  {
    icon: '🎯',
    title: 'Mid-360 + RViz 打点',
    desc: '基于 RViz 交互式打点进行 Ego-Planner 飞行',
  },
  {
    icon: '✈️',
    title: 'Mid-360 无避障导航',
    desc: 'Mid-360 定位，直接航线飞行',
  },
];

// 续航表
const flightTimes = [
  { battery: '6S 5200mAh', time: '约 7 分钟', note: '标配电池' },
  { battery: '6S 12000mAh', time: '约 13 分钟', note: '中容量' },
  { battery: '6S 22000mAh', time: '约 20 分钟', note: '大容量（2.65kg）' },
];

// 飞行器参数
const droneSpecs = [
  { label: '整机重量', value: '约 3 kg' },
  { label: '最大起飞重量', value: '4 kg' },
  { label: '最大平飞速度', value: '2.5 m/s' },
  { label: '轴距', value: '360 mm' },
  { label: '外形尺寸', value: '50 × 50 cm' },
  { label: '定位精度', value: '1 - 3 cm' },
];

// 产品特点
const features = [
  {
    icon: '🔄',
    title: '共轴双桨设计',
    desc: '同轴反转双桨，动力冗余，载重能力强',
  },
  {
    icon: '🛡️',
    title: '高安全性',
    desc: '全碳纤维保护框架，防撞防摔',
  },
  {
    icon: '⚖️',
    title: '超稳定飞行',
    desc: '厘米级定位精度，飞行特稳',
  },
  {
    icon: '🧠',
    title: '强劲算力',
    desc: '13 代 i5 处理器，满足复杂算法',
  },
];

const WuhaoProduct = () => (
  <Layout>
    <Meta
      title={`五好学生 竞赛科研无人机 - ${AppConfig.site_name}`}
      description="五好学生共轴双桨设计无人机，高安全性、强载重、超稳定。搭载 Mid-360 激光雷达和 Intel NUC 13 i5，多种导航方案，专为竞赛科研打造。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-purple-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-indigo-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-purple-500/30 px-4 py-1 text-sm font-semibold">
              共轴双桨 · 高安全性
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              五好学生
              <span className="mt-2 block text-2xl font-normal text-purple-200">
                室内无人机学习及竞赛通用开发平台
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-purple-100">
              共轴双桨设计带来超强载重能力和稳定性。搭载 Mid-360 三维激光雷达和
              Intel NUC 13 i5，支持多种导航方案，专为高阶竞赛和科研打造。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-purple-400/30 bg-purple-800/50 p-4"
                >
                  <div className="text-sm text-purple-200">{spec.label}</div>
                  <div className="text-2xl font-bold text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button xl>立即咨询</Button>
              </Link>
              <a
                href="https://www.bilibili.com/video/BV1bm4y1N7u1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border-2 border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                📺 共轴双桨介绍
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-3xl" />
            <Image
              src="/images/products/wuhao-angle.jpg"
              alt="五好学生 竞赛科研无人机"
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
        <p className="mt-2 text-gray-600">强载重、超稳定、高精度</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-white p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-purple-600">
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
        <p className="mt-2 text-gray-600">共轴双桨带来的独特优势</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="shrink-0 text-4xl">{feature.icon}</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-purple-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 稳定飞行视频 */}
      <div className="mt-8 rounded-xl bg-purple-50 p-6 text-center">
        <p className="mb-3 text-purple-800">🎬 超稳定定点飞行效果展示</p>
        <a
          href="https://www.bilibili.com/video/BV1o3411G7dx/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 underline hover:text-purple-700"
        >
          观看 B 站视频 →
        </a>
      </div>
    </Section>

    {/* 产品展示 */}
    <Section className="bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">产品展示</h2>
        <p className="mt-2 text-gray-600">全碳纤维保护框架</p>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/products/wuhao-full.jpg"
              alt="五好学生 整体图"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">整体视角</span>
            <span className="ml-2 text-gray-500">D435 深度相机</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/products/wuhao-angle.jpg"
              alt="五好学生 角度图"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">俯视角度</span>
            <span className="ml-2 text-gray-500">Mid-360 激光雷达</span>
          </div>
        </div>
      </div>
    </Section>

    {/* 硬件模块 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">硬件模块</h2>
        <p className="mt-2 text-gray-400">旗舰级组件配置</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-5"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-2xl">{mod.icon}</span>
              <span className="text-xs text-purple-400">{mod.category}</span>
            </div>
            <h3 className="mb-1 font-bold text-white">{mod.name}</h3>
            <p className="text-sm text-gray-400">{mod.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 导航方案 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">导航方案</h2>
        <p className="mt-2 text-gray-600">多种导航方式可选</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {navModes.map((mode) => (
          <div
            key={mode.title}
            className="rounded-lg border border-purple-200 bg-purple-50 p-6"
          >
            <div className="mb-3 text-3xl">{mode.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-purple-800">
              {mode.title}
            </h3>
            <p className="text-purple-700">{mode.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-gray-100 p-6">
        <h3 className="mb-3 text-lg font-bold text-gray-900">🗺️ 建图 & 识别</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            • <strong>建图</strong>：基于 Mid-360 实时三维建图
          </li>
          <li>
            • <strong>识别</strong>：USB 摄像头 + YOLO 目标检测
          </li>
        </ul>
      </div>
    </Section>

    {/* 续航表 */}
    <Section className="bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">续航能力</h2>
        <p className="mt-2 text-gray-600">根据电池容量灵活选择</p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <table className="w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">电池规格</th>
                <th className="px-6 py-4 text-left">悬停时间</th>
                <th className="px-6 py-4 text-left">备注</th>
              </tr>
            </thead>
            <tbody>
              {flightTimes.map((item, idx) => (
                <tr
                  key={item.battery}
                  className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-6 py-4 font-medium">{item.battery}</td>
                  <td className="px-6 py-4 text-purple-600">{item.time}</td>
                  <td className="px-6 py-4 text-gray-500">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>

    {/* 详细规格 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">详细规格</h2>
      </div>

      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md">
        {droneSpecs.map((s) => (
          <div
            key={s.label}
            className="flex justify-between border-b border-gray-100 py-4 last:border-0"
          >
            <span className="text-gray-600">{s.label}</span>
            <span className="font-medium text-gray-900">{s.value}</span>
          </div>
        ))}
      </div>
    </Section>

    {/* 发货配套 */}
    <Section className="bg-purple-50">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">发货配套</h2>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-purple-600">✓</span>
            机载 NUC 软件环境，支持完全二次开发，所有代码都在机载电脑内
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-purple-600">✓</span>
            完善的设备维护和使用支持，官方标准机型用户操作视频
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-purple-600">✓</span>
            <strong>赠送一台备用防摔机架</strong>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-purple-600">✓</span>
            支持任意发票，可公司账户付款或 B 站工房下单
          </li>
        </ul>
      </div>
    </Section>

    {/* 版本说明 */}
    <Section>
      <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-gray-900">📋 版本说明</h3>
        <p className="mb-3 text-gray-600">
          当前为<strong>第二版</strong>，相较于第一版的升级：
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>
            • 雷达从二维雷达升级到 <strong>Mid-360 三维激光雷达</strong>
          </li>
          <li>
            • 移除 T265，定位方式改为 <strong>Mid-360 激光雷达定位</strong>
          </li>
          <li>• 其它配置保持一致</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          💡 四好学生是五好学生的小型化版本
        </p>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-purple-600">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">准备好挑战高阶竞赛了吗？</h2>
        <p className="mb-8 text-xl text-purple-100">
          共轴双桨、强载重、超稳定，五好学生助你取得佳绩
        </p>
        <Link href="/contact">
          <Button xl className="bg-white text-purple-600 hover:bg-purple-50">
            立即咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default WuhaoProduct;
