import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/globalStyles';

const StyledButton = styled.a`
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
  transition: all 0.3s ease-in-out;

  :after {
    content: none;
  }

  :hover {
    border-color: ${colors.blue};
    color: ${colors.blue};
  }
`;

const Button = ({ href, children }) => (
  <StyledButton href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </StyledButton>
);

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
