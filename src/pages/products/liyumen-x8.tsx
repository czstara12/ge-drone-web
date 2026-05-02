import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { Meta } from '../../components/Meta';
import { Section } from '../../components/Section';
import { AppConfig } from '../../utils/AppConfig';

// 详细参数
const detailedSpecs = [
  { label: '激光雷达波长', value: '905nm' },
  { label: '激光安全等级', value: 'Class1 人眼安全' },
  { label: 'FOV', value: '水平120°、竖直 90°' },
  { label: '点云输出', value: '最高70万点/秒' },
  { label: '相机', value: '深度模组240 X 180+RGB模组1600 x 1296' },
  { label: '算力', value: '最高144TOPS' },
  {
    label: 'CPU',
    value: '8 核 ARM® CORTEX ® - A78AE V8.2 64 位CPU 2MB L2 + 4MB L3',
  },
  { label: 'GPU', value: '1024 NVIDIA® CUDA® Core & 32 Tensor Core' },
  { label: '遥控器', value: '触屏遥控（5寸或10寸选配）' },
  { label: '标准起飞质量', value: '2450g' }, // Assuming kg is a typo in md, drones are usually g
  { label: '最大起飞质量', value: '4000g' }, // Assuming kg is a typo
  { label: '笼体尺寸', value: '375×460×235mm' },
  { label: '桨叶尺寸', value: '5寸/三叶' },
  { label: '电机轴距', value: '270mm' },
  { label: '机体结构', value: 'X型八旋翼共轴双桨冗余结构' },
  { label: '材质', value: '碳纤维/工程塑料' },
  { label: '电池安装', value: '推拉式快拆' },
  { label: '电池参数', value: '6s/8s 高压半固态电池 9000mha' },
  { label: '飞行速度', value: '5m/s max' },
  { label: '飞行高度', value: '50m' },
  { label: '续航时间', value: '12min/18min（选配不同电池）' },
  { label: '抗风等级', value: '5级' },
  { label: '可穿越最小涵洞', value: '400mm（圆直径）' },
  { label: '光纤通讯', value: '1km max（选配）' },
  { label: '链路距离', value: '3-15km（空旷）/5堵墙（穿透）' },
  { label: '安全工作环境温度', value: '-20℃~45℃' },
  { label: '安全等级', value: '防尘/防泼溅/防爆' },
  { label: '避障能力', value: '前向或360度' },
];

// 产品特点
const features = [
  {
    icon: '🎯',
    title: '解决核心痛点',
    desc: '致力于解决地下隧道、矿山、林业等复杂受限空间中面临的“进不去、看不清、联不通”等核心痛点。',
  },
  {
    icon: '📡',
    title: '复杂环境高可靠',
    desc: '在无GNSS信号、极度弱光、强磁干扰及严重弱网环境下，实现高可靠自主飞行。',
  },
  {
    icon: '🗺️',
    title: '三维彩色点云',
    desc: '“一比一现实还原”建图，突破传统RGBD相机和原始点云局限。',
  },
  {
    icon: '🔄',
    title: '航迹精准复飞',
    desc: '支持航迹录制及航迹精准复飞的智能勘测功能。',
  },
];

