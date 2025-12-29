import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.aside`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

const MenuLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 10px;

  &:hover {
    color: #4285f4;
  }

  &.active {
    font-weight: bold;
    font-size: 12px;
  }
`;
const SubMenu = styled.ul`
  list-style: none;
  padding-left: 12px;
  margin-top: 6px;
`;

const SubMenuItem = styled.li`
  margin-bottom: 6px;
`;

const SubMenuLink = styled(NavLink)`
  color: #666;
  text-decoration: none;
  font-size: 9px;

  &:hover {
    color: #4285f4;
  }

  &.active {
    font-weight: bold;
    color: #4285f4;
  }
`;

const Info = styled.div`
  margin-top: 30px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
`;

const InfoText = styled.a`
  font-size: 10px;
`;

interface SubMenuContentProps {
  to: string;
  text: string;
}

const SubMenuContent = ({ to, text }: SubMenuContentProps) => {
  return (
    <SubMenuItem>
      <SubMenuLink to={to}>{text}</SubMenuLink>
    </SubMenuItem>
  );
};

export const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink to='/' end>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/examples'>Examples</MenuLink>
          <SubMenu>
            <SubMenuContent to='/examples/props' text='Props' />
            <SubMenuContent to='/examples/state' text='State' />
            <SubMenuContent to='/examples/context' text='Context' />
            <SubMenuContent to='/examples/navigation' text='Navigation' />
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <MenuLink to='https://github.com/Rurien1124'>GitHub</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Info title</InfoTitle>
        <InfoText>Info text</InfoText>
      </Info>
    </Container>
  );
};
