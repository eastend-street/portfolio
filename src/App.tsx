import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import "react-app-polyfill/ie11";

import GlobalStyle from "styles/GlobalStyle";
import Theme from "styles/theme";

import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";

import JotDown from "components/JotDown/JotDown";
import Codeo from "components/Codeo/Codeo";
import MarketPlace from "components/MarketPlace/MarketPlace";
import SlackBot from "components/SlackBot/SlackBot";
import Brickhouse from "components/Brickhouse/Brickhouse";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Theme>
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
      </Theme>
    </BrowserRouter>
  );
};

export default App;
