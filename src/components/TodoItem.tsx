import React from "react";

interface ITodo {
  text: string;
  id: number;
  complete: boolean;
}

interface Props {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem = (props: Props) => {
  const handleDelete = () => {
    props.setTodos(
      props.todos.filter((item) => {
        return item.id !== props.todo.id;
      })
    );
  };

  const toggleDone = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <li className={`todo-list__item ${props.todo.complete ? "done" : ""}`}>
      <p
        className={`todo-list__item-text ${props.todo.complete ? "done" : ""}`}
      >
        {props.todo.text}
      </p>
      <button
        className={`todo-list__item-check-btn ${
          props.todo.complete ? "done" : ""
        }`}
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
