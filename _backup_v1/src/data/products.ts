export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "industrial" | "consumer" | "professional";
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  specs: {
    weight: string;
    flightTime: string;
    range: string;
    speed: string;
    camera: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    slug: "zfly-x8-pro",
    name: "ZFLY X8 Pro 工业无人机",
    description: "专为工业巡检设计的高性能八旋翼无人机，具备超长续航和强大的抗风能力。",
    price: 49999,
    category: "industrial",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20drone%20octocopter%20professional%20inspection%20heavy%20lift%20dark%20blue%20background%20studio%20lighting&image_size=landscape_4_3",
    rating: 4.8,
    reviewCount: 124,
    features: ["60分钟超长续航", "10公里图传距离", "IP55防护等级", "六向避障系统"],
    specs: {
      weight: "8.5kg",
      flightTime: "60 mins",
      range: "15 km",
      speed: "20 m/s",
      camera: "64MP Thermal + Visual",
    },
  },
  {
    id: "2",
    slug: "zfly-air-2",
    name: "ZFLY Air 2 航拍无人机",
    description: "轻巧便携的专业航拍无人机，搭载1英寸CMOS传感器，支持5.4K视频录制。",
    price: 6999,
    category: "professional",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20camera%20drone%20sleek%20design%20folding%20arms%204k%20camera%20sunset%20background&image_size=landscape_4_3",
    rating: 4.9,
    reviewCount: 856,
    features: ["1英寸CMOS", "大师镜头", "四向避障", "焦点跟随"],
    specs: {
      weight: "595g",
      flightTime: "31 mins",
      range: "12 km",
      speed: "19 m/s",
      camera: "20MP 1-inch CMOS",
    },
  },
  {
    id: "3",
    slug: "zfly-mini-3",
    name: "ZFLY Mini 3 消费级无人机",
    description: "入门首选，249g超轻机身，无需考证，随时随地想飞就飞。",
    price: 2999,
    category: "consumer",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=small%20consumer%20drone%20white%20palm%20size%20flying%20in%20park%20sunny%20day&image_size=landscape_4_3",
    rating: 4.7,
    reviewCount: 2341,
    features: ["249g轻量机身", "无损竖拍", "抗风等级5级", "一键短片"],
    specs: {
      weight: "248g",
      flightTime: "38 mins",
      range: "10 km",
      speed: "16 m/s",
      camera: "12MP 1/1.3-inch CMOS",
    },
  },
  {
    id: "4",
    slug: "zfly-agri-t40",
    name: "ZFLY Agri T40 农业无人机",
    description: "革命性的农业植保无人机，40L超大药箱，每小时作业效率高达320亩。",
    price: 39999,
    category: "industrial",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=agriculture%20spraying%20drone%20large%20tank%20flying%20over%20green%20field%20spraying%20water&image_size=landscape_4_3",
    rating: 4.9,
    reviewCount: 45,
    features: ["40kg喷洒载重", "50kg播撒载重", "有源相控阵雷达", "双目视觉"],
    specs: {
      weight: "38kg (w/o battery)",
      flightTime: "18 mins (loaded)",
      range: "2 km",
      speed: "10 m/s",
      camera: "FPV Camera",
    },
  },
  {
    id: "5",
    slug: "zfly-mavic-3-pro",
    name: "ZFLY Mavic 3 Pro",
    description: "搭载哈苏三摄系统，开启航拍新视界。主摄支持4/3 CMOS，画质惊艳。",
    price: 13888,
    category: "professional",
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high%20end%20camera%20drone%20three%20lenses%20hasselblad%20cinematic%20lighting&image_size=landscape_4_3",
    rating: 5.0,
    reviewCount: 320,
    features: ["哈苏三摄", "43分钟续航", "全向避障", "15公里高清图传"],
    specs: {
      weight: "958g",
      flightTime: "43 mins",
      range: "15 km",
      speed: "21 m/s",
      camera: "Hasselblad 4/3 CMOS",
    },
  },
];
