import React from 'react';

interface Props {
  text: string;
  code: number;
}

export const ErrorPage = ({ text, code }: Props) => {
  return (
    <div>
      {code}
      <br />
      {text}
    </div>
  );
};
