import React from "react";
import { connect } from "react-redux";

import { clearCart } from "../../stateManagement/actions";
import Header from "../Header";
import OrderSummary from "./OrderSummary";

import "./checkout.css";

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = (dispatch) => {
  return { clearCart: () => dispatch(clearCart()) };
};

const ConnectedCheckoutPage = ({ cart, clearCart }) => {
  return (
    <>
      <Header />
      <OrderSummary cart={cart} clearCart={clearCart} />
    </>
  );
};

const CheckoutPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCheckoutPage);

export default CheckoutPage;
