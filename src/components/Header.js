import React from "react";
import { connect } from "react-redux";

import Login from "./LoginPage";
import Logout from "./Logout";

import "./header.css";

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const ConnectedHeader = ({ isLoggedIn }) => {
  return (
    <header className="container">
      <h1>Mini ECom</h1>
      {isLoggedIn ? <Logout /> : <Login page={false} />}
    </header>
  );
};

const Header = connect(mapStateToProps)(ConnectedHeader);

export default Header;
