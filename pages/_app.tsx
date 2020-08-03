import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/theme";

import "styles/fonts.css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => (
  <Theme>
    <GlobalStyle />
    <Component {...pageProps} />
  </Theme>
);

export default MyApp;
