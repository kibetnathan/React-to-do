// App.jsx
import { useTodos } from "./TodoContext";

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const handleAdd = (e) => {
    e.preventDefault();
    const text = e.target.todo.value;
    if (text.trim()) addTodo(text);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input name="todo" placeholder="Add a task..." />
        <button>Add</button>
      </form>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span
              onClick={() => toggleTodo(t.id)}
              style={{ textDecoration: t.done ? "line-through" : "none" }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
