import React from 'react';
import {inject, observer} from "mobx-react";
import { Redirect } from "react-router-dom";
const Login = ({
  isAuthenticated,
  redirectToReferrer,
  signin,
  ...props
}) => {
  // console.log('props', props);
  const { from } = props.location.state || { from: { pathname: "/" } };
  return redirectToReferrer 
    ? <Redirect to={from} />
    : (
      <div>
        <h2>Login</h2>
        <p>isAuthenticated - {isAuthenticated ? 'Yes': 'No'}</p>
        <p>redirectToReferrer - {redirectToReferrer ? 'Yes': 'No'}</p>
        <button onClick={signin}>Enter</button>
      </div>
    )
}

export default inject((stores) => {
  const {isAuthenticated, redirectToReferrer, signin} = stores.store;
  return {
    isAuthenticated,
    redirectToReferrer,
    signin
  }
})(observer(Login));
// export default inject("store")(observer(Login));