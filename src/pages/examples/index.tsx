import React from 'react';
import { ContainerHello, Hello } from '../../examples/props/Hello';
import { Message } from '../../examples/state/Message';
import { Counter } from '../../examples/state/Counter';
import { WithoutContext } from '../../examples/context/without/WithoutContext';
import { WithContext } from '../../examples/context/with/WithContext';
import { TodoCompoment } from '../../examples/context/with/TodoCompoment';
import { HomeButton } from '../../examples/router/Navigate';

export const ExamplesPage = () => {
  return (
    <div>
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

      {/* Navigate */}
      <HomeButton />
    </div>
  );
};
