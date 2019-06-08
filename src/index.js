import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import WorkDetail from './components/WorkDetail/WorkDetail'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Route path={process.env.PUBLIC_URL + '/'} exact component={Main} />
    <Route path={process.env.PUBLIC_URL + '/work/'} exact component={WorkDetail} />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
