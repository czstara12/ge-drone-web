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
  theme: {
    cardClassName: string;
    badgeClassName: string;
    accentClassName: string;
    buttonClassName: string;
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
    theme: {
      cardClassName:
        'border border-primary-500/20 bg-gradient-to-br from-primary-900/40 via-dark-800 to-dark-900 shadow-glow-sm',
      badgeClassName: 'bg-primary-500 text-white',
      accentClassName: 'text-primary-400',
      buttonClassName: 'bg-primary-500 text-white hover:bg-primary-400',
    },
  },
  {
    id: '2',
    slug: 'sanhao',
    name: '三好学生',
    description:
      '轻量化高性价比室内导航无人机，思岚 S1 激光雷达 SLAM 导航，Orange Pi 5B 机载电脑，YOLO 识别，Ubuntu + ROS 系统，教学竞赛入门首选。',
    price: '询价',
    category: '教学竞赛',
    image: '/images/products/sanhao-front.jpg',
    features: [
      '思岚 RPLIDAR S1 激光雷达',
      'Orange Pi 5B 机载电脑',
      'YOLO 人工智能识别',
      '二维码精准追踪（新）',
    ],
    specs: {
      整机重量: '约 1.0kg',
      续航时间: '10min',
      悬停精度: '±1cm',
      定位精度: '0.1m/100m²',
      飞控: 'Pixhawk 6C',
    },
    theme: {
      cardClassName:
        'border border-blue-500/20 bg-gradient-to-br from-blue-900/40 via-dark-800 to-indigo-950 shadow-glow-sm',
      badgeClassName: 'bg-blue-500 text-white',
      accentClassName: 'text-blue-400',
      buttonClassName: 'bg-blue-500 text-white hover:bg-blue-400',
    },
  },
  {
    id: '3',
    slug: 'wuhao',
    name: '五好学生',
    description:
      '共轴双桨设计的高安全性竞赛科研无人机，强载重、超稳定。搭载 Mid-360 三维激光雷达和 Intel NUC 13 i5，多种导航方案可选。',
    price: '询价',
    category: '竞赛科研',
    image: '/images/products/wuhao-angle.jpg',
    features: [
      '共轴双桨设计',
      'Mid-360 三维激光雷达',
      'Intel NUC 13 i5',
      '多种导航方案',
    ],
    specs: {
      整机重量: '约 3kg',
      最大载重: '3-4kg',
      续航时间: '7-20min',
      定位精度: '1-3cm',
      飞控: 'Pixhawk 4',
    },
    theme: {
      cardClassName:
        'border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-dark-800 to-indigo-950 shadow-glow-sm',
      badgeClassName: 'bg-purple-500 text-white',
      accentClassName: 'text-purple-400',
      buttonClassName: 'bg-purple-500 text-white hover:bg-purple-400',
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
    theme: {
      cardClassName:
        'border border-emerald-500/20 bg-gradient-to-br from-emerald-900/40 via-dark-800 to-cyan-950 shadow-glow-sm',
      badgeClassName: 'bg-emerald-500 text-white',
      accentClassName: 'text-emerald-400',
      buttonClassName: 'bg-emerald-500 text-white hover:bg-emerald-400',
    },
  },
  {
    id: '5',
    slug: 'qihao',
    name: '七好学生',
    description:
      '大折叠高续航通用无人机平台，40 分钟续航，搭载 Livox Mid-360 激光雷达和 NUC13/Jetson Orin NX 机载电脑，支持完全二次开发。',
    price: '询价',
    category: '通用平台',
    image: '/images/products/qihao-drone.jpg',
    features: [
      '40 分钟超长续航',
      'Livox Mid-360 激光雷达',
      'NUC13/Orin NX 可选',
      '大折叠便携设计',
    ],
    specs: {
      续航时间: '40min',
      折叠尺寸: '30×26cm',
      展开轴距: '85cm',
      飞控系统: 'PX4',
      激光雷达: 'Livox Mid-360',
    },
    theme: {
      cardClassName:
        'border border-orange-500/20 bg-gradient-to-br from-orange-900/40 via-dark-800 to-amber-950 shadow-glow-sm',
      badgeClassName: 'bg-orange-500 text-white',
      accentClassName: 'text-orange-400',
      buttonClassName: 'bg-orange-500 text-white hover:bg-orange-400',
    },
  },
];
