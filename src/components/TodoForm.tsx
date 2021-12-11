import React, { useState } from "react";

interface ITodo {
  text: string;
  id: number;
  complete: boolean;
}

interface Props {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filteredTodos: ITodo[];
  setFilteredTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
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
          complete: false,
        },
      ]);

      setText("");
    } else {
      alert("Nothing to submit... Please enter a to-do.");
    }
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      props.setFilteredTodos(props.todos);
    } else if (e.target.value === "complete") {
      props.setFilteredTodos(
        props.todos.filter((item) => {
          return item.complete === true;
        })
      );
    } else if (e.target.value === "incomplete") {
      props.setFilteredTodos(
        props.todos.filter((item) => {
          return item.complete === false;
        })
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-list__form">
      <div className="todo-list__form-input-wrapper">
        <input value={text} onChange={handleInput} type="text" />
        <button title="add">+</button>
      </div>
      <select className="todo-list__form-filter" onChange={handleFilter}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </form>
  );
};

export default TodoForm;
