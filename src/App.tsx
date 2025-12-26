import React from 'react';
import { ContainerHello, Hello } from './props/Hello';
import { Message } from './state/Message';
import { Counter } from './state/Counter';
import { WithoutContext } from './context/without/WithoutContext';
import { WithContext } from './context/with/WithContext';
import { TodoCompoment } from './context/with/TodoCompoment';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Layout>
      {/* Props */}
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />
      <p />

      {/* State */}
      <Message />
      <Counter />
      <p />

      {/* Without context */}
      <WithoutContext />
      <p />

      {/* With context */}
      <WithContext />
      <TodoCompoment />
    </Layout>
  );
}

export default App;
