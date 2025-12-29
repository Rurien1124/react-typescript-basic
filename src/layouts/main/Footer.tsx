import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <FooterText>2025 Rurien1124. All rights reserved.</FooterText>
      <div>
        <SocialMediaLink to='/'>Facebook</SocialMediaLink>
        <SocialMediaLink to='/'>Twitter</SocialMediaLink>
      </div>
    </Container>
  );
};
