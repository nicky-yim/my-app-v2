import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Portfolio />
    <About />
  </Layout>
);

export default IndexPage;
