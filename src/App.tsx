import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "react-app-polyfill/ie11";

// import GlobalStyle from "./theme/GlobalStyle";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home/Home";
import JotDown from "./components/JotDown/JotDown";
import Codeo from "./components/Codeo/Codeo";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import SlackBot from "./components/SlackBot/SlackBot";
import NotFound from "./components/NotFound/NotFound";
import Brickhouse from "./components/Brickhouse/Brickhouse";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: #000;
    background-color: #e3bda3;
    background-color: #EEE2D7;
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
          path={process.env.PUBLIC_URL + "/jotdown"}
          exact
          component={JotDown}
        />
        <Route
          path={process.env.PUBLIC_URL + "/codeo"}
          exact
          component={Codeo}
        />
        <Route
          path={process.env.PUBLIC_URL + "/brickhouse"}
          exact
          component={Brickhouse}
        />
        <Route
          path={process.env.PUBLIC_URL + "/marketplace"}
          exact
          component={MarketPlace}
        />
        <Route
          path={process.env.PUBLIC_URL + "/slack-bot"}
          exact
          component={SlackBot}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
