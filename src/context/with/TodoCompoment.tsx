import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoContextProvider } from './TodoContext';

export const TodoCompoment = () => {
  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoList />
    </TodoContextProvider>
  );
};
