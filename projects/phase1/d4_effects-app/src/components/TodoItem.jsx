export default function TodoItem({ title, completed }) {
  return (
    <li className="item">
      <span>{completed ? "✅" : "⬜"}</span>
      <span>{title}</span>
    </li>
  );
}