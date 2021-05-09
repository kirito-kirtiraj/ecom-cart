import React from "react";

import "./product-card.css";

const ProductCard = ({ product, handleAddToCart, isInCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} width="140" height="140" alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Price: {product.price}₹</h4>
      <button onClick={() => handleAddToCart(product, isInCart)}>{isInCart? "Go to cart" : "Add to cart"}</button>
    </div>
  );
};

export default ProductCard;
