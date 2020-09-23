import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_NAME = 'Frontend Indonesia';
const SITE_DESCRIPTION = 'Komunitas Frontend Developer di Indonesia';
const SITE_URL = 'https://feid.dev';

export default function SEO() {
  const router = useRouter();

  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="Home" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@feid_dev" />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:title" content={SITE_NAME} />
      <link rel="canonical" href={`${SITE_URL}${router.pathname}`} />
    </Head>
  );
}
