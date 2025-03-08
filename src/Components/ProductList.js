import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, title: "Product 1", price: 20, image: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", price: 30, image: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", price: 40, image: "https://via.placeholder.com/150" },
  // Add more products
];

function ProductList({ searchQuery, addToCart }) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;