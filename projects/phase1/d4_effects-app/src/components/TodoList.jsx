import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  if (!todos?.length) return <p>No items.</p>;
  return (
    <ul className="list">
      {todos.map((t) => (
        <TodoItem key={t.id} title={t.title} completed={t.completed} />
      ))}
    </ul>
  );
}