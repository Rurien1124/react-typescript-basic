import React from 'react';
import { Parent } from './Parent';

/**
 * Props 변수명이나 타입이 바뀌게 되면
 * 하위 컴포넌트의 값도 변경시켜줘야하는
 * props drilling 이 일어남
 */
interface Props {
  value: string;
}

export const GrandParent = ({ value }: Props) => {
  return <Parent value={value} />;
};
