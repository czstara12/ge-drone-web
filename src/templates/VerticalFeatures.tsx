import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="核心优势"
    description="为什么选择狗弟工作室作为您的教育科研合作伙伴？我们专注于为教学与研究提供最专业的无人机平台。"
  >
    <VerticalFeatureRow
      title="开放的二次开发平台"
      description="全系列产品支持 PX4/ArduPilot 开源飞控，提供完整的 SDK 和 ROS2 接口，让学生和研究人员专注于算法创新而非底层适配。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=open%20source%20drone%20development%20programming%20code%20screen%20lab&image_size=landscape_4_3"
      imageAlt="Open source drone development"
    />
    <VerticalFeatureRow
      title="完善的课程与教材配套"
      description="配套从小学到研究生的分层课程体系，包含教案、实验指导书、在线视频和仿真环境，降低教学门槛，快速开课。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=students%20learning%20drone%20programming%20classroom%20education&image_size=landscape_4_3"
      imageAlt="Drone education classroom"
      reverse
    />
    <VerticalFeatureRow
      title="安全可靠的飞行体验"
      description="室内光流定位、全向桨叶保护罩、低电量自动返航，确保教学和实验环境下的飞行安全，让师生放心使用。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=safe%20indoor%20drone%20flying%20protected%20propellers%20classroom&image_size=landscape_4_3"
      imageAlt="Safe indoor drone flight"
    />
  </Section>
);

export { VerticalFeatures };
