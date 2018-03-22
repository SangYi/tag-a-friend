import React from 'react';
import { inject, observer } from "mobx-react";

const Home = ({
  store:{
    signout,    
  },
  ...props
}) => {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => {
        signout()
        props.history.push("/");
      }}>Sign out</button>
    </div>
  )
}

export default inject('store')(observer(Home));