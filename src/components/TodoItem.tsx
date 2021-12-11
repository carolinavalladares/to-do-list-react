import React, { useState } from "react";

interface ITodo {
  text: string;
  id: number;
}

interface Props {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem = (props: Props) => {
  const [done, setDone] = useState(false);

  const handleDelete = () => {
    props.setTodos(
      props.todos.filter((item) => {
        return item.id !== props.todo.id;
      })
    );
  };

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <li className={`todo-list__item ${done ? "done" : ""}`}>
      <p className={`todo-list__item-text ${done ? "done" : ""}`}>
        {props.todo.text}
      </p>
      <button
        className={`todo-list__item-check-btn ${done ? "done" : ""}`}
        onClick={toggleDone}
        title="check"
      >
        &#x2713;
      </button>
      <button
        className="todo-list__item-delete-btn"
        onClick={handleDelete}
        title="delete"
      ></button>
    </li>
  );
};

export default TodoItem;
