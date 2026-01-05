import React from 'react';
import styled from '@emotion/styled';
import {
  NUM_CONFIG,
  NumDispatch,
  NumRootState,
  NumSlice,
  NumStore,
} from './NumStore';
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

  const init = () => {
    dispatch(NumSlice.actions.init());
  };

  const increase = () => {
    dispatch(NumSlice.actions.increase(NUM_CONFIG));
  };

  const decrease = () => {
    dispatch(NumSlice.actions.decrease(NUM_CONFIG));
  };

  return (
    <Container>
      <Button onClick={increase}>+</Button>
      <Label onClick={init}>{num}</Label>
      <Button onClick={decrease}>-</Button>
    </Container>
  );
};
