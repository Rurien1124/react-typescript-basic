import React from 'react';
import { ContainerHello } from '../../props/Hello';

interface Props {
  value: string;
}

export const GrandChild = ({ value }: Props) => {
  return <ContainerHello name={value} />;
};
