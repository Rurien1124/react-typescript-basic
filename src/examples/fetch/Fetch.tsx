import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding: 20px;
`;

const PhotoCard = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 4px;
`;

interface PhotoProps {
  readonly albumId: number;
  readonly id: number;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
}

async function fetchPhotos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!response.ok) {
    throw new Error('Failed to fetch photos');
  }

  const data = await response.json();
  return data.slice(0, 8);
}

export const PhotoCards = () => {
  const [photos, setPhotos] = React.useState<PhotoProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data.slice(0, 8)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {photos.map(({ id, title, thumbnailUrl }: PhotoProps) => (
        <PhotoCard key={id}>
          <Photo
            src={thumbnailUrl}
            alt={title}
            onError={(error) => {
              error.currentTarget.onerror = null;
              error.currentTarget.src =
                'https://dummyimage.com/200x200/000/fff';
            }}
          />
          <Title>{title}</Title>
        </PhotoCard>
      ))}
    </Container>
  );
};
