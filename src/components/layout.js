/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import SEO from './seo';
import Footer from './footer';
import { sizes, GlobalStyles } from '../styles/globalStyles';

const Container = styled.div`
  width: 100%;
  max-width: ${sizes.xl}px;
  margin: 0 auto;
  padding-left: 2em;
  padding-right: 2em;
`;

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    <SEO />
    <main>{children}</main>
    <Footer />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
