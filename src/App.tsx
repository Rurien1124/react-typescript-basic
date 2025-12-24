import React from 'react';
import { ContainerHello, Hello } from './props/Hello';

function App() {
  return (
    <div>
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />
    </div>
  );
}

export default App;
