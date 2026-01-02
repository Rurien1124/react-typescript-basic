import React from 'react';
import styled from '@emotion/styled';

const BaseContainer = styled.div`
  border: 5px solid #000;
  margin: 10px;
`;

const ParentContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ChildContainer = styled(BaseContainer)``;

export const ReduxComponents = () => {
  return (
    <ParentContainer>
      <LeftChild01></LeftChild01>
      <RightChild01></RightChild01>
    </ParentContainer>
  );
};

const LeftChild01 = () => {
  return (
    <ChildContainer>
      <LeftChild02></LeftChild02>
    </ChildContainer>
  );
};

const LeftChild02 = () => {
  return (
    <ChildContainer>
      <LeftChild03></LeftChild03>
    </ChildContainer>
  );
};

const LeftChild03 = () => {
  return <ChildContainer></ChildContainer>;
};

const RightChild01 = () => {
  return (
    <ChildContainer>
      <RightChild02></RightChild02>
    </ChildContainer>
  );
};

const RightChild02 = () => {
  return (
    <ChildContainer>
      <RightChild03></RightChild03>
    </ChildContainer>
  );
};

const RightChild03 = () => {
  return <ChildContainer></ChildContainer>;
};
