import React from 'react';
import styled from '@emotion/styled';
import { NumDispatch, NumRootState, NumSlice, NumStore } from './NumStore';
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
    dispatch(NumSlice.actions.increase({ step: 2, min: -10, max: 10 }));
  };

  const decrease = () => {
    dispatch(NumSlice.actions.decrease({ step: 2, min: -10, max: 10 }));
  };

  return (
    <Container>
      <Button onClick={increase}>+</Button>
      <Label>{num}</Label>
      <Button onClick={decrease}>-</Button>
    </Container>
  );
};
