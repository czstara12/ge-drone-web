import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="准备好开启无人机教学与科研之旅了吗？"
      subtitle="联系我们获取产品资料、课程方案和定制报价。"
      button={
        <Link href="/contact">
          <Button>立即咨询</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
