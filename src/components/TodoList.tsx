import React from "react";

import TodoItem from "./TodoItem";

interface ITodo {
  text: string;
  id: number;
  complete: boolean;
}

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filteredTodos: ITodo[];
}

const TodoList = (props: Props) => {
  return (
    <ul className="todo-list__list">
      {props.filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setTodos={props.setTodos}
          todos={props.todos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
