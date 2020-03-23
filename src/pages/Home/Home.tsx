import React from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import Works from "components/Works/Works";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
      <Footer />
    </>
  );
};

export default Home;
