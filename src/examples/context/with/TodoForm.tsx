import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const value = useContext(TodoContext);

  const onSubmit = (e: React.FormEvent) => {
    value?.actions.add(text);
    e.preventDefault();
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        placeholder='Insert todo'
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
