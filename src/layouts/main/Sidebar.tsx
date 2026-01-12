import React, { useState } from 'react';
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

const MenuButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuText = styled.div`
  color: #333;
  text-decoration: none;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    color: #4285f4;
  }

  &.active {
    font-weight: bold;
    font-size: 12px;
  }
`;

const Chevron = styled.span<{ open: boolean }>`
  font-size: 10px;
  transition: transform 0.2s ease;
  transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
`;

const SubMenu = styled.ul<{ open: boolean }>`
  list-style: none;
  padding-left: 12px;
  margin-top: 6px;
  display: ${({ open }) => (open ? 'block' : 'none')};
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

const MENU_KEY = {
  EXAMPLES: 'examples',
} as const;

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
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (key: string) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink to='/' end>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuButton>
            <MenuLink to='#' onClick={() => toggleMenu(MENU_KEY.EXAMPLES)}>
              Examples
            </MenuLink>
            <Chevron
              open={openMenu === MENU_KEY.EXAMPLES}
              onClick={() => toggleMenu(MENU_KEY.EXAMPLES)}
            ></Chevron>
          </MenuButton>
          <SubMenu open={openMenu === MENU_KEY.EXAMPLES}>
            <SubMenuContent to='/examples/props' text='Props' />
            <SubMenuContent to='/examples/state' text='State' />
            <SubMenuContent to='/examples/context' text='Context' />
            <SubMenuContent to='/examples/navigation' text='Navigation' />
            <SubMenuContent to='/examples/use-effect' text='UseEffect' />
            <SubMenuContent to='/examples/fetch' text='Fetch' />
            <SubMenuContent to='/examples/axios' text='Axios' />
            <SubMenuContent to='/examples/local-storage' text='LocalStorage' />
            <SubMenuContent to='/examples/react-redux' text='ReactRedux' />
            <SubMenuContent to='/examples/redux-toolkit' text='ReduxToolkit' />
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
