import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 核心特点
const coreFeatures = [
  { label: '开箱即用', value: '零配置', desc: '预装完整环境，导入即飞' },
  { label: '系统要求', value: 'Win11', desc: '基于 WSL2，原生性能' },
  { label: '显卡加速', value: 'NVIDIA', desc: '自动适配 GPU，流畅仿真' },
  { label: '使用期限', value: '永久', desc: '一次购买，终身使用' },
];

// 预装组件
const components = [
  {
    icon: '🚁',
    name: 'PX4',
    desc: '开源飞控固件，工业级稳定性',
  },
  {
    icon: '🌍',
    name: 'Gazebo',
    desc: '3D 物理仿真引擎，真实环境模拟',
  },
  {
    icon: '🤖',
    name: 'ROS',
    desc: '机器人操作系统，模块化开发',
  },
  {
    icon: '✈️',
    name: 'XTDrone',
    desc: '无人机仿真框架，丰富飞行场景',
  },
  {
    icon: '🐧',
    name: 'Ubuntu 18.04',
    desc: 'Linux 发行版，稳定可靠',
  },
  {
    icon: '💻',
    name: 'VS Code 集成',
    desc: '代码编辑器无缝对接',
  },
];

// 版本对比
const editions = [
  {
    name: '基础版',
    features: [
      '完整 XTDrone 预装环境',
      'PX4 + Gazebo + ROS',
      '1 个激活码',
      '永久使用',
      '基础技术支持',
    ],
    highlight: false,
  },
  {
    name: '豪华版',
    features: [
      '完整 XTDrone 预装环境',
      'PX4 + Gazebo + ROS',
      '3 个激活码',
      '永久使用',
      '优先技术支持',
      '赠送视频教程资料',
      '赠送 PPT 课件',
    ],
    highlight: true,
  },
];

// 系统要求
const requirements = [
  { label: '操作系统', value: 'Windows 11' },
  { label: '内存', value: '16GB 以上' },
  { label: '显卡', value: 'NVIDIA GTX 1660 以上' },
  { label: '硬盘空间', value: '约 50GB（导入后可删除安装包）' },
  { label: '其他', value: '支持 WSL2、Hyper-V' },
];

// 适用场景
const useCases = [
  {
    icon: '🔬',
    title: '算法研究',
    desc: '无人机控制、路径规划、SLAM 等算法验证',
  },
  { icon: '🎓', title: '教学演示', desc: '课堂演示飞行原理，学生动手实践' },
  { icon: '🏆', title: '竞赛训练', desc: '赛前仿真训练，降低试错成本' },
  { icon: '💡', title: '原型验证', desc: '新想法快速验证，再上真机测试' },
];

