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
    slug: 'zfly-x1-pro',
    name: 'ZFly X1 Pro',
    description: '专业的工业级四旋翼无人机，专为电力巡检和安防监控设计。',
    price: '询价',
    category: '工业级',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20quadcopter%20drone%20industrial%20inspection%20white%20background&image_size=landscape_4_3',
    features: ['50分钟超长续航', 'IP55 防护等级', '6向避障', '10公里图传'],
    specs: {
      '轴距': '800mm',
      '最大起飞重量': '7kg',
      '最大载重': '2kg',
      '最大飞行时间': '50min',
      '工作温度': '-20°C 至 50°C',
    },
  },
  {
    id: '2',
    slug: 'zfly-m300-ag',
    name: 'ZFly M300 AG',
    description: '高效能农业植保无人机，配备大容量药箱和精密喷洒系统。',
    price: '询价',
    category: '农业级',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=agriculture%20spraying%20drone%20flying%20over%20green%20field&image_size=landscape_4_3',
    features: ['30L 超大药箱', '每小时作业 150 亩', 'RTK 厘米级定位', '智能航线规划'],
    specs: {
      '轴距': '1500mm',
      '最大起飞重量': '40kg',
      '药箱容量': '30L',
      '喷洒宽度': '4-7m',
      '作业效率': '150亩/小时',
    },
  },
  {
    id: '3',
    slug: 'zfly-cine-8',
    name: 'ZFly Cine 8',
    description: '电影级专业航拍无人机，支持挂载多种电影摄影机。',
    price: '询价',
    category: '专业影视',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20heavy%20lift%20drone%20carrying%20red%20camera%20sunset&image_size=landscape_4_3',
    features: ['双电池冗余设计', '支持 RED/ARRI 相机', '3秒百公里加速', '专业云台控制'],
    specs: {
      '轴距': '1100mm',
      '最大起飞重量': '15kg',
      '最大载重': '6kg',
      '最大飞行速度': '90km/h',
      '抗风等级': '6级',
    },
  },
];
