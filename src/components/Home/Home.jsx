import React from 'react';
import { withRouter } from "react-router-dom";
import LoginForm from 'forms/LoginForm';

const Home = (props) => {
  // console.log('props', props)
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Tag A Friend!!!</p>
      <div>
        <h2>Login</h2>
        <LoginForm historyPush={props.history.push}/>
      </div>
    </div>
  )
}

export default withRouter(Home)