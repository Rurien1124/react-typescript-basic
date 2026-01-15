import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../examples/common/Menu';

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
        {MENU_ITEMS.map((menu) => (
          <HeaderLink to={menu.link} key={menu.title}>
            {menu.title}
          </HeaderLink>
        ))}
      </Nav>
    </Container>
  );
};
