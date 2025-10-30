import ProductList from "./ProductList";
import UserList from "./UserList";
function App() {
  const items = [
    { id: 1, name: "Keyboard", price: 39.99, inStock: true },
    { id: 2, name: "Mouse", price: 25.0, inStock: false },
    { id: 3, name: "Monitor", price: 199.99, inStock: true },
  ];

  const users = [
    { name: "Martino", email: "martino@gmail.com", role: "swdev"},
    { name: "grace", email: "grace@gmail.com", role: "nurse"},
    { name: "cecilia", email: "cecilia@gmail.com", role: "student"}
  ]

  return (
    <div>
      <h1>Product Store</h1>
      <ProductList products={items} />
      <UserList users={users}/>
    </div>
  );
}
export default App;
