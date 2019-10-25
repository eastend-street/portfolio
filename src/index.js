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

ReactDOM.render(
  <>
    <Helmet titleTemplate="%s | Jun Yamada - Front-End Web Developer" defaultTitle="Jun Yamada - Front-End Web Developer">
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
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
