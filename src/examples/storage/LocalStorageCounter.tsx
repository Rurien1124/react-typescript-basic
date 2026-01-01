import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const COUNT_KEY = 'count' as const;

export const LocalStorageCounter = () => {
  // Strict mode 설정 시, 개발 환경에서 최초 초기화가 2번 동작하기 때문에 바로 스토리지에서 가져와서 초기화
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(COUNT_KEY);
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(COUNT_KEY, count.toString());
  }, [count]);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const init = () => {
    setCount(0);
  };

  return (
    <Container>
      <Title>Current count: {count}</Title>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={init}>X</button>
    </Container>
  );
};
