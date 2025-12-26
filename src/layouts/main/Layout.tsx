import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Main>{children}</Main>
      </Content>
      <Footer />
    </Container>
  );
};
