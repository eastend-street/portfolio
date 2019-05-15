import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
