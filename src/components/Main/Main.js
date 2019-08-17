import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Title from "../Title/Title";
import About from "../About/About";
import Works from "../Works/Works";
import WorkExperience from "../WorkExperience/WorkExperience";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Title />
        <About />
        <Works />
        <WorkExperience />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
