import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import "react-app-polyfill/ie11";

import Home from "./components/Home/Home";
import JotDown from "./components/JotDown/JotDown";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import SlackBot from "./components/SlackBot/SlackBot";
import NotFound from "./components/NotFound/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: #4e4e4e;
    background-color: #f9f2ec;
  }
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Helmet
        titleTemplate="%s | Jun Yamada - Front-End Web Developer"
        defaultTitle="Jun Yamada - Front-End Web Developer"
      ></Helmet>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route
          path={process.env.PUBLIC_URL + "/work/jotdown"}
          exact
          component={JotDown}
        />
        <Route
          path={process.env.PUBLIC_URL + "/work/marketplace"}
          exact
          component={MarketPlace}
        />
        <Route
          path={process.env.PUBLIC_URL + "/work/slack-bot"}
          exact
          component={SlackBot}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
