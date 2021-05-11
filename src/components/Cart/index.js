import React from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../../stateManagement/actions";
import Header from "../Header";
import ProductCard from "../Products/ProductCard";

import "./cart.css";

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return { removeFromCart: (id) => dispatch(removeFromCart(id)) };
};

const ConnectedProductsPage = ({ cart, removeFromCart }) => {
  return (
    <>
      <Header />
      <h1 className="container">Cart</h1>
      <div className="container">
        {cart.length === 0? <h3>No items in your cart</h3> : ""}
        {cart.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              isOnCartPage
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </>
  );
};

const ProductsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedProductsPage);

export default ProductsPage;
