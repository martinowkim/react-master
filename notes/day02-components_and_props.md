# Day 2 – Components and Props

## 1. Core Concepts

### What Components Are
- Independent, reusable building blocks returning JSX.  
- Follow single-responsibility: one UI piece per component.  
- Composed hierarchically—small pieces form large UIs.

### Props (Properties)
- Inputs to components.  
- Read-only; passed from parent → child.  
- Use destructuring in the function parameter.  

### Component Communication
- Parent sends data via props.  
- Child triggers actions via callback props (functions).  

### Key Rules

| Concept | Meaning | Example |
|----------|----------|---------|
| **Props are immutable** | Never modify inside child | ✅ `const Card = ({title}) => <h2>{title}</h2>` |
| **Composition** | Components inside components | `<Card><Button/></Card>` |
| **Default props** | Provide fallback values | `Greeting.defaultProps = {name:'Guest'}` |
| **Conditional render** | Render based on logic | `{count>0 && <List/>}` |
| **List render** | Use `.map()` + `key` | `{items.map(i=> <Item key={i.id} ... />)}` |

**Execution pattern**
1. Parent owns data.  
2. Child receives props and displays them.  
3. UI = function of data.

---

## 2. Example

1. Create new project, 'user-list-app'.
2. configure the assigned jsx files.

**ProductCard.jsx**
```jsx
function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {inStock ? <p>✅ In Stock</p> : <p>❌ Out of Stock</p>}
    </div>
  );
}
export default ProductCard;
```

**ProductList.jsx**
```jsx
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          inStock={p.inStock}
        />
      ))}
    </div>
  );
}
export default ProductList;

```

**App.jsx**
```jsx
import ProductList from "./ProductList";

function App() {
  const items = [
    { id: 1, name: "Keyboard", price: 39.99, inStock: true },
    { id: 2, name: "Mouse", price: 25.0, inStock: false },
    { id: 3, name: "Monitor", price: 199.99, inStock: true },
  ];

  return (
    <div>
      <h1>Product Store</h1>
      <ProductList products={items} />
    </div>
  );
}
export default App;


```

**Minimal CSS**
```jsx
.grid {
  display: flex;
  gap: 1rem;
}
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

## 3. Assignment

**Goal:** Practice composition and prop usage.

1. Build three files inside `src/`:  
   - `UserCard.jsx` – shows user **name**, **email**, and **role**.  
   - `UserList.jsx` – renders multiple `UserCard` components.  
   - `App.jsx` – passes an array of users into `UserList`.  

2. Add a prop named `highlight` (boolean).  
   - If `true`, card border color = blue.  
   - If `false`, border color = gray.  

3. Example outline:

       function UserCard({ name, email, role, highlight }) {
         const border = highlight ? "2px solid blue" : "1px solid gray";
         return (
           <div style={{ border, padding: "10px", borderRadius: "6px" }}>
             <h3>{name}</h3>
             <p>{email}</p>
             <p>{role}</p>
           </div>
         );
       }

4. In `App.jsx`, pass an array of objects like:

       const users = [
         { id: 1, name: "Alice", email: "alice@mail.com", role: "Admin" },
         { id: 2, name: "Bob", email: "bob@mail.com", role: "User" },
       ];

       <UserList users={users} />

5. Commit progress:

       git add .
       git commit -m "Day 2 – UserCard composition with props"

---

## 4. Reflection

- Props carry data downward from parent to child.  
- Components stay pure; they render based on inputs.  
- `.map()` with a unique `key` efficiently renders lists.  
- Conditional rendering keeps logic inside JSX, not external if-else blocks.  
- Composition is the foundation of scalable, maintainable React UIs.
