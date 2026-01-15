import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../../examples/common/Menu';

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
/*
TODO
  - HeaderLink 선택 시 사이드바 펼침 필요
    => url 기준 open 매칭 필요?
 */
export const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const currentLocation = useLocation();
  console.log(currentLocation);

  const toggleMenu = (key: string) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <Container>
      <Menu>
        {MENU_ITEMS.map((menu) => (
          <MenuItem key={menu.title}>
            <MenuLink to={menu.link} onClick={() => toggleMenu(menu.title)}>
              {menu.title}
            </MenuLink>
            {menu.subMenu && (
              <Chevron
                open={openMenu === menu.title}
                onClick={() => toggleMenu(menu.title)}
              ></Chevron>
            )}

            {menu.subMenu && (
              <SubMenu
                open={
                  openMenu === menu.title ||
                  currentLocation.pathname.startsWith(menu.link)
                }
              >
                {menu.subMenu.map((subMenu) => (
                  <SubMenuContent
                    key={subMenu.title}
                    to={subMenu.link}
                    text={subMenu.title}
                  />
                ))}
              </SubMenu>
            )}
          </MenuItem>
        ))}

        <Info>
          <InfoTitle>Info title</InfoTitle>
          <InfoText>Info text</InfoText>
        </Info>
      </Menu>
    </Container>
  );
};
