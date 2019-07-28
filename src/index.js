import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import JotDown from "./components/JotDown/JotDown";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import SlackBot from "./components/SlackBot/SlackBot";
import NotFound from "./components/NotFound/NotFound";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import 'react-app-polyfill/ie11';
// import ogmImage from "./static/images/profile.jpg"

// console.log(ogmImage);

ReactDOM.render(
  <React.Fragment>
    <Helmet titleTemplate="%s - Jun's Portfolio" defaultTitle="Jun's Portfolio">
      {/* <meta
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
      <meta property="og:locale" content="en_CA" /> */}
    </Helmet>
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
        <Route path="/work/jotdown" exact component={JotDown} />
        <Route path="/work/marketplace" exact component={MarketPlace} />
        <Route path="/work/slack-bot" exact component={SlackBot} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
