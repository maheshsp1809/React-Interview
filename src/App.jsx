import { useState, useEffect } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";

function fetchTodos(setTodos) {
  axios
    .get("https://dummyjson.com/todos")
    .then((response) => {
      setTodos(response.data.todos);
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
}

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.todo}
          </li>
        ))}
      </ol>
    </div>
  );
}
