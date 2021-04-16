import styled, { createGlobalStyle } from 'styled-components';

const colors = {
  primary: 'rgba(255, 255, 255, .7)',
  highlight: 'rgba(255, 255, 255, 1)',
  secondary: '#808080',
  background: '#1E1E1E',
  blue: '#569CD6',
  blueHighlight: '#4FC1FF',
  green: '#6A9955',
  purple: '#C586C0',
};

const sizes = {
  sm: 540,
  md: 720,
  lg: 960,
  xl: 1140,
};

const fonts = {
  text: `'Poppins', 'Helvetica', sans-serif`,
  code: `Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New`,
};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.background};
    color: ${colors.primary};
    margin: 0;
    font-weight: 200;
    font-family: ${fonts.text};
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${colors.highlight};
    transition: all 0.2s ease-in-out;

    :after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      height: 1px;
      background: ${colors.secondary};
      transition: all 0.2s ease-in-out;
    }

    :hover {
      color: ${colors.purple};
    }
  }
`;

const Section = styled.section`
  padding-top: 5vh;
  padding-bottom: 7.5vh;
`;

const SectionHeading = styled.h4`
  font-family: ${fonts.code};
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: ${sizes.md}px) {
    font-size: 1.1em;
  }

  :before {
    content: '<';
  }

  :after {
    content: ' />';
  }
`;

const StyledButton = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1em;
  padding: 6px 12px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.blueHighlight};
  color: ${colors.blueHighlight};
  background-color: ${colors.background};
  transition: all 0.2s ease-in-out;

  :after {
    content: none;
  }

  :hover {
    border-color: ${colors.blue};
    color: ${colors.blue};
    transform: scale(1.05);
  }
`;

export {
  colors,
  sizes,
  fonts,
  GlobalStyles,
  Section,
  SectionHeading,
  StyledButton,
};
