import { useState } from "react";
function LimitedCounter( {min=0, max=10, step=1, initial = 0} ) {
  const [count, setCount] = useState(() => Math.min(max, Math.max(min, initial)));

  const inc = () => setCount(c => Math.min(max, c + step));
  const dec = () => setCount(c => Math.max(min, c - step));
  const reset = () => setCount(Math.min(max, Math.max(min, initial)));

  return (
    <div className="card">
      <h3>Limited Counter</h3>
      <p>value: {count}</p>
      <div className="row">
        <button onClick={ dec } disabled={count <= min}>-</button>
        <button onClick={ inc } disabled={count >= max}>+</button>
        <button onClick={ reset }>Reset</button>
      </div>
      { count <= min && <p>At minimum</p>}
      { count >= max && <p>At maximum</p>}
    </div>
  )
}

export default LimitedCounter;