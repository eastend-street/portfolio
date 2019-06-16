import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import MemoMemo from "./components/MemoMemo/MemoMemo";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import NotFound from "./components/NotFound/NotFound";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Helmet titleTemplate="%s - Jun's Portfolio" defaultTitle="Jun's Portfolio">
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
      <meta property="og:site_name" content="Jun's Portfolio" />
      <meta property="og:locale" content="en_CA" />
    </Helmet>
    <Switch>
      <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
      <Route path="/work/memomemo" exact component={MemoMemo} />
      <Route path="/work/marketplace" exact component={MarketPlace} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
