import React, { useEffect, useState } from 'react';

import mockPostData from '../../mock/post-data.json';
import { BlogPost } from '../../examples/useeffect/BlogPost';

interface PostProps {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

export const BlogPosts = () => {
  const [posts, setPosts] = useState<ReadonlyArray<PostProps>>([]);

  console.log(mockPostData);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPostData);
    }, 1000);
  }, []); // 렌더링 시 최초 1번 초기화

  return (
    <>
      {posts.map(({ id, title, body }: PostProps) => (
        <BlogPost key={id} title={title} body={body} />
      ))}
    </>
  );
};
