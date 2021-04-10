/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import { sizes, GlobalStyles } from '../styles/globalStyles';

const Container = styled.div`
  width: 100%;
  max-width: ${sizes.xl}px;
  margin: 0 auto;
  padding-left: 2em;
  padding-right: 2em;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
