import type { ReactNode } from 'react';

import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { Meta } from '../components/Meta';
import { Section } from '../components/Section';
import { AppConfig } from '../utils/AppConfig';

// Helper components (defined before use)
type ContactItemProps = {
  icon: ReactNode;
  title: string;
  content: ReactNode;
};

const ContactItem = ({ icon, title, content }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1 text-primary-500">{icon}</div>
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <div className="text-gray-400">{content}</div>
    </div>
  </div>
);

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
};

const FormField = ({
  id,
  label,
  placeholder,
  type = 'text',
}: FormFieldProps) => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-bold text-gray-200" htmlFor={id}>
      {label}
    </label>
    <input
      className="w-full rounded-lg border border-white/10 bg-dark-800/80 px-3 py-2 leading-tight text-gray-100 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

const LocationIcon = () => (
  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const WechatIcon = () => (
  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 01-9 9H5l-2 2V12a9 9 0 0118 0z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// Main page component
const Contact = () => (
  <Layout>
    <Meta
      title={`联系我们 - ${AppConfig.site_name}`}
      description="联系狗弟工作室获取产品报价、课程方案或技术支持。"
    />

    <Section>
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white">联系我们</h1>
          <p className="mt-4 text-xl text-gray-400">
            我们期待听到您的声音，为您提供最专业的教育科研无人机服务
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-white">联系方式</h2>

            <div className="space-y-6">
              <ContactItem
                icon={<LocationIcon />}
                title="公司地址"
                content="中国大连"
              />
              <ContactItem
                icon={<WechatIcon />}
                title="联系微信"
                content="liuxiaodi404mob"
              />
              <ContactItem
                icon={<EmailIcon />}
                title="电子邮箱"
                content={
                  <>
                    <p>contact@gd-drone.com (商务合作)</p>
                    <p>support@gd-drone.com (技术支持)</p>
                  </>
                }
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-white/10 bg-gray-800/50 p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-white">在线咨询</h2>
            <form>
              <FormField id="name" label="姓名" placeholder="您的姓名" />
              <FormField
                id="org"
                label="学校/机构"
                placeholder="您所在的学校或机构"
              />
              <FormField
                id="email"
                label="邮箱"
                type="email"
                placeholder="您的邮箱"
              />
              <FormField
                id="phone"
                label="电话"
                type="tel"
                placeholder="您的联系电话"
              />
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-gray-200"
                  htmlFor="message"
                >
                  咨询内容
                </label>
                <textarea
                  className="w-full rounded-lg border border-white/10 bg-dark-800/80 px-3 py-2 leading-tight text-gray-100 shadow-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  id="message"
                  rows={4}
                  placeholder="请描述您的需求（如：课程方案咨询、产品采购、科研合作等）"
                />
              </div>
              <Button xl type="submit">
                提交咨询
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;
