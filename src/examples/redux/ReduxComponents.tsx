import React from 'react';
import styled from '@emotion/styled';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NumActions, NumState, NumStore } from './NumReducer';

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

export const ReduxComponents = () => {
  return (
    <ParentContainer>
      <Provider store={NumStore}>
        <LeftChild01></LeftChild01>
        <RightChild01></RightChild01>
      </Provider>
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
  // State 에 저장된 값 가져오기 (useSelector)
  const getNumState = (numState: NumState) => {
    return numState.num;
  };

  const number = useSelector(getNumState);

  return (
    <ChildContainer>
      <h1>value: {number}</h1>
    </ChildContainer>
  );
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
  // State 에 저장된 값 변경하기 (useDispatch)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: NumActions.INCREASE });
  };
  const decrease = () => {
    dispatch({ type: NumActions.DECREASE });
  };

  return (
    <ChildContainer>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </ChildContainer>
  );
};
