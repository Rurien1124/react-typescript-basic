import React from 'react';
import styled from '@emotion/styled';
import { NumStore, NumRootState, NumDispatch, NumSlice } from './NumStore';
import { Provider, useDispatch, useSelector } from 'react-redux';

const Container = styled.div``;
const Button = styled.button``;
const Label = styled.label``;

export const ReduxToolkitComponents = () => {
  return (
    <Provider store={NumStore}>
      <Counter />
    </Provider>
  );
};

const Counter = () => {
  const dispatch = useDispatch<NumDispatch>();
  const num = useSelector((state: NumRootState) => state.numSlice.num);

  const increase = () => {
    dispatch(NumSlice.actions.increase(2));
  };

  return (
    <Container>
      <Button onClick={increase}>+</Button>
      <Label>{num}</Label>
    </Container>
  );
};
