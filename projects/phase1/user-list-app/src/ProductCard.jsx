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