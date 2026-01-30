import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="准备好提升您的空中作业效率了吗？"
      subtitle="立即联系我们，获取专业的无人机解决方案报价。"
      button={
        <Link href="/contact">
          <Button>立即咨询</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
