import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../styles/globalStyles';

const N = styled.span`
  float: left;

  :before {
    content: '<';
    color: ${colors.secondary};
  }
`;

const YIM = styled.span`
  float: left;

  :after {
    content: ' />';
    color: ${colors.secondary};
  }
`;

const Icky = styled.span`
  float: left;
  opacity: 0;
  max-width: 0em;
  transition: all 0.4s ease-in-out;
`;

const LogoLink = styled.a`
  cursor: pointer;
  font-family: ${fonts.code};
  font-size: 1.8em;
  font-weight: 600;
  color: ${colors.blue};
  text-decoration: none;
  transition: all 0.4s ease-in-out;

  :hover {
    color: ${colors.blueHighlight};

    ${Icky} {
      max-width: 3em;
      opacity: 1;
    }
  }

  :after {
    content: none;
  }
`;

const Logo = () => (
  <LogoLink href="/">
    <N>N</N>
    <Icky>icky&nbsp;</Icky>
    <YIM>YIM</YIM>
  </LogoLink>
);

export default Logo;
