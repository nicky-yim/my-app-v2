import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import styled from 'styled-components';

import TextField from './elements/textField';
import { sizes, colors, Section, SectionHeading } from '../styles/globalStyles';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: ${sizes.md}px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  max-width: 35%;

  @media (max-width: ${sizes.md}px) {
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 1.25em;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${colors.primary};
  margin-right: 0.75em;

  :after {
    content: none;
  }
`;

const Form = styled.div`
  max-width: 65%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  padding-left: 3em;

  @media (max-width: ${sizes.md}px) {
    max-width: 100%;
    padding-left: 0;
  }
`;

const Contact = () => {
  const { mdx, site } = useStaticQuery(graphql`
    query {
      mdx: file(relativePath: { eq: "contact.mdx" }) {
        childMdx {
          body
        }
      }
      site {
        siteMetadata {
          email
          github
          linkedin
        }
      }
    }
  `);

  const components = {
    p: Paragraph,
  };

  return (
    <Section>
      <SectionHeading>Get in touch with me</SectionHeading>
      <Wrapper>
        <Container>
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.childMdx.body}</MDXRenderer>
          </MDXProvider>
          <IconContainer>
            <Icon
              href={`mailto:${site.siteMetadata?.email}`}
              alt="Email"
              aria-label="Email"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiMail />
            </Icon>
            <Icon
              href={site.siteMetadata?.github}
              alt="Github"
              aria-label="Github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiGithub />
            </Icon>
            <Icon
              href={site.siteMetadata?.linkedin}
              alt="LinkedIn"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </Icon>
          </IconContainer>
        </Container>
        <Form>
          <TextField />
          <TextField />
          <TextField />
        </Form>
      </Wrapper>
    </Section>
  );
};

export default Contact;
