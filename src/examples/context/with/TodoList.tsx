import React, { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from './TodoContext';

export const TodoList = () => {
  const value = useContext(TodoContext);

  return (
    <ul>
      {value?.state.todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
