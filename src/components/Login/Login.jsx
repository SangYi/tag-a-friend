import React from 'react';
import {inject, observer} from "mobx-react";
// import { Redirect } from "react-router-dom";

import LoginForm from 'forms/LoginForm';

const Login = ({
  // isAuthenticated,
  // redirectToReferrer,
  // login,
  store: {
    isAuthenticated,
    redirectToReferrer,
    login
  },
  ...props
}) => {
  return (
    <div>
      <h2>Login</h2>
      <p>isAuthenticated - {isAuthenticated ? 'Yes': 'No'}</p>
      <p>redirectToReferrer - {redirectToReferrer ? 'Yes': 'No'}</p>
      {/* <button onClick={login}>Enter</button> */}
      <LoginForm historyPush={props.history.push}/>
    </div>
  )
  // const { from } = props.location.state || { from: { pathname: "/" } };
  // return redirectToReferrer 
  //   ? <Redirect to={from} />
  //   : (
  //     <div>
  //       <h2>Login</h2>
  //       <p>isAuthenticated - {isAuthenticated ? 'Yes': 'No'}</p>
  //       <p>redirectToReferrer - {redirectToReferrer ? 'Yes': 'No'}</p>
  //       {/* <button onClick={login}>Enter</button> */}
  //       <LoginForm historyPush={props.history.push}/>
  //     </div>
  //   )
}

// export default inject((stores) => {
//   const {isAuthenticated, redirectToReferrer, login} = stores.store;
//   return {
//     isAuthenticated,
//     redirectToReferrer,
//     login
//   }
// })(observer(Login));
export default inject("store")(observer(Login));