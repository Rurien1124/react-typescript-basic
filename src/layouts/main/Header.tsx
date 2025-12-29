import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const HeaderLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 10px;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src='https://avatars.githubusercontent.com/u/89754008' />
      <Nav>
        <HeaderLink to='/' end>
          Home
        </HeaderLink>
        <HeaderLink to='/examples'>Examples</HeaderLink>
        <HeaderLink to='https://github.com/Rurien1124'>GitHub</HeaderLink>
      </Nav>
    </Container>
  );
};
