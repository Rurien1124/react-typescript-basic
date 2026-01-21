import React, { useEffect, useState } from 'react';

import mockPostData from '../../mock/post-data.json';
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
import { ReduxComponents } from '../../examples/redux/ReduxComponents';
import { ReduxToolkitComponents } from '../../examples/reduxtoolkit/ReduxToolkitComponents';
import { DogPhotoCards } from '../../examples/infinitescroll/Dogs';
import { BlogPost } from '../../examples/useeffect/BlogPost';

interface BlogPostProps {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

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

export const BlogPosts = () => {
  const [posts, setPosts] = useState<ReadonlyArray<BlogPostProps>>([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPostData);
    }, 1000);
  }, []); // 렌더링 시 최초 1번 초기화

  return (
    <>
      {posts.map(({ id, title, body }: BlogPostProps) => (
        <BlogPost key={id} title={title} body={body} />
      ))}
    </>
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

export const ReduxComponentsPage = () => {
  return (
    <div>
      <ReduxComponents />
    </div>
  );
};

export const ReduxToolkitComponentsPage = () => {
  return (
    <div>
      <ReduxToolkitComponents />
    </div>
  );
};

export const InfiniteScrollPage = () => {
  return (
    <div>
      <DogPhotoCards />
    </div>
  );
};
