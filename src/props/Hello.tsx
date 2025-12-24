import React from 'react';
import styled from '@emotion/styled';

interface HelloProps {
  name: string;
  color?: string;
}

interface ContainerHelloProps {
  color?: string;
}

const Container = styled.div<ContainerHelloProps>`
  color: ${(props) => props.color};
`;

export const Hello = ({ name, color = 'blue' }: HelloProps) => {
  return <div style={{ color }}>Hello {name}</div>;
};

export const ContainerHello = ({ name, color = 'blue' }: HelloProps) => {
  return <Container color={color}>Container Hello {name}</Container>;
};
