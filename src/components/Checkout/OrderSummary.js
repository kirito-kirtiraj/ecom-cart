import React from "react";

const OrderSummary = ({ cart, clearCart }) => {
  const total = cart.reduce((total, product) => {
    return (total += product.price);
  }, 0);

  const handleClick = () => {
    clearCart();
    alert("Your order has been placed!!");
  };

  return (
    <>
      <div className="order-summary">
        {cart.length > 0 && (
          <>
            {cart.map((product, index) => {
              return (
                <div key={index} className="order-item">
                  <h3>{product.title}</h3>
                  <h4>{product.price}₹</h4>
                </div>
              );
            })}
            <hr />
            <div className="order-item">
              <h3>Total:</h3>
              <h3>{total}₹</h3>
            </div>
          </>
        )}
        {cart.length === 0 && <h3>No items in your cart</h3>}
      </div>
      {cart.length > 0 && <button className="standard-button" onClick={() => handleClick()}>
        Place order
      </button>}
    </>
  );
};

export default OrderSummary;
