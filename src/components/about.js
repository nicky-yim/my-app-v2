import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Link from './elements/link';
import { sizes, Section, SectionHeading } from '../styles/globalStyles';

const Container = styled.div`
  max-width: 80%;

  @media (max-width: ${sizes.md}px) {
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  margin-top: 2em;
`;

const About = () => {
  const { mdx } = useStaticQuery(graphql`
    query {
      mdx: file(relativePath: { eq: "about.mdx" }) {
        childMdx {
          body
        }
      }
    }
  `);

  const components = {
    a: Link,
    p: Paragraph,
  };

  return (
    <Section>
      <Fade>
        <SectionHeading>More about myself</SectionHeading>
      </Fade>
      <Fade>
        <Container>
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </Fade>
    </Section>
  );
};

export default About;
