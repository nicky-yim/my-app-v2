import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const StyledHeader = styled.header`
  height: 15vh;
  min-height: 180px;
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => (
  <StyledHeader>
    <Wrapper>
      <Logo />
    </Wrapper>
  </StyledHeader>
);

export default Header;
