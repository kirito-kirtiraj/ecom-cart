import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginPage from "./components/LoginPage";
import ProductsPage from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const ConnectedRoutes = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/products" />} />
      <Route exact path="/products" component={ProductsPage} />
      <Route
        exact
        path="/login"
        component={LoginPage}
      />
      <Route
        exact
        path="/cart"
        render={() => (isLoggedIn ? <Cart /> : <Redirect to={{pathname: "/login", state: {redirectedFrom: "/cart"}}} />)}
      />
      <Route
        exact
        path="/checkout"
        render={() => (isLoggedIn ? <Checkout /> : <Redirect to={{pathname: "/login", state: {redirectedFrom: "/checkout"}}} />)}
      />
    </>
  );
};

const Routes = connect(mapStateToProps)(ConnectedRoutes);

export default Routes;
