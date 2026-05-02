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
      '工业级勘测无人机，致力于解决地下隧道、矿山、林业等复杂受限空间难题，实现无GNSS信号下的高可靠自主飞行和"一比一现实还原"建图。',
    price: '询价',
    category: '工业勘测',
    image: '/images/products/drone-product-real.jpg',
    features: [
      '无GNSS信号高可靠自主飞行',
      'Odin1 高精度传感器模组',
      '三维彩色点云现实还原',
      '最高70万点/秒高密度点云',
    ],
    specs: {
      飞行速度: '5m/s max',
      续航时间: '12min/18min',
      最大起飞质量: '4000g',
      相机: '深度240x180 + RGB1600x1296',
      抗风等级: '5级',
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
    name: '狗弟仿真平台',
    description:
      '基于 WSL2 的 XTDrone 预装环境，集成 PX4、Gazebo、ROS，开箱即用的无人机仿真开发平台，支持 GPU 加速，适用于算法研究、教学演示、竞赛训练。',
    price: '询价',
    category: '仿真软件',
    image: '/images/products/sim-platform-wiring.png',
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
  {
    id: '6',
    slug: 'sihao',
    name: '四好学生',
    description:
      '高性价比通用无人机开发平台，搭载 Pix4、Mid360、Jetson Orin NX Super 和 D435，覆盖定位、建图、导航、探索与智能识别。',
    price: '询价',
    category: '通用开发',
    image: '/images/products/sihao/sihao-flight.jpg',
    features: [
      'Jetson Orin NX Super 117T 算力',
      'Mid360 三维激光雷达',
      'D435 深度相机',
      '定位、建图、导航、探索、识别',
    ],
    specs: {
      整机重量: '1.46kg',
      最大起飞重量: '1.9kg',
      续航时间: '9-10min',
      轴距: '250mm',
      定位精度: '1cm',
    },
    theme: {
      cardClassName:
        'border border-cyan-500/20 bg-gradient-to-br from-cyan-900/40 via-dark-800 to-blue-950 shadow-glow-sm',
      badgeClassName: 'bg-cyan-500 text-white',
      accentClassName: 'text-cyan-400',
      buttonClassName: 'bg-cyan-500 text-white hover:bg-cyan-400',
    },
  },
  {
    id: '7',
    slug: 'liuhao',
    name: '六好学生',
    description:
      '高性能、多功能、小巧灵活的通用无人机平台，适配 FastLivo2 雷达定位能力，在性能、续航和体积之间取得平衡。',
    price: '询价',
    category: '高性能平台',
    image: '/images/products/liuhao/liuhao-hardware.jpg',
    features: [
      'FastLivo2 雷达定位能力',
      '工业级飞控或 Nxt PX4',
      'Jetson Orin NX Super',
      '视觉识别速度与内存优化',
    ],
    specs: {
      飞机重量: '900g',
      最大起飞重量: '1.9kg',
      续航时间: '9/13min',
      轴距: '210mm',
      定位精度: '<0.5cm',
    },
    theme: {
      cardClassName:
        'border border-emerald-500/20 bg-gradient-to-br from-emerald-900/40 via-dark-800 to-teal-950 shadow-glow-sm',
      badgeClassName: 'bg-emerald-500 text-white',
      accentClassName: 'text-emerald-400',
      buttonClassName: 'bg-emerald-500 text-white hover:bg-emerald-400',
    },
  },
];
