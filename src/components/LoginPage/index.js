import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { setLogin } from "../../stateManagement/actions";
import LoginGoogle from "./Login";

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
  };
};

const ConnectedLoginPage = ({ isLoggedIn, setLogin, location, page }) => {
  const history = useHistory();
  if (isLoggedIn && page)
    history.push(location.state?.redirectedFrom || "/products");

  return (
    <div>
      {page && location.state?.loginFirst ? (
        <h4>Please login first and try again.</h4>
      ) : null}
      <LoginGoogle setLogin={setLogin} />
    </div>
  );
};

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLoginPage);

ConnectedLoginPage.defaultProps = {
  page: true,
}

ConnectedLoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setLogin: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  page: PropTypes.bool,
};

export default LoginPage;
