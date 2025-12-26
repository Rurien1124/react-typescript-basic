import React, { createContext, JSX, ReactNode, useState } from 'react';

type TodoListType = {
  id: number;
  todo: string;
  done: boolean;
};

type TodoListContextValueType = {
  state: {
    todoList: Array<TodoListType>;
  };
  actions: {
    add: (todo: string) => void;
    delete: (id: number) => void;
    done: (id: number) => void;
  };
};

interface Props {
  children: ReactNode;
}

export const TodoContext = createContext<TodoListContextValueType | undefined>(
  undefined
);

export const TodoContextProvider = (props: Props) => {
  const [todoList, setTodoList] = useState<Array<TodoListType>>([
    { id: 1, todo: 'Insert your todo list', done: false },
  ]);

  const addTodo = (todo: string) => {
    console.log('Add todo');

    setTodoList((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo,
        done: false,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    console.log('Delete todo');
    const filteredTodoList = todoList.filter(
      (item: TodoListType) => item.id !== id
    );
    setTodoList(filteredTodoList);
  };

  const doneTodo = (id: number) => {
    console.log('Done todo');
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const values: TodoListContextValueType = {
    state: {
      todoList,
    },
    actions: {
      add: addTodo,
      delete: deleteTodo,
      done: doneTodo,
    },
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};
