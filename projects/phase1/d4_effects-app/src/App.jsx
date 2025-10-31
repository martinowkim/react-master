import { useState } from "react";
import useFetch from "./hooks/useFetch";
import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import PostsView from "./components/PostsView"
import WindowTracker from "./components/WindowTracker";
export default function App() {
  const [limit, setLimit] = useState(5);
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
  );

  return (
    <div className="container">
      <h1>Day 4 – Effects and Data Flow</h1>

      <div className="controls">
        <label>
          Limit:
          <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
            {[5, 10, 15].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="card">
        <h3>Todos (remote)</h3>
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: "tomato" }}>Error: {error}</p>}
        {!loading && !error && <TodoList todos={data} />}
      </div>

      <Clock />

      <PostsView />

      <WindowTracker />
    </div>
  );
}