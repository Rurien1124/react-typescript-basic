import React, { createContext, JSX, useState } from 'react';

const CountContext = createContext({
  count: 0,
  increase: () => {},
  decrease: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

/** Count 컨텍스트 제공 */
const CountProvider = ({ children }: Props): JSX.Element => {
  const [count, setCount] = useState(0);

  const increase = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrease = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        increase,
        decrease,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
