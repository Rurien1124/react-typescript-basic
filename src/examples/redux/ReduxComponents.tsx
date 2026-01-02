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

const Button = styled.button``;

interface Props {
  num: number;
  increase: () => void;
}

export const ReduxComponents = () => {
  const [num, setNum] = React.useState(0);

  const increase = () => {
    setNum((prevNum) => prevNum + 1);
  };
  return (
    <ParentContainer>
      <LeftChild01 num={num} increase={increase}></LeftChild01>
      <RightChild01 num={num} increase={increase}></RightChild01>
    </ParentContainer>
  );
};

const LeftChild01 = (props: Props) => {
  return (
    <ChildContainer>
      <LeftChild02 {...props}></LeftChild02>
    </ChildContainer>
  );
};

const LeftChild02 = (props: Props) => {
  return (
    <ChildContainer>
      <LeftChild03 {...props}></LeftChild03>
    </ChildContainer>
  );
};

const LeftChild03 = ({ num }: Props) => {
  return (
    <ChildContainer>
      <h1>value: {num}</h1>
    </ChildContainer>
  );
};

const RightChild01 = (props: Props) => {
  return (
    <ChildContainer>
      <RightChild02 {...props}></RightChild02>
    </ChildContainer>
  );
};

const RightChild02 = (props: Props) => {
  return (
    <ChildContainer>
      <RightChild03 {...props}></RightChild03>
    </ChildContainer>
  );
};

const RightChild03 = ({ num, increase }: Props) => {
  return (
    <ChildContainer>
      <h1>value: {num}</h1>
      <Button onClick={increase}>+</Button>
    </ChildContainer>
  );
};
