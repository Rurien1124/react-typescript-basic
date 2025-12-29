import React from 'react';
import styled from '@emotion/styled';

const CounterButtonStyle = styled.button``;

interface CounterButtonProps {
  text: string;
  onClick: () => void;
}

export const CounterButton = ({ text, onClick }: CounterButtonProps) => {
  return <CounterButtonStyle onClick={onClick}>{text}</CounterButtonStyle>;
};
