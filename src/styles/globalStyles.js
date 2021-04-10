import { createGlobalStyle } from 'styled-components';

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

    :hover {
      color: ${colors.purple};
    }

    :after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      border-bottom: 1px solid ${colors.secondary};
    }
  }
`;

export { colors, sizes, fonts, GlobalStyles };
