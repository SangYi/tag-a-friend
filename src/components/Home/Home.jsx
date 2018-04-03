import React from 'react';
import { withRouter } from "react-router-dom";
import LoginForm from 'forms/LoginForm';
import RegisterForm from 'forms/RegisterForm';

const Home = (props) => {
  return (
    <div className="home">
      <h2 className="home__header">Home</h2>
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