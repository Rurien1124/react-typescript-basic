import React from 'react';

import { CountProvider } from './WithContextProvider';
import {
  ContextCounterButton,
  CounterButtonType,
} from './ContextCounterButton';
import { ContextCounterLabel } from './ContextCounterLabel';

export const WithContext = () => {
  return (
    <CountProvider>
      <ContextCounterButton type={CounterButtonType.PLUS} />
      <ContextCounterLabel />
      <ContextCounterButton type={CounterButtonType.MINUS} />
    </CountProvider>
  );
};
