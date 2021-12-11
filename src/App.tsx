import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface ITodo {
  text: string;
  id: number;
  complete: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className="todo-list__wrapper">
      <h2 className="todo-list__title">To-Do List</h2>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
