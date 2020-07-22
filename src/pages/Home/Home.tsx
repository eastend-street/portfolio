import React, { FC } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Hero from "components/Hero";
import About from "components/About";
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
