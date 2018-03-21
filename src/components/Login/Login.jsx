import React from 'react';
import {inject, observer} from "mobx-react";

const Login = ({
  isAuthenticated,
  signin,
  ...props
}) => {
  console.log('props', props);
  console.log('isAuthenticated', isAuthenticated);
  return (
    <div>
      <h2>Login - {isAuthenticated ? 'Yes': 'No'}</h2>
      <button onClick={signin}>Enter</button>
    </div>
  )
}

export default inject((props) => {
  const {isAuthenticated, signin} = props.store;
  return {
    isAuthenticated,
    signin
  }
})(observer(Login));
// export default inject("store")(observer(Login));