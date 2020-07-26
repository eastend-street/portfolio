import React from "react";
import App from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/theme";

import "styles/fonts.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    );
  }
}
