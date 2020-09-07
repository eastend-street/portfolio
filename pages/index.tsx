import React from 'react';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import About from 'components/About';
import Works from 'components/Works';

const Home: React.FC = () => (
  <Layout>
    <Hero />
    <About />
    <Works />
  </Layout>
);

export default Home;
