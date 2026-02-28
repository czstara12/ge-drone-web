import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type MetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = ({ title, description, canonical }: MetaProps) => {
  const router = useRouter();
  const url = canonical || `${AppConfig.siteUrl}${router.asPath}`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={AppConfig.keywords} />

      <title>{title}</title>

      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={AppConfig.locale} />
      <meta property="og:site_name" content={AppConfig.site_name} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export { Meta };
