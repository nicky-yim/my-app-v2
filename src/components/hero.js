import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Link from './elements/link';
import { colors, sizes, Section } from '../styles/globalStyles';

const Greeting = styled.h2`
  font-size: 2em;
  font-weight: 600;

  @media (max-width: ${sizes.md}px) {
    font-size: 1.5em;
  }
`;

const Heading = styled.h1`
  color: ${colors.highlight};
  font-size: 2.5em;
  font-weight: 600;

  @media (max-width: ${sizes.md}px) {
    font-size: 2.25em;
  }

  @media (max-width: ${sizes.sm}px) {
    font-size: 2em;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5em;

  @media (max-width: ${sizes.md}px) {
    font-size: 1.25em;
  }
`;

const Hero = () => {
  const { mdx } = useStaticQuery(graphql`
    query {
      mdx: file(relativePath: { eq: "hero.mdx" }) {
        childMdx {
          body
        }
      }
    }
  `);

  const components = {
    h1: Heading,
    h2: Greeting,
    a: Link,
    p: Paragraph,
  };

  return (
    <Section>
      <Fade down>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </Fade>
    </Section>
  );
};

export default Hero;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
