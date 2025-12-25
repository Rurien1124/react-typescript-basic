import React, { useContext } from 'react';
import { CountContext } from './WithContextProvider';

interface Props {
  type: CounterButtonType;
}

enum CounterButtonType {
  PLUS = '+',
  MINUS = '-',
}

const ContextCounterButton = ({ type }: Props) => {
  const { increase, decrease } = useContext(CountContext);

  const action = type === CounterButtonType.PLUS ? increase : decrease;

  return <button onClick={action}>{type}</button>;
};

export { ContextCounterButton, CounterButtonType };
