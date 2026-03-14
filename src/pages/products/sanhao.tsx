import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 核心参数
const coreSpecs = [
  { label: '整机重量', value: '1.0kg', desc: '轻量化设计' },
  { label: '续航时间', value: '10min', desc: '4S 5300mAh 电池' },
  { label: '定位精度', value: '0.1m', desc: '每 100m² 范围' },
  { label: '悬停精度', value: '±1cm', desc: '水平/垂直双向' },
];

// 硬件模块
const modules = [
  {
    icon: '🎮',
    name: 'Holybro Pixhawk 6C',
    category: '飞控',
    desc: '开源 PX4 飞控，稳定可靠',
  },
  {
    icon: '📡',
    name: '思岚 RPLIDAR S1',
    category: '激光雷达',
    desc: '360° 扫描，40m 测距',
  },
  {
    icon: '💻',
    name: 'Orange Pi 5B',
    category: '机载电脑',
    desc: 'RK3588S 芯片，8+64GB',
  },
  {
    icon: '📷',
    name: '星光级摄像头',
    category: 'USB 相机',
    desc: '1080P 无畸变，130° 视角',
  },
  {
    icon: '🕹️',
    name: 'RadioMaster POCKET',
    category: '遥控器',
    desc: '美国手，便携设计',
  },
  {
    icon: '📏',
    name: '下视 TOF',
    category: '测距仪',
    desc: '高精度定高',
  },
];

// 产品功能
const functions = [
  { icon: '🚀', title: '一键起飞降落', desc: '简化操作，专注算法开发' },
  { icon: '🗺️', title: '激光雷达 SLAM', desc: '边建图边飞行，实时定位导航' },
  { icon: '🎯', title: '自主定点悬停', desc: '高精度位置保持，厘米级精度' },
  { icon: '🛡️', title: '自主避障规划', desc: '实时路径规划，智能绕障' },
  { icon: '🤖', title: 'YOLO 识别', desc: '人工智能图像物体识别' },
  { icon: '📦', title: '舵机投放', desc: '激光笔标定，竞赛必备功能' },
  { icon: '🔲', title: '二维码追踪', desc: '精准追踪和降落（新升级）' },
  { icon: '🚢', title: '定速巡航', desc: '激光雷达 SLAM 导航巡航' },
];

// 飞行器参数
const droneSpecs = [
  { label: '整机重量', value: '约 1.0 kg' },
  { label: '最大起飞重量', value: '1.5 kg' },
  { label: '最大平飞速度', value: '2 m/s' },
  { label: '轴距', value: '250 mm' },
  { label: '外形尺寸', value: '300 × 300 × 150 mm' },
  { label: '材质', value: '碳纤维' },
];

// 电池参数
const batterySpecs = [
  { label: '电池规格', value: '4S 5300mAh' },
  { label: '续航时间', value: '10 分钟' },
];

// 激光雷达参数
const lidarSpecs = [
  { label: '型号', value: '思岚 RPLIDAR S1' },
  { label: '类型', value: '单线 360° 激光雷达' },
  { label: '测量半径（白色物体）', value: '40m' },
  { label: '测量半径（黑色物体）', value: '10m' },
  { label: '采样速度', value: '9200 次/秒' },
  { label: '扫描频率', value: '10 ~ 20Hz 可调' },
  { label: '安全等级', value: 'Class I（人眼安全）' },
];

// 机载电脑参数
const computerSpecs = [
  { label: '型号', value: 'Orange Pi 5B' },
  { label: '主芯片', value: 'RK3588S' },
  { label: '内存/存储', value: '8GB + 64GB' },
  { label: '系统', value: 'Ubuntu + ROS' },
];

