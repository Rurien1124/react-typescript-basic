import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeButton = () => {
  const navigator = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const goHome = () => {
    navigator('/');
    scrollToTop();
  };

  return <button onClick={goHome}>Go home</button>;
};
