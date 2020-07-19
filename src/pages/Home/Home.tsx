import React, { FC } from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import Works from "components/Works";

const Home: FC = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Works />
    <Footer />
  </>
);

export default Home;
