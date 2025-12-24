import React from 'react';
import { ContainerHello, Hello } from './props/Hello';
import { Message } from './state/Message';
import { Counter } from './state/Counter';

function App() {
  return (
    <div>
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />
      <Message />
      <Counter />
    </div>
  );
}

export default App;
