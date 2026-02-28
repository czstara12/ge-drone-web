import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 核心参数
const coreSpecs = [
  { label: '续航时间', value: '7min', desc: '4.0kg 满载工况' },
  { label: '悬停精度', value: '±1cm', desc: '水平/垂直双向' },
  { label: '最大载重', value: '1.6kg', desc: '强劲动力系统' },
  { label: '处理器', value: 'i5-13代', desc: '12核16线程 4.6GHz' },
];

// 三种导航方案
const navModes = [
  {
    icon: '🌐',
    title: 'Egoplanner',
    subtitle: '三维导航方案',
    desc: '基于深度相机的 3D 环境感知，支持复杂三维空间的自主导航和避障',
    features: ['3D 环境建模', '实时路径规划', '动态避障'],
  },
  {
    icon: '📡',
    title: '2D 激光雷达',
    subtitle: 'Lidar SLAM',
    desc: '高精度 360° 激光扫描，适合结构化室内环境的精确定位导航',
    features: ['40m 测距', '9200 次/秒采样', '0.391° 角度分辨率'],
  },
  {
    icon: '👁️',
    title: 'T265 双目',
    subtitle: '视觉里程计',
    desc: 'Intel 实感技术，V-SLAM 视觉定位，163° 鱼眼广角覆盖',
    features: ['6DoF 姿态输出', 'Myriad 2 VPU', '快速运动追踪'],
  },
];

// 产品功能
const functions = [
  { icon: '🚀', title: '一键起飞降落', desc: '简化操作流程' },
  { icon: '🗺️', title: 'SLAM 导航定位', desc: '多方案可选' },
  { icon: '🛡️', title: '自主避障规划', desc: '实时路径优化' },
  { icon: '🤖', title: 'YOLO 识别', desc: 'AI 物体检测' },
  { icon: '📦', title: '舵机投放', desc: '竞赛任务支持' },
  { icon: '🎯', title: '激光标定', desc: '精准目标指示' },
];

// 飞行器参数
const droneSpecs = [
  { label: '整机重量', value: '2.4 kg' },
  { label: '最大起飞重量', value: '4.0 kg' },
  { label: '最大功耗', value: '500W' },
  { label: '最大俯仰角', value: '20°' },
  { label: '最大平飞速度', value: '3 m/s' },
  { label: '工作环境温度', value: '0℃ ~ 45℃' },
];

// 机架参数
const frameSpecs = [
  { label: '最大轴距', value: '360mm' },
  { label: '外形尺寸', value: '500 × 500 × 350 mm' },
  { label: '材质', value: '碳纤维 + 玻璃纤维' },
];

// 传感器参数
const sensorSpecs = {
  lidar: [
    { label: '测量半径（白色）', value: '25m' },
    { label: '测量半径（黑色）', value: '11m' },
    { label: '输出数据分辨率', value: '15mm' },
    { label: '测量/采样频率', value: '5400 次/s' },
    { label: '抗环境光', value: '60KLux' },
  ],
  depth: [
    { label: '型号', value: 'Intel D430' },
    { label: '操作范围', value: '0.2m ~ 10m' },
    { label: '深度分辨率', value: '1280×800' },
    { label: '视野角度', value: 'H:87° V:58°' },
    { label: '尺寸', value: '71×14×11 mm' },
  ],
  t265: [
    { label: '技术', value: 'V-SLAM' },
    { label: '处理器', value: 'Movidius Myriad 2 VPU' },
    { label: '镜头', value: 'OV9282 鱼眼 ×2' },
    { label: '视野角度', value: '163°±5°' },
    { label: '接口', value: 'USB 2.0 / 3.1' },
  ],
};

