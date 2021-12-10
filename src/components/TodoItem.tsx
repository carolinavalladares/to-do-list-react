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
    <li>
      <p>{props.todo.text}</p>
      <button onClick={toggleDone}>Check</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
