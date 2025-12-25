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
  const { actions } = useContext(CountContext);

  const action =
    type === CounterButtonType.PLUS ? actions.increase : actions.decrease;

  return <button onClick={action}>{type}</button>;
};

export { ContextCounterButton, CounterButtonType };
