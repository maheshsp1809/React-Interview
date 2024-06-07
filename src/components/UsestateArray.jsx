import { useState, useEffect } from "react";

function fetchTodos({ setTodos }) {
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((res) => setTodos(res.todos));
}
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos(setTodos);
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
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
