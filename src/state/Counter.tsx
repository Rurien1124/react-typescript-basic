import React, { useState } from 'react';
import { CounterButton } from '../props/CounterButton';
import { CounterLabel } from '../props/CounterLabel';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CounterButton onClick={increase} text={'+'} />
      <CounterLabel count={count} />
      <CounterButton onClick={decrease} text={'-'} />
    </div>
  );
};
