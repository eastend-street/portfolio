import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Works from "../Works/Works";
import WorkExperience from "../WorkExperience/WorkExperience";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
      <WorkExperience />
      <Footer />
    </>
  );
};

export default Home;
