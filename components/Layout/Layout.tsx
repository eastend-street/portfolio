import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { SITE } from 'constants/info';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={SITE.appleIconPath} sizes="180x180" />
      <link
        rel="icon"
        type="image/png"
        href={SITE.androidIconPath}
        sizes="192x192"
      />
      <meta name="description" content={SITE.description} />
      <meta name="og:title" content={SITE.title} />
      <meta property="og:url" content={SITE.url} />
      <meta property="og:image" content={SITE.ogpImagePath} />
      <meta property="og:description" content={SITE.ogDescription} />
      <meta property="og:site_name" content={SITE.title} />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="google-site-verification"
        content="m3lF9Sv6ous6Vc_uXEn4xUQcT0pPqq7I4hjK7XgkE2M"
      />
      <title>{SITE.title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
