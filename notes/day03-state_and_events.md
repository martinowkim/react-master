# Day 3 – State and Events

## Setup
```bash
cd react-master/projects/phase1
npm create vite@latest d3_counter-app -- --template react
cd d3_counter-app
npm install
npm run dev

```
## 1. Core Concepts
- useState creates local reactive state inside a component.
- Events call setters to update state.
- Controlled inputs bind UI to state with value/onChange.
- React batches updates and rerenders after state changes.

## 2. Example

**Counter.jsx**
```jsx
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
```
**NameEcho.jsx**
```jsx
import { useState } from "react";
export default function NameEcho() {
  const [name, setName] = useState("");
  function handleChange(e) { setName(e.target.value); }
  return (
    <div className="card">
      <h3>Controlled Input</h3>
      <input placeholder="Type your name" value={name} onChange={handleChange} />
      <p>Echo: {name || "(empty)"}</p>
    </div>
  );
}
```
**App.jsx**
```jsx
import Counter from "./Counter";
import NameEcho from "./NameEcho";
export default function App() {
  return (
    <div className="container">
      <h1>Day 3 – State and Events</h1>
      <div className="grid">
        <Counter step={1} />
        <Counter step={5} />
        <NameEcho />
      </div>
    </div>
  );
}
```
**index.css**
```css
:root { color-scheme: dark; }
body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; }
.container { max-width: 1000px; }
.grid { display: flex; gap: 1rem; flex-wrap: wrap; }
.card { border: 1px solid #555; border-radius: 8px; padding: 1rem; min-width: 240px; }
.row { display: flex; gap: .5rem; }
button { padding: .5rem .75rem; }
input { padding: .5rem; width: 100%; box-sizing: border-box; }
```
## 3. Assignment
  1. LimitedCounter.jsx
  - Props: min=0, max=10, step=1.
  - Buttons -, +, Reset.
  - Disable - at min, disable + at max.
  - Show a small status line: “At minimum”, “At maximum”, or empty.
  2. LoginForm.jsx
  - Two controlled inputs: email, password.
  - Submit button disabled until both fields non-empty and email includes @.
  - On submit, prevent default and show “Submitted: {email}” below.
  - Clear only the password after submit.
  3. Render both in App.jsx. Keep the existing examples.
  4. Commit:
  ```bash
  git add .
  git commit -m "Day 3: state and events (counters + controlled form)"

  ```
## 4. Reflection
- State belongs where it is used. Lift only when multiple components need it.
- Always render from state; never read DOM to get current values.
- Keep event handlers small and pure except for calling setters.