const SimPlatform = () => (
  <Layout>
    <Meta
      title={`无人机仿真平台 - ${AppConfig.site_name}`}
      description="基于 WSL2 的 XTDrone 预装平台，集成 PX4、Gazebo、ROS，开箱即用的无人机仿真开发环境，支持 GPU 加速，适用于算法研究、教学演示、竞赛训练。"
    />

    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 size-96 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 size-64 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-block rounded-full bg-emerald-500/30 px-4 py-1 text-sm font-semibold">
              仿真开发环境
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              狗弟仿真平台
              <span className="mt-2 block text-2xl font-normal text-emerald-200">
                XTDrone 预装环境 · 基于 WSL2
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-emerald-100">
              告别繁琐的环境配置！预装 PX4、Gazebo、ROS 全套组件， 导入 Windows
              即可开始无人机仿真开发，支持 NVIDIA GPU 加速，流畅运行。
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {coreFeatures.slice(0, 2).map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-emerald-400/30 bg-emerald-800/50 p-4"
                >
                  <div className="text-sm text-emerald-200">{spec.label}</div>
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
                href="https://www.bilibili.com/video/BV1D24vekEPE/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border-2 border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                📺 观看演示视频
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative rounded-xl border border-emerald-500/30 bg-gray-900/80 p-6 font-mono text-sm text-emerald-400">
              <div className="mb-4 flex gap-2">
                <div className="size-3 rounded-full bg-red-500" />
                <div className="size-3 rounded-full bg-yellow-500" />
                <div className="size-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2">
                <p>
                  <span className="text-gray-400">$</span> wsl --import
                  Ubuntu-18.04 ...
                </p>
                <p className="text-emerald-300">✓ XTDrone 平台导入成功</p>
                <p>
                  <span className="text-gray-400">$</span> terminator
                </p>
                <p className="text-emerald-300">✓ 启动终端</p>
                <p>
                  <span className="text-gray-400">$</span> roslaunch px4_gazebo
                  ...
                </p>
                <p className="text-emerald-300">✓ Gazebo 仿真环境启动</p>
                <p className="animate-pulse">▋</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* 核心特点 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">
          为什么选择我们的预装平台？
        </h2>
        <p className="mt-2 text-gray-400">省去数天配置时间，专注于算法研究</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {coreFeatures.map((spec) => (
          <div
            key={spec.label}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-4xl font-bold text-emerald-600">
              {spec.value}
            </div>
            <div className="mb-2 font-semibold text-white">{spec.label}</div>
            <div className="text-sm text-gray-400">{spec.desc}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* 痛点解决 */}
    <Section>
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">告别这些烦恼</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
            <h3 className="mb-4 flex items-center text-xl font-bold text-red-700">
              <span className="mr-2">❌</span> 传统方式
            </h3>
            <ul className="space-y-2 text-red-600">
              <li>• 虚拟机卡顿，体验差</li>
              <li>• 双系统切换麻烦，需要重启</li>
              <li>• 环境配置耗时数天</li>
              <li>• 依赖冲突难以解决</li>
              <li>• 显卡直通配置复杂</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6">
            <h3 className="mb-4 flex items-center text-xl font-bold text-emerald-700">
              <span className="mr-2">✅</span> 狗弟仿真平台
            </h3>
            <ul className="space-y-2 text-emerald-600">
              <li>• WSL2 原生性能，流畅运行</li>
              <li>• 像打开软件一样使用 Linux</li>
              <li>• 导入即用，零配置</li>
              <li>• 预装全套依赖，版本兼容</li>
              <li>• 自动适配 NVIDIA GPU</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    {/* 预装组件 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">预装组件</h2>
        <p className="mt-2 text-gray-400">开箱即用的完整开发环境</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {components.map((comp) => (
          <div
            key={comp.name}
            className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
          >
            <div className="mb-3 text-4xl">{comp.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-emerald-400">
              {comp.name}
            </h3>
            <p className="text-gray-300">{comp.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 适用场景 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">适用场景</h2>
        <p className="mt-2 text-gray-400">无论是科研、教学还是竞赛</p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        {useCases.map((uc) => (
          <div key={uc.title} className="text-center">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              {uc.icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">{uc.title}</h3>
            <p className="text-sm text-gray-400">{uc.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* 版本对比 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">选择版本</h2>
        <p className="mt-2 text-gray-400">两种版本，满足不同需求</p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {editions.map((edition) => (
          <div
            key={edition.name}
            className={`rounded-xl p-8 ${
              edition.highlight
                ? 'border-2 border-emerald-500 bg-gray-800/60 shadow-xl'
                : 'border border-white/10 bg-gray-800/60 shadow-md'
            }`}
          >
            {edition.highlight && (
              <div className="mb-4 inline-block rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                推荐
              </div>
            )}
            <h3 className="mb-6 text-2xl font-bold text-white">
              {edition.name}
            </h3>
            <ul className="mb-8 space-y-3">
              {edition.features.map((f, idx) => (
                <li key={idx} className="flex items-center text-gray-400">
                  <span className="mr-2 text-emerald-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button
                xl
                className={
                  edition.highlight ? '' : 'bg-gray-600 hover:bg-gray-700'
                }
              >
                立即咨询
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>

    {/* 系统要求 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">系统要求</h2>
        <p className="mt-2 text-gray-400">确保您的电脑满足以下配置</p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl bg-gray-800/30 p-6">
          {requirements.map((req, idx) => (
            <div
              key={req.label}
              className={`flex justify-between py-4 ${
                idx !== requirements.length - 1
                  ? 'border-b border-white/10'
                  : ''
              }`}
            >
              <span className="font-medium text-gray-700">{req.label}</span>
              <span className="text-white">{req.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* 配套资源 */}
    <Section className="bg-emerald-50" titleClassName="text-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-4xl">📚</div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">配套学习资源</h2>
        <p className="mb-6 text-gray-400">
          B 站提供完整的 XTDrone 29
          讲视频教程，从入门到精通，手把手带你学会仿真平台。
        </p>
        <a
          href="https://space.bilibili.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
        >
          前往 B 站观看教程 →
        </a>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-emerald-600">
      <div className="text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">准备好开始仿真开发了吗？</h2>
        <p className="mb-8 text-xl text-emerald-100">
          省去繁琐配置，专注于你的算法研究
        </p>
        <Link href="/contact">
          <Button xl className="bg-emerald-500 text-white hover:bg-emerald-400">
            立即咨询
          </Button>
        </Link>
      </div>
    </Section>
  </Layout>
);

export default SimPlatform;
