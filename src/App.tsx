import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface ITodo {
  text: string;
  id: number;
}

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <div className="todo-list__wrapper">
      <h2 className="todo-list__title">To-Do List</h2>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
