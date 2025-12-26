import React from 'react';
import styled from '@emotion/styled';

const Container = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
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
        <SocialMediaLink href='#'>Facebook</SocialMediaLink>
        <SocialMediaLink href='#'>Twitter</SocialMediaLink>
      </div>
    </Container>
  );
};
