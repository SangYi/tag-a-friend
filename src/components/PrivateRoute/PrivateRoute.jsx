import React from 'react';
import {inject, observer} from "mobx-react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route {...rest}
      render={ props => {
        console.log('props in private route', props)
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
  // return (
  //   <div>
  //     <h2>Private Route</h2>
  //   </div>
  // )
}

// export default PrivateRoute;
export default inject(stores => {
  const { isAuthenticated } = stores.store
  return {
    isAuthenticated,
  }
})(observer(PrivateRoute));