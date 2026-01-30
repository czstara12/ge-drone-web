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
            {'探索未来的飞行\n'}
            <span className="text-primary-500">ZFly 工业级无人机</span>
          </>
        }
        description="专为严苛环境设计，提供卓越的航拍、测绘与巡检解决方案。重新定义空中生产力。"
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
