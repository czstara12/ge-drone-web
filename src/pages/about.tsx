import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { AppConfig } from '../utils/AppConfig';

type AdvantageProps = {
  icon: string;
  title: string;
  description: string;
};

const Advantage = ({ icon, title, description }: AdvantageProps) => (
  <div className="flex">
    <div className="w-12 shrink-0 text-2xl">{icon}</div>
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const About = () => (
  <Layout>
    <Meta
      title={`关于我们 - ${AppConfig.site_name}`}
      description="了解狗弟工作室的发展历程、企业文化和技术团队。"
    />

    <Section>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white">关于狗弟工作室</h1>
          <p className="mt-4 text-xl text-gray-400">
            致力于成为教育科研无人机领域的领先解决方案提供商
          </p>
        </div>

        {/* Intro */}
        <div className="mb-12 rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-white">公司简介</h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            狗弟工作室是一家专注于教育科研领域无人机研发与制造的创新型企业。我们拥有一支由资深航空工程师、教育专家和软件开发者组成的跨学科团队。
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            我们的产品广泛应用于高校教学、科研实验、STEM
            教育和竞赛培训等领域。狗弟工作室始终坚持&quot;让无人机教育更简单&quot;的理念，为教育机构提供一站式的无人机教学解决方案。
          </p>
        </div>

        {/* Vision & Values */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">企业愿景</h2>
            <p className="text-lg text-gray-300">
              让每一所学校都能开展无人机教育，让每一位学生都能触碰飞行梦想。
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-white">核心价值观</h2>
            <ul className="list-inside list-disc space-y-2 text-lg text-gray-300">
              <li>教育为本 (Education First)</li>
              <li>开放创新 (Open Innovation)</li>
              <li>安全可靠 (Safety & Reliability)</li>
              <li>协作共赢 (Collaboration)</li>
            </ul>
          </div>
        </div>

        {/* Advantages */}
        <div className="rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-white">我们的优势</h2>
          <div className="space-y-6">
            <Advantage
              icon="🎓"
              title="完善的课程体系"
              description="从小学到研究生，分层次配套教材、实验指导书和在线视频资源。"
            />
            <Advantage
              icon="🔧"
              title="开源开放平台"
              description="支持 PX4/ArduPilot 开源飞控，提供完整 SDK 和 ROS2 接口，方便二次开发。"
            />
            <Advantage
              icon="🛡️"
              title="安全可控设计"
              description="室内光流定位、全向桨叶保护罩、低电量自动返航，保障教学环境安全。"
            />
            <Advantage
              icon="🤝"
              title="专业技术支持"
              description="提供现场培训、远程指导和定期维护服务，助力学校顺利开展教学。"
            />
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default About;
