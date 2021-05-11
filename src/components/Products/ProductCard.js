import React from "react";

import "./product-card.css";

const ProductCard = ({
  product,
  handleAddToCart,
  isInCart,
  isOnCartPage,
  removeFromCart,
}) => {
  return (
    <div
      className={"product-card" + (isOnCartPage ? " cart-product-card" : "")}
    >
      <img src={product.image} width="140" height="140" alt={product.title} />
      <h3>{product.title}</h3>
      <h4>Price: {product.price}₹</h4>
      {isOnCartPage ? (
        <button onClick={() => removeFromCart(product.id)}>
          Remove from cart
        </button>
      ) : (
        <button onClick={() => handleAddToCart(product, isInCart)}>
          {isInCart ? "Go to cart" : "Add to cart"}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