const SanhaoProduct = () => (
  <Layout>
    <Meta
      title={`三好学生 室内导航无人机 - ${AppConfig.site_name}`}
      description="三好学生轻量化高性价比室内导航无人机，思岚 S1 激光雷达 SLAM 导航，Orange Pi 5B 机载电脑，YOLO 识别，Ubuntu + ROS 系统，教学竞赛入门首选。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-indigo-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-blue-500/30 px-4 py-1 text-sm font-semibold">
              轻量化 · 高性价比
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              三好学生
              <span className="mt-2 block text-2xl font-normal text-blue-200">
                2D 室内导航及建图无人机开发平台
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-blue-100">
              提供无 GPS
              限制的自主导航方案，完美解决室内白墙、白地板、摩尔纹等视觉定位难题。
              搭载 Ubuntu + ROS 系统，是踏入智能 AI
              无人机科研和竞赛领域的入门之选。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreSpecs.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-blue-400/30 bg-blue-800/50 p-4"
                >
                  <div className="text-sm text-blue-200">{spec.label}</div>
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
                href="https://www.bilibili.com/video/BV1xkHbeXEYn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border-2 border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                📺 二维码追踪演示
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl" />
            <Image
              src="/images/products/sanhao-front.jpg"
              alt="三好学生 室内导航无人机"
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
        <p className="mt-2 text-gray-400">精准定位，稳定可靠</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreSpecs.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-blue-600">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-white">{spec.label}</div>
            <div className="text-sm text-gray-400">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品展示 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">产品展示</h2>
        <p className="mt-2 text-gray-400">碳纤维涵道保护罩，安全可靠</p>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-square">
            <Image
              src="/images/products/sanhao-top.jpg"
              alt="三好学生 俯视图"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">俯视图</span>
            <span className="ml-2 text-gray-400">涵道保护 + 激光雷达</span>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-square">
            <Image
              src="/images/products/sanhao-front.jpg"
              alt="三好学生 正面图"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <span className="font-semibold text-gray-700">正面图</span>
            <span className="ml-2 text-gray-400">前置摄像头 + RPLIDAR</span>
          </div>
        </div>
      </div>
    </Section>

    {/* 硬件模块 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">硬件模块</h2>
        <p className="mt-2 text-gray-400">专业级组件配置</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {modules.map((mod) => (
          <div
            key={mod.name}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="text-3xl">{mod.icon}</span>
              <span className="text-sm text-blue-400">{mod.category}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{mod.name}</h3>
            <p className="text-gray-400">{mod.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品功能 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">产品功能</h2>
        <p className="mt-2 text-gray-400">开箱即用的完整功能套件</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {functions.map((func) => (
          <div
            key={func.title}
            className="rounded-lg border border-white/10 bg-gray-800/60 p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 text-3xl">{func.icon}</div>
            <h3 className="mb-2 text-lg font-bold text-white">{func.title}</h3>
            <p className="text-sm text-gray-400">{func.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 详细规格 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">详细技术规格</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 飞行器参数 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-blue-600">飞行器参数</h3>
          {droneSpecs.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 电池参数 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold text-blue-600">电池 & 续航</h3>
          {batterySpecs.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}

          <h3 className="mb-4 mt-6 text-xl font-bold text-blue-600">
            机载电脑
          </h3>
          {computerSpecs.map((s) => (
            <div
              key={s.label}
              className="flex justify-between border-b border-white/10 py-3 last:border-0"
            >
              <span className="text-gray-400">{s.label}</span>
              <span className="font-medium text-white">{s.value}</span>
            </div>
          ))}
        </div>

        {/* 激光雷达 */}
        <div className="rounded-xl bg-gray-800/60 p-6 shadow-md md:col-span-2">
          <h3 className="mb-4 text-xl font-bold text-blue-600">激光雷达参数</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {lidarSpecs.map((s) => (
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
      </div>
    </Section>

    {/* 软件系统 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">软件系统</h2>
        <p className="mt-2 text-gray-400">开源友好，二次开发无门槛</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
          <div className="mb-2 text-4xl">🐧</div>
          <h3 className="mb-2 text-xl font-bold">Ubuntu</h3>
          <p className="text-orange-100">
            主流 Linux 发行版，丰富的开发资源和社区支持
          </p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
          <div className="mb-2 text-4xl">🤖</div>
          <h3 className="mb-2 text-xl font-bold">ROS</h3>
          <p className="text-blue-100">
            机器人操作系统，模块化架构，便于算法集成
          </p>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
          <div className="mb-2 text-4xl">🧠</div>
          <h3 className="mb-2 text-xl font-bold">YOLO</h3>
          <p className="text-purple-100">实时目标检测，支持自定义模型训练</p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-blue-50 p-6">
        <h3 className="mb-3 text-lg font-bold text-blue-800">
          💡 完全开放的二次开发
        </h3>
        <p className="text-blue-700">
          所有代码都在无人机上的机载电脑内，支持完全二次开发。
          提供完善的设备维护和使用支持，官方提供标准机型用户操作视频供参考。
        </p>
      </div>
    </Section>

    {/* 使用环境说明 */}
    <Section className="bg-yellow-50" titleClassName="text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 text-4xl">⚠️</div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">使用环境要求</h2>
        <ul className="space-y-2 text-left text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-yellow-600">•</span>
            系统工作环境 20 米内需有多面可反射激光的障碍物
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-600">•</span>
            雷达单次扫描环境中低反射率面（镜面、玻璃窗等）面积不超过 40%
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-yellow-600">•</span>
            禁止对楼梯、扶梯等进行攀爬飞行任务
          </li>
        </ul>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-blue-600">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">开启你的室内无人机之旅</h2>
        <p className="mb-8 text-xl text-blue-100">
          轻量化、高性价比，适合教学入门、竞赛准备、算法验证
        </p>
        <Link href="/contact">
          <Button xl className="bg-blue-500 text-white hover:bg-blue-400">
            立即咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default SanhaoProduct;
