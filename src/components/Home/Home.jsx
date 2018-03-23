import React from 'react';
// import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import LoginForm from 'forms/LoginForm';
// import ToolTip from 'components/ToolTip';

const Home = (props) => {
  console.log('props', props)
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Tag A Friend!!!</p>
      <div>
        <h2>Login</h2>
        {/* <p>isAuthenticated - {isAuthenticated ? 'Yes': 'No'}</p>
        <p>redirectToReferrer - {redirectToReferrer ? 'Yes': 'No'}</p> */}
        {/* <button onClick={login}>Enter</button> */}
        <LoginForm historyPush={props.history.push}/>
      </div>
    </div>
  )
}

export default withRouter(Home)
// export default inject('store')(observer(Home));