import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import JotDown from "./components/JotDown/JotDown";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import SlackBot from "./components/SlackBot/SlackBot";
import NotFound from "./components/NotFound/NotFound";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: #4e4e4e;
    background-color: #f9f2ec;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet
        titleTemplate="%s | Jun Yamada - Front-End Web Developer"
        defaultTitle="Jun Yamada - Front-End Web Developer"
      ></Helmet>
      <BrowserRouter>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
          <Route path="/work/jotdown" exact component={JotDown} />
          <Route path="/work/marketplace" exact component={MarketPlace} />
          <Route path="/work/slack-bot" exact component={SlackBot} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