const LiyumenX8 = () => (
  <Layout>
    <Meta
      title={`鲤鱼门-X8 工业级勘测无人机 - ${AppConfig.site_name}`}
      description="LiyumenX8工业级勘测无人机，致力于解决地下隧道、矿山、林业等复杂受限空间难题。"
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
              工业级勘测无人机
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              鲤鱼门-X8
              <span className="mt-2 block text-2xl font-normal text-gray-400">
                LiyumenX8 工业级勘测无人机
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              致力于解决地下隧道、矿山、林业等复杂受限空间中面临的
              <b>“进不去、看不清、联不通”</b>
              等核心痛点。具备在无GNSS信号、极度弱光、强磁干扰及严重弱网环境下，实现高可靠自主飞行、三维彩色点云“一比一现实还原”建图、以及航迹精准复飞的智能勘测功能。
            </p>

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

    {/* 应用场景 */}
    <Section title="应用场景" className="bg-white">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            image: '/images/products/liyumen-x8/liyumen-x8-image-014.png',
            title: '下水道检测',
            description:
              '深入地下管道，精准识别堵塞、破损等问题，支持长距离巡检',
          },
          {
            image: '/images/products/liyumen-x8/liyumen-x8-image-015.png',
            title: '密集植被区域',
            description: '穿过树木丛生的复杂环境，精准识别地形和障碍物',
          },
          {
            image: '/images/products/liyumen-x8/liyumen-x8-image-016.png',
            title: '边坡稳定性监测',
            description: '高精度3D扫描边坡表面，持续监测地质灾害隐患',
          },
          {
            image: '/images/products/liyumen-x8/liyumen-x8-image-017.png',
            title: '矿洞勘测',
            description: '应对复杂地质条件，建立高精度矿洞地质模型',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 bg-gray-200">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 产品特点 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">核心能力</h2>
        <p className="mt-2 text-gray-400">突破复杂受限空间勘测痛点</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 rounded-lg border border-white/10 bg-gray-800/60 p-6 shadow-sm"
          >
            <div className="shrink-0 text-4xl">{feature.icon}</div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 实时空间感知 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">
          实时空间感知 Real-time spatial perception
        </h2>
        <p className="mt-2 text-gray-400">
          突破传统RGBD相机和原始点云局限，支持实时查看 “一比一现实还原”
          三维彩色点云
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {['隧道扫描', '桥梁扫描', '车辆扫描', '桥洞扫描'].map((scene) => (
          <div
            key={scene}
            className="rounded-xl bg-gray-800/60 p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="mb-2 text-xl font-bold text-primary-400">
              {scene}
            </div>
            <div className="text-sm text-gray-400">
              支持彩色点云和鱼眼相机可视化展示
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* 便捷一体化交互与强悍性能 */}
    <Section>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">
          便捷一体化交互 & 强悍性能
        </h2>
        <p className="mt-2 text-gray-400">
          无人机控制系统和可视化系统融为一体，无需额外设备及操作，开机直连，便捷跃然指尖
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">交互体验</h3>
          <p className="text-gray-300">
            屏幕实时显示高清图像和彩色点云。支持一键扫描、支持生成与现实世界颜色一致的彩色点云、支持彩色地图保存、支持一键录制传感器及无人机数据包、支持航迹录制及航迹复飞。
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">遥控器性能</h3>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>高通安卓系统:</strong> 6nm工艺、安卓14系统
            </li>
            <li>
              <strong>高清大屏:</strong>{' '}
              可选5.5寸或10寸高清阳光屏，即使在户外阳光直射下，依然能清晰呈现画面
            </li>
            <li>
              <strong>续航:</strong> 6-8小时超长续航、PD快充
            </li>
            <li>
              <strong>光纤通信:</strong>{' '}
              遥控器顶部预留光纤接口，在严重密闭遮挡环境中依旧能够保障通信质量
            </li>
          </ul>
        </div>
      </div>
    </Section>

    {/* 空间记忆 */}
    <Section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">空间记忆 SPATIAL MEMORY</h2>
        <p className="mt-2 text-gray-400">
          深度融合了颠覆性Odin1模组，赋予无人机长期稳定的环境认知和定位建图能力
        </p>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
            <h3 className="mb-3 text-xl font-bold text-primary-400">
              感知能力
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>超远距探测:</strong> 最远测距范围70m
                (90%反射率)/30m(10%反射率)，提升探测距离
              </li>
              <li>
                <strong>超广视场角:</strong> 120x90°FOV，覆盖更大范围，减少盲区
              </li>
              <li>
                <strong>高密度点云:</strong> 70万点/秒，实现高密度深度数据采集
              </li>
              <li>
                <strong>高分辨率数据采集:</strong>{' '}
                240x180深度模组+1600x1296RGB，全局曝光，提供清晰的高保真三维重建数据
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
            <h3 className="mb-3 text-xl font-bold text-primary-400">
              突破传统
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>稳定性:</strong>{' '}
                相较于传统雷达算法，内置MindSLAM高性能融合SLAM算法，使用“点云+相机+多冗余IMU”融合定位，鲁棒性和稳定性大幅提升
              </li>
              <li>
                <strong>更新频率:</strong>{' '}
                高频400HZ位姿更新，相较于传统20HZ更新频率，提升20倍
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>

    {/* 多功能地图处理 & 应用场景 */}
    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-white">多功能地图处理</h2>
          <p className="mb-4 text-gray-300">
            支持通过配套电脑软件MindCloud
            Studio，对无人机扫描数据进行处理（高效空间数据标注与处理、回环检测、平差优化、运动物体滤除、SOR滤波处理等）。
          </p>
          <p className="text-gray-300">
            支持保存多达15种主流点云及网格格式，如 *.bin, *.las, *.e57, *.ply,
            *.pcd 等。
          </p>
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold text-white">应用场景</h2>
          <p className="mb-4 text-gray-300">
            Liyumen无人机作为一款通用型勘测无人机，可以在山坡、隧道、下水道、杂乱草丛、炉膛等多种场景飞行。
          </p>
          <p className="text-gray-300">
            针对你想勘测的场景，只需手动或自动让无人机在场景附近飞行一圈，即可拿到该场景的“一比一场景还原”三维彩色地图，无需其它额外操作，方便快捷。
          </p>
        </div>
      </div>
    </Section>

    {/* 详细参数表 */}
    <Section className="bg-gray-800/30">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-white">无人机详细参数</h2>
      </div>

      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-gray-700/50 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4 font-medium">参数名称</th>
              <th className="px-6 py-4 font-medium">规格/数值</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {detailedSpecs.map((spec, index) => (
              <tr key={index} className="hover:bg-gray-700/30">
                <td className="px-6 py-3 font-medium text-white">
                  {spec.label}
                </td>
                <td className="px-6 py-3">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-primary-900/30">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          准备好体验工业级勘测无人机了吗？
        </h2>
        <p className="mb-8 text-xl text-gray-400">
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
