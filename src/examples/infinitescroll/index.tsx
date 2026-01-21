import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { DogProps, getDogsList } from '../../service/DogsService';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: left;
  padding: 20px;
`;

const DogPhotoCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
`;

const DogPhoto = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const SpinnerDiv = styled.div`
  padding: 24px;
  text-align: 'center';
`;

const SpinnerStyle = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid #ddd;
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => (
  <SpinnerDiv>
    <SpinnerStyle className='spinner' />
  </SpinnerDiv>
);

export const DogPhotoCards = () => {
  const limit = 10;

  const [page, setPage] = useState(0);
  const [photos, setPhotos] = useState<ReadonlyArray<DogProps>>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);
  const initializeRef = useRef(false);

  useEffect(() => {
    if (!initializeRef.current) {
      initializeRef.current = true;
      return;
    }
    getDogsList(page, limit, setPhotos, loadingRef);
  }, [page]);

  useEffect(() => {
    if (!bottomRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!loadingRef.current && entry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      {photos.map(({ id, url }: DogProps) => (
        <DogPhotoCard key={id}>
          <Spinner />
          <DogPhoto
            src={url}
            loading='lazy'
            onLoad={(event) => {
              event.currentTarget.previousSibling?.remove();
            }}
            onError={(error) => {
              error.currentTarget.onerror = null;
              error.currentTarget.src =
                'https://dummyimage.com/200x200/000/fff';
              error.currentTarget.previousSibling?.remove();
            }}
          />
        </DogPhotoCard>
      ))}
      <div ref={bottomRef} />
    </Container>
  );
};
