import React, { useState } from "react";

interface ITodo {
  text: string;
  id: number;
}

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoForm = (props: Props) => {
  const [text, setText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text !== "") {
      props.setTodos([
        ...props.todos,
        {
          text: text,
          id: Math.random(),
        },
      ]);

      setText("");
    } else {
      alert("Nothing to submit... Please enter a to-do.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-list__form">
      <input value={text} onChange={handleInput} type="text" />
      <button title="add">+</button>
    </form>
  );
};

export default TodoForm;
