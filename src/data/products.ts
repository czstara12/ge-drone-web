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
    slug: 'edu-x1',
    name: 'Edu X1',
    description: '入门级教学无人机，专为中小学 STEM 教育和无人机基础课程设计。',
    price: '询价',
    category: '教学入门',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=small%20educational%20drone%20for%20kids%20classroom%20colorful%20safe%20design&image_size=landscape_4_3',
    features: ['安全桨叶保护罩', '图形化编程支持', '一键起降', '室内定位系统'],
    specs: {
      轴距: '180mm',
      最大飞行时间: '12min',
      适用年龄: '8岁以上',
      编程接口: 'Scratch / Python',
      重量: '85g',
    },
  },
  {
    id: '2',
    slug: 'lab-m2',
    name: 'Lab M2',
    description: '模块化科研无人机平台，支持自定义传感器挂载和二次开发。',
    price: '询价',
    category: '科研平台',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modular%20research%20drone%20with%20sensors%20university%20lab%20high%20tech&image_size=landscape_4_3',
    features: [
      '开源飞控 PX4/ArduPilot',
      'ROS2 原生支持',
      '多传感器扩展接口',
      '室内外 SLAM 定位',
    ],
    specs: {
      轴距: '450mm',
      最大起飞重量: '2.5kg',
      最大载重: '800g',
      飞控系统: 'PX4 / ArduPilot',
      通信接口: 'UART / CAN / USB',
    },
  },
  {
    id: '3',
    slug: 'swarm-s10',
    name: 'Swarm S10',
    description: '集群编队无人机系统，适用于多机协同算法研究和编队表演教学。',
    price: '询价',
    category: '集群系统',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=drone%20swarm%20formation%20flying%20night%20lights%20synchronized&image_size=landscape_4_3',
    features: [
      '厘米级相对定位',
      '10 机起步套装',
      '地面站集群调度',
      '灯光编队表演',
    ],
    specs: {
      单机尺寸: '200mm',
      单机重量: '120g',
      通信方式: 'UWB + WiFi Mesh',
      最大编队数量: '100+',
      同步精度: '<50ms',
    },
  },
  {
    id: '4',
    slug: 'vision-v3',
    name: 'Vision V3',
    description: '视觉算法开发平台，内置 AI 加速模块，专为机器视觉和自主导航研究打造。',
    price: '询价',
    category: '视觉研究',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=drone%20with%20camera%20ai%20computer%20vision%20research%20lab&image_size=landscape_4_3',
    features: [
      'NVIDIA Orin 边缘计算',
      '双目深度相机',
      '实时目标检测',
      'YOLO / ORB-SLAM 预装',
    ],
    specs: {
      计算平台: 'Jetson Orin Nano',
      相机: '双目 + RGB-D',
      算力: '40 TOPS',
      SDK: 'Python / C++ / ROS2',
      最大飞行时间: '25min',
    },
  },
];
