import React from 'react';
import styled from 'styled-components';

import { sizes, colors } from '../../styles/globalStyles';

const StyledTextField = styled.input`
  margin: 0 1em;
  padding: 6px 12px;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.primary};
  background-color: ${colors.background};
  color: ${colors.highlight};
  font-size: 1em;
  outline: none !important;
  transition: all 0.2s ease-in-out;
  width: 100%;

  ::placeholder {
    color: ${colors.secondary};
  }

  :focus,
  :active {
    color: ${colors.blueHighlight};
    border-color: ${colors.blueHighlight};
  }
`;

const TextField = () => <StyledTextField type="text" placeholder="test" />;

export default TextField;
