import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import WorkDetail from "./components/WorkDetail/WorkDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Helmet
      titleTemplate="%s - Jun Yamada Portfolio"
      defaultTitle="Jun Yamada Portfolio"
    >
      <meta
        name="description"
        content="My name is Jun Yamada, a Japanese front-end developer based in Vancouver."
      />
      <meta
        property="og:url"
        content="https://eastend-street.github.io/portfolio/"
      />
      <meta property="og:title" content="Home - Jun Yamada Portfolio" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="My name is Jun Yamada, a Japanese front-end developer based in Vancouver."
      />
      <meta property="og:image" content="../src/static/images/profile.png" />
      <meta name="twitter:card" content="Summary Card" />
      {/* <meta name="twitter:site" content="@Twitter user name" /> */}
      <meta property="og:site_name" content="Jun Yamada Portfolio" />
      <meta property="og:locale" content="en_CA" />
    </Helmet>
    <Header />
    <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
    <Route
      path={process.env.PUBLIC_URL + "/work/"}
      exact
      component={WorkDetail}
    />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
