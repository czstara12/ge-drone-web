import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="核心优势"
    description="为什么选择 ZFly 作为您的空中合作伙伴？我们致力于提供最可靠、最智能的飞行平台。"
  >
    <VerticalFeatureRow
      title="超长续航与稳定性"
      description="采用先进的动力系统与空气动力学设计，确保在复杂气象条件下依然保持长达 50 分钟的稳定飞行，覆盖更广阔的作业区域。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20drone%20flying%20in%20sky%20long%20endurance%20stable%20high%20tech&image_size=landscape_4_3"
      imageAlt="Long endurance drone flight"
    />
    <VerticalFeatureRow
      title="高清图传与智能避障"
      description="配备 4K/8K 级云台相机与 360 度全向避障系统，让每一次飞行都安全、清晰，捕捉每一个关键细节。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=drone%20camera%20lens%20close%20up%20high%20tech%20sensor%20obstacle%20avoidance&image_size=landscape_4_3"
      imageAlt="High definition drone camera"
      reverse
    />
    <VerticalFeatureRow
      title="行业级应用解决方案"
      description="无论是电力巡检、农业植保还是安防救援，我们都提供定制化的软硬件一体化方案，无缝对接您的业务工作流。"
      image="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=drone%20inspecting%20power%20lines%20industrial%20application&image_size=landscape_4_3"
      imageAlt="Industrial drone application"
    />
  </Section>
);

export { VerticalFeatures };
