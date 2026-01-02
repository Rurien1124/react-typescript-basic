import React from 'react';
import { ContainerHello, Hello } from '../../examples/props/Hello';
import { Message } from '../../examples/state/Message';
import { Counter } from '../../examples/state/Counter';
import { WithoutContext } from '../../examples/context/without/WithoutContext';
import { WithContext } from '../../examples/context/with/WithContext';
import { TodoCompoment } from '../../examples/context/with/TodoCompoment';
import { HomeButton } from '../../examples/router/Navigate';
import { PhotoCards } from '../../examples/fetch/Fetch';
import { Jobs } from '../../examples/axios/Axios';
import { LocalStorageCounter } from '../../examples/storage/LocalStorageCounter';

export const ExamplesPropsPage = () => {
  return (
    <div>
      {/* Props */}
      <Hello name={'Rurien'} color={'red'} />
      <Hello name={'Rurien'} />
      <ContainerHello name={'Rurien'} color={'green'} />
      <ContainerHello name={'Rurien'} />
    </div>
  );
};

export const ExamplesStatePage = () => {
  return (
    <div>
      {/* State */}
      <Message />
      <Counter />
    </div>
  );
};

export const ExamplesContextPage = () => {
  return (
    <div>
      {/* Without context */}
      <WithoutContext />
      <p />

      {/* With context */}
      <WithContext />
      <TodoCompoment />
    </div>
  );
};

export const ExamplesNavigationPage = () => {
  return (
    <div>
      {/* Navigate */}
      <HomeButton />
    </div>
  );
};

export const PhotoCardsPage = () => {
  return (
    <div>
      <PhotoCards />
    </div>
  );
};

export const AxiosPage = () => {
  return (
    <div>
      <Jobs />
    </div>
  );
};

export const LocalStoragePage = () => {
  return (
    <div>
      <LocalStorageCounter />
    </div>
  );
};
