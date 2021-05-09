import React from "react";
import { connect } from "react-redux";
import { GoogleLogout } from "react-google-login";

import { setLogin } from "../stateManagement/actions";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (isLoggedIn) => dispatch(setLogin(isLoggedIn)),
  };
};

const ConnectedLogout = ({ setLogin }) => {
  const onSuccess = () => {
    console.log("Logout made successfully");
    setLogin(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

const Logout = connect(null, mapDispatchToProps)(ConnectedLogout)

export default Logout;
