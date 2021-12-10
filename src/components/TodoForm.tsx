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
    props.setTodos([
      ...props.todos,
      {
        text: text,
        id: Math.random(),
      },
    ]);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleInput} type="text" />
      <button>+</button>
    </form>
  );
};

export default TodoForm;
