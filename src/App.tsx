import React from 'react';
import { ContainerHello, Hello } from './props/Hello';
import { Message } from './state/Message';

function App() {
  return (
    <div>
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />
      <Message />
    </div>
  );
}

export default App;