const WuhaoProduct = () => (
  <Layout>
    <Meta
      title={`五好学生 竞赛科研无人机 - ${AppConfig.site_name}`}
      description="五好学生室内无人机学习及竞赛通用开发平台，搭载 13 代 Intel i5 处理器，提供 3 种自主导航方案，专为高阶竞赛和科研打造。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-purple-500/30 px-4 py-1 text-sm font-semibold">
              竞赛科研旗舰平台
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              五好学生
              <span className="mt-2 block text-2xl font-normal text-purple-200">
                室内无人机学习及竞赛通用开发平台
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-purple-100">
              极致性能、开发空间和动力。提供 3 种无 GPS 限制的自主导航方案，
              搭载 13 代 Intel i5 处理器，专为高阶竞赛和前沿科研打造。
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

            <Link href="/contact">
              <Button xl>立即咨询</Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
            <img
              src="/images/products/wuhao-drone.jpg"
              alt="五好学生 竞赛科研无人机"
              className="relative mx-auto w-full max-w-lg rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>

    {/* 核心参数 */}
    <Section className="bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">核心参数</h2>
        <p className="mt-2 text-gray-600">旗舰级性能配置</p>
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

    {/* 三种导航方案 - 核心卖点 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">三种导航方案</h2>
        <p className="mt-2 text-gray-600">灵活切换，适配不同场景需求</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {navModes.map((mode) => (
          <div
            key={mode.title}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="mb-2 text-4xl">{mode.icon}</div>
              <h3 className="text-2xl font-bold">{mode.title}</h3>
              <p className="text-purple-200">{mode.subtitle}</p>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-600">{mode.desc}</p>
              <ul className="space-y-2">
                {mode.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="mr-2 text-purple-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品功能 */}
    <Section className="bg-gray-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">产品功能</h2>
        <p className="mt-2 text-gray-600">竞赛全流程功能覆盖</p>
      </div>

      <div className="grid gap-4 md:grid-cols-6">
        {functions.map((func) => (
          <div
            key={func.title}
            className="rounded-lg bg-white p-4 text-center shadow-sm"
          >
            <div className="mb-2 text-2xl">{func.icon}</div>
            <h3 className="font-bold text-gray-900">{func.title}</h3>
            <p className="text-xs text-gray-500">{func.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 传感器详情 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">传感器配置</h2>
        <p className="mt-2 text-gray-400">Intel 全家桶，专业级感知能力</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* 激光雷达 */}
        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <h3 className="mb-4 text-xl font-bold text-purple-400">
            📡 2D 激光雷达
          </h3>
          <ul className="space-y-3">
            {sensorSpecs.lidar.map((spec) => (
              <li key={spec.label} className="flex justify-between text-sm">
                <span className="text-gray-400">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 深度相机 */}
        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <h3 className="mb-4 text-xl font-bold text-purple-400">
            📷 Intel D430 深度相机
          </h3>
          <ul className="space-y-3">
            {sensorSpecs.depth.map((spec) => (
              <li key={spec.label} className="flex justify-between text-sm">
                <span className="text-gray-400">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* T265 */}
        <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
          <h3 className="mb-4 text-xl font-bold text-purple-400">
            👁️ Intel T265 双目里程计
          </h3>
          <ul className="space-y-3">
            {sensorSpecs.t265.map((spec) => (
              <li key={spec.label} className="flex justify-between text-sm">
                <span className="text-gray-400">{spec.label}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* 飞行器规格 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">飞行器规格</h2>
        <p className="mt-2 text-gray-600">工业级设计标准</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">飞行器参数</h3>
          <div className="grid grid-cols-2 gap-4">
            {droneSpecs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-lg bg-white p-4 shadow-sm"
              >
                <div className="text-sm text-gray-500">{spec.label}</div>
                <div className="text-lg font-bold text-gray-900">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gray-50 p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">机架 & 动力</h3>
          <div className="mb-6 space-y-3">
            {frameSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between rounded-lg bg-white p-3 shadow-sm"
              >
                <span className="text-gray-600">{spec.label}</span>
                <span className="font-medium text-gray-900">{spec.value}</span>
              </div>
            ))}
          </div>
          <h4 className="mb-3 font-bold text-gray-700">动力系统</h4>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <div className="text-xs text-gray-500">电机</div>
              <div className="font-bold">2812</div>
              <div className="text-xs text-gray-400">1115KV</div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <div className="text-xs text-gray-500">螺旋桨</div>
              <div className="font-bold">8寸</div>
              <div className="text-xs text-gray-400">204×4</div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <div className="text-xs text-gray-500">电调</div>
              <div className="font-bold">50A</div>
              <div className="text-xs text-gray-400">6S</div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* 为什么选择五好学生 */}
    <Section className="bg-purple-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          为什么选择五好学生？
        </h2>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl">🏆</div>
            <h3 className="mb-2 font-bold text-gray-900">竞赛针对性强</h3>
            <p className="text-sm text-gray-600">
              自带投放模块、激光标定模块，专为无人机竞赛设计，省去自行搭建的麻烦
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl">🔧</div>
            <h3 className="mb-2 font-bold text-gray-900">接线规范易维护</h3>
            <p className="text-sm text-gray-600">
              告别胶布扎带临时捆绑，模块化设计，炸机后可快速修复继续参赛
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl">💻</div>
            <h3 className="mb-2 font-bold text-gray-900">强劲算力</h3>
            <p className="text-sm text-gray-600">
              13 代 i5 处理器，12 核 16 线程，运行复杂 AI 算法游刃有余
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-2 text-2xl">📚</div>
            <h3 className="mb-2 font-bold text-gray-900">开发友好</h3>
            <p className="text-sm text-gray-600">
              Ubuntu + ROS + YOLO 全套预装，自制超便捷逻辑系统，上手即用
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-purple-600">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">准备好征战无人机竞赛了吗？</h2>
        <p className="mb-8 text-xl text-purple-100">五好学生，为冠军而生</p>
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
