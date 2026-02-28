export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'liyumen-x8',
    name: '鲤鱼门-X8',
    description:
      '专业勘测无人机，配备 Odin1 传感器模组，高精度 Lidar、RGB 相机一体化设计，为勘测任务提供精准、高效的解决方案。',
    price: '询价',
    category: '专业勘测',
    image: '/images/products/drone-product-real.jpg',
    features: [
      '笼式安全型设计',
      'Odin1 高精度传感器模组',
      'RTK 级 GPS 定位',
      '21 分钟续航时间',
    ],
    specs: {
      最大飞行速度: '70km/h',
      最大飞行时间: '21min',
      最大带载重量: '350g',
      传感器: 'Lidar + Depth + RGB',
      定位精度: '厘米级',
    },
  },
  {
    id: '2',
    slug: 'sanhao',
    name: '三好学生',
    description:
      '2D 室内导航及建图无人机开发平台，提供无 GPS 限制的自主导航方案，完美解决室内视觉定位难题，是踏入智能 AI 无人机科研和竞赛领域的入门之选。',
    price: '询价',
    category: '教学竞赛',
    image: '/images/products/sanhao-drone.jpg',
    features: [
      '激光雷达 SLAM 导航',
      'YOLO 人工智能识别',
      'Ubuntu + ROS 系统',
      '一键起飞降落',
    ],
    specs: {
      整机重量: '1.0kg',
      续航时间: '10min',
      悬停精度: '±1cm',
      定位精度: '0.1m/100m²',
      最大飞行速度: '3m/s',
      处理器: 'ARM Cortex-A72 + A53',
    },
  },
  {
    id: '3',
    slug: 'wuhao',
    name: '五好学生',
    description:
      '室内无人机学习及竞赛通用开发平台，拥有极致性能和 3 种自主导航方案，搭载 13 代 Intel i5 处理器，专为高阶竞赛和科研打造。',
    price: '询价',
    category: '竞赛科研',
    image: '/images/products/wuhao-drone.jpg',
    features: [
      '3 种导航方案可选',
      'Intel i5 强劲算力',
      'Intel 深度相机 + T265',
      '舵机投放及激光标定',
    ],
    specs: {
      整机重量: '2.4kg',
      最大起飞重量: '4.0kg',
      续航时间: '7min',
      悬停精度: '±1cm',
      处理器: '13代 Intel i5',
      导航方案: 'Egoplanner / 2D Lidar / T265',
    },
  },
  {
    id: '4',
    slug: 'sim-platform',
    name: '飞思仿真平台',
    description:
      '基于 WSL2 的 XTDrone 预装环境，集成 PX4、Gazebo、ROS，开箱即用的无人机仿真开发平台，支持 GPU 加速，适用于算法研究、教学演示、竞赛训练。',
    price: '询价',
    category: '仿真软件',
    image: '/images/products/sim-platform.jpg',
    features: [
      '开箱即用，零配置',
      'PX4 + Gazebo + ROS',
      'NVIDIA GPU 加速',
      '永久使用授权',
    ],
    specs: {
      操作系统: 'Windows 11',
      内存要求: '16GB 以上',
      显卡要求: 'NVIDIA GTX 1660+',
      预装系统: 'Ubuntu 18.04',
      仿真框架: 'XTDrone',
    },
  },
];
