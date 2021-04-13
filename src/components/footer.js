import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { colors, sizes } from '../styles/globalStyles';

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2em;
  margin-bottom: 2em;

  @media (max-width: ${sizes.md}px) {
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Footnote = styled.div`
  display: flex;
  align-items: center;
  justify-contents: space-around;

  p {
    margin: 0 auto;
  }

  @media (max-width: ${sizes.md}px) {
    flex-direction: column;
  }
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

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
          github
          linkedin
        }
      }
    }
  `);

  return (
    <Container>
      <IconContainer>
        <Icon
          href={`mailto:${site.siteMetadata?.email}`}
          alt="Email"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiMail />
        </Icon>
        <Icon
          href={site.siteMetadata?.github}
          alt="Github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub />
        </Icon>
        <Icon
          href={site.siteMetadata?.linkedin}
          alt="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </Icon>
      </IconContainer>
      <Footnote>
        <p>Nicky Yim © {new Date().getFullYear()}.&nbsp;</p>
        <p>
          Built with&nbsp;
          <a
            href="https://www.gatsbyjs.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gatsby
          </a>
          . Deployed via&nbsp;
          <a
            href="https://www.netlify.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Netlify
          </a>
          .
        </p>
      </Footnote>
    </Container>
  );
};

export default Footer;
