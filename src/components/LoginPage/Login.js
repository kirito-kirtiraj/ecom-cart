import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = ({setLogin}) => {
  const onSuccess = (res) => {
    refreshTokenSetup(res);
    setLogin(true);
  };

  const onFailure = (res) => {
    alert("Login failed");
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;