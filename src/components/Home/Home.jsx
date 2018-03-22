import React from 'react';
import { inject, observer } from "mobx-react";

import ToolTip from 'components/ToolTip';

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
      <ToolTip />
    </div>
  )
}

export default inject('store')(observer(Home));