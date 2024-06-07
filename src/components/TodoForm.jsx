import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      const newTodo = {
        todo: todoText.trim(),
        completed: false,
        userId: Math.floor(Math.random() * 100) + 1, // Random user ID for demo
      };
      addTodo(newTodo);
      setTodoText(""); // Clear input field after adding todo
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <label htmlFor="todoInput" className="block mb-2">
        Todo:
      </label>
      <input
        type="text"
        id="todoInput"
        placeholder="Enter todo name"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
      >
        Add Todo
      </button>
    </form>
  );
}
