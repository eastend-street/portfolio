import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Work from "./components/Work/Work";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={About} />
      {/* <Route path="/work" exact component={Work} /> */}
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
