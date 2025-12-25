import React from 'react';
import { ContainerHello, Hello } from './props/Hello';
import { Message } from './state/Message';
import { Counter } from './state/Counter';
import { WithoutContext } from './context/without/WithoutContext';

function App() {
  return (
    <div>
      {/* Props */}
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />

      {/* State */}
      <Message />
      <Counter />

      {/* Without context */}
      <WithoutContext />

      {/* With context */}
    </div>
  );
}

export default App;
