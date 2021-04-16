import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Portfolio from '../components/portfolio';
import About from '../components/about';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Portfolio />
    <About />
    <Contact />
  </Layout>
);

export default IndexPage;
