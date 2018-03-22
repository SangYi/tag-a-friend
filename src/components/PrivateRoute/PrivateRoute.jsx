import React from 'react';
import {inject, observer} from "mobx-react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  store: {
    isAuthenticated
  },
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}
      render={ props => {
        return isAuthenticated 
        ? <Component {...props} /> 
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        }
      }
  />
  )
}

export default inject('store')(observer(PrivateRoute));