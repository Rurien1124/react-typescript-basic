import React, { useContext } from 'react';
import { CountContext } from './WithContextProvider';

export const ContextCounterLabel = () => {
  const { count } = useContext(CountContext);
  return <label>{count}</label>;
};
