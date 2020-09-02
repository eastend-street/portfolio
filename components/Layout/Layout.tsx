import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

import { SITE } from "constants/info";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href={`${SITE.url}/favicon.ico`} />
      <meta name="description" content={SITE.description} />
      <meta name="og:title" content={SITE.title} />
      <meta property="og:url" content={SITE.url} />
      <meta property="og:image" content={`${SITE.url}/${SITE.imagePath}`} />
      <meta property="og:description" content={SITE.ogDescription} />
      <meta property="og:site_name" content={SITE.title} />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>{SITE.title}</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
