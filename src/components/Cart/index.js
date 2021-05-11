import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className="page-container">
        <h1 className="width-container">Cart</h1>
        <div className="width-container centered">
          {cart.length === 0 && <h3>No items in your cart</h3>}
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
          {cart.length > 0 && (
            <Link to="/checkout" className="standard-button">
              Proceed to checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

const ProductsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedProductsPage);

export default ProductsPage;
