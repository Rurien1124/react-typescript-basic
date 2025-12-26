import styled from '@emotion/styled';
import React from 'react';

const Container = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

export const MainPage = () => {
  return (
    <Container>
      <Title>Main page</Title>
      <Content>
        <Card>
          <Image
            src='https://dummyimage.com/250x250/000/fff'
            alt='Placeholder Image'
          />
          <Text>Image text 01</Text>
        </Card>
        <Card>
          <Image
            src='https://dummyimage.com/250x250/ffffff/000000'
            alt='Placeholder Image'
          />
          <Text>Image text 02</Text>
        </Card>
      </Content>
    </Container>
  );
};
