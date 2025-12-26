import React from 'react';
import styled from '@emotion/styled';

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

const MenuLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 10px;

  &:hover {
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

export const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink href='#'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='https://github.com/Rurien1124'>GitHub</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Info title</InfoTitle>
        <InfoText>Info text</InfoText>
      </Info>
    </Container>
  );
};
