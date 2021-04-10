import React from 'react';
import styled from 'styled-components';
import { sizes } from '../styles/globalStyles';

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

const Footer = () => (
  <Container>
    <div>Nicky Yim © {new Date().getFullYear()}</div>
    <div>
      Built with
      {` `}
      <a
        href="https://www.gatsbyjs.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Gatsby
      </a>
      . Deployed via {` `}
      <a
        href="https://www.netlify.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Netlify
      </a>
      .
    </div>
  </Container>
);

export default Footer;
