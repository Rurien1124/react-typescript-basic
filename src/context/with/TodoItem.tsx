import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { TodoContext } from './TodoContext';

const LiStyle = styled.li``;

interface TextSpanProps {
  readonly done: boolean;
}

const TextSpanStyle = styled.span<TextSpanProps>`
  color: ${(props) => (props.done ? '#999999' : 'inherit')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'inherit')};
  cursor: ${(props) => (props.done ? 'pointer' : 'inherit')};
`;

const RemoveSpanStyle = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

interface TodoItemProps {
  todo: {
    id: number;
    todo: string;
    done: boolean;
  };
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const value = useContext(TodoContext);

  const onClickSpan = () => {
    value?.actions.done(todo.id);
  };

  const onClickRemove = () => {
    value?.actions.delete(todo.id);
  };

  return (
    <LiStyle>
      <TextSpanStyle done={todo.done} onClick={onClickSpan}>
        {todo.todo}
      </TextSpanStyle>
      <RemoveSpanStyle onClick={onClickRemove}>(X)</RemoveSpanStyle>
    </LiStyle>
  );
};
