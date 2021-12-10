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
    <div>
      <h2>To-Do List</h2>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList />
    </div>
  );
};

export default App;
