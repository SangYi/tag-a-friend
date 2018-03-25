import React from 'react';
import { withRouter } from "react-router-dom";
import LoginForm from 'forms/LoginForm';
import RegisterForm from 'forms/RegisterForm';

const Home = (props) => {
  console.log('props', props)
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Tag A Friend!!!</p>
      <div>
        <h2>Login</h2>
        <LoginForm changeRoute={props.history.push}/>
        <h2>Register</h2>
        <RegisterForm changeRoute={props.history.push}/>
      </div>
    </div>
  )
}

export default withRouter(Home)