# Day 1 – React Runtime & Environment Setup

## 1. Core Concepts

### React Purpose
React builds **declarative UIs** from **components**—functions returning JSX that describe UI state at any given time.  
The **Virtual DOM** allows efficient updates when state or props change.

### Key Ideas

| Concept | Definition | Example |
|----------|-------------|----------|
| **Component** | Pure function returning JSX | `function Button() { return <button>Click</button>; }` |
| **JSX** | Syntax sugar for `React.createElement()` | `<h1>Hello</h1>` → `React.createElement("h1", null, "Hello")` |
| **Virtual DOM** | In-memory tree React uses to diff and patch the real DOM | Speeds up re-rendering |
| **Root Rendering** | `ReactDOM.createRoot()` attaches React to a DOM node | in `main.jsx` |
| **Declarative Model** | You describe *what* UI should look like for given state | React handles *how* |

**Execution flow**
1. Browser loads `index.html`.  
2. `main.jsx` attaches React to `<div id="root">`.  
3. React renders `<App />` → component tree → DOM.

---

## 2. Environment Setup

### Requirements
- Node ≥ 20  
- npm or yarn/pnpm  

### Steps
```bash
npm create vite@latest greeting-app -- --template react
cd greeting-app
npm install
npm run dev
```

- Open the shown local URL (default http://localhost:5173).

### Project tree
```css
greeting-app/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── Greeting.jsx
└── package.json
```

## 3. Code Example

### Greeting.jsx
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
export default Greeting;
```
### App.jsx
```jsx
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Martino" />
    </div>
  );
}
export default App;
```
### main.jsx
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

### Run:
```bash
npm run dev
```
* Expected output &rarr; 'Hello, Martino'



## 4. Assignment

**Goal:** Prove understanding of components, props, and rendering.

1. Create two components inside `/src`  
   - `Greeting`: displays `Hello, {name}`  
   - `TimeNow`: shows current local time and updates every second  
2. Combine both inside `App.jsx`. Example:

       function App() {
         return (
           <div>
             <Greeting name="Martino" />
             <TimeNow />
           </div>
         );
       }

3. Add minimal CSS for alignment.  
4. Commit your progress:

       git add .
       git commit -m "Day 1 – Greeting + TimeNow components"

---

## 5. Reflection

- JSX compiles to JavaScript, not HTML.  
- Component functions must be pure (no side effects during render).  
- `main.jsx` is the single React mount point.  
- Keep commits small and meaningful for clear history.
