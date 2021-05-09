import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { setLogin } from "../../stateManagement/actions";
import LoginGoogle from "./Login";

const mapStateToProps = state => {
  return {isLoggedIn: state.isLoggedIn}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
  };
};

const ConnectedLoginPage = ({ isLoggedIn, setLogin, location }) => {

  const history = useHistory();
  if(isLoggedIn)
    history.push(location.state?.redirectedFrom || "/products")

  return (
    <div>
      <LoginGoogle setLogin={setLogin} />
    </div>
  );
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginPage);

export default LoginPage;
