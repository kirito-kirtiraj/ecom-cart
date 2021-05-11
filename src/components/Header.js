import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Login from "./LoginPage";
import Logout from "./Logout";

import CartIcon from "../assets/images/shopping.svg";
import "./header.css";

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn, cart: state.cart };
};

const ConnectedHeader = ({ isLoggedIn, cart }) => {
  return (
    <header className="width-container">
      <Link className="site-name" to="/">
        <h1>Mini ECom</h1>
      </Link>
      <Link className="cart-icon-link" to="/cart">
        {cart.length > 0 && (
          <div className="cart-badge">
            {cart.length}
          </div>
        )}
        <img src={CartIcon} alt="cart" width="30" height="30" />
      </Link>
      {isLoggedIn ? <Logout /> : <Login page={false} />}
    </header>
  );
};

const Header = connect(mapStateToProps)(ConnectedHeader);

export default Header;
