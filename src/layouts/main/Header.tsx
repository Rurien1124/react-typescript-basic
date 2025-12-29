import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src='https://avatars.githubusercontent.com/u/89754008' />
      <Nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/example'>Example</NavLink>
        <NavLink to='https://github.com/Rurien1124'>GitHub</NavLink>
      </Nav>
    </Container>
  );
};
