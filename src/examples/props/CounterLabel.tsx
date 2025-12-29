import React from 'react';
import styled from '@emotion/styled';

const CounterLabelStyle = styled.label``;

interface CounterLabelProps {
  count: number;
}

export const CounterLabel = ({ count }: CounterLabelProps) => {
  return <CounterLabelStyle>{count}</CounterLabelStyle>;
};
