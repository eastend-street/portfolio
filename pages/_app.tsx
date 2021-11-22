import React, { useEffect } from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

import GlobalStyle from 'styles/GlobalStyle';
import Theme from 'styles/theme';

import 'styles/fonts.css';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P3NGSH3' });
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
};

export default MyApp;
