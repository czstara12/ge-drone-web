import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">首页</Link>
        </li>
        <li>
          <Link href="/products">产品中心</Link>
        </li>
        <li>
          <Link href="/about">关于我们</Link>
        </li>
        <li>
          <Link href="/contact">联系我们</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'让科研与教育\n'}
            <span className="text-primary-500">在空中起飞</span>
          </>
        }
        description="专为高校科研与 STEM 教育打造的无人机平台，从入门教学到前沿研究，助力培养下一代航空人才。"
        button={
          <Link href="/products">
            <Button xl>查看产品系列</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
