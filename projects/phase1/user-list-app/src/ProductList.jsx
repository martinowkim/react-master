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
