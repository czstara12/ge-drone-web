import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

const Contact = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`联系我们 - ${AppConfig.title}`}
      description="联系狗弟工作室获取产品报价、课程方案或技术支持。"
    />

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

      <Section yPadding="pt-10 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900">联系我们</h1>
            <p className="mt-4 text-xl text-gray-500">
              我们期待听到您的声音，为您提供最专业的教育科研无人机服务
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="h-full rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  联系方式
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg
                      className="mr-4 mt-1 size-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900">公司地址</h3>
                      <p>
                        深圳市南山区科技园北区（具体地址待定）
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="mr-4 mt-1 size-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900">联系电话</h3>
                      <p>400-XXX-XXXX (客服热线)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="mr-4 mt-1 size-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <div>
                      <h3 className="font-bold text-gray-900">电子邮箱</h3>
                      <p>contact@godi-studio.com (商务合作)</p>
                      <p>support@godi-studio.com (技术支持)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  在线咨询
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="name"
                    >
                      姓名
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="org"
                    >
                      学校/机构
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="org"
                      type="text"
                      placeholder="您所在的学校或机构"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      邮箱
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="email"
                      type="email"
                      placeholder="您的邮箱"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="phone"
                    >
                      电话
                    </label>
                    <input
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="phone"
                      type="tel"
                      placeholder="您的联系电话"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block text-sm font-bold text-gray-700"
                      htmlFor="message"
                    >
                      咨询内容
                    </label>
                    <textarea
                      className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                      id="message"
                      rows={4}
                      placeholder="请描述您的需求（如：课程方案咨询、产品采购、科研合作等）"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button xl>提交咨询</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>

    <Footer />
  </div>
);

export default Contact;
