import { useState } from "react";

export default function Counter({ step = 1 }) {
  const [count, setCount] = useState(0);

  function inc() { setCount(c => c + step); }
  function dec() { setCount(c => c - step); }
  function reset() { setCount(0); }

  return (
    <div className="card">
      <h3>Counter</h3>
      <p>Value: {count}</p>
      <div className="row">
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
