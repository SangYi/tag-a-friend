import React from 'react';
import {inject, observer} from "mobx-react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  store: {
    isAuthenticated
  },
  component: Component,
  publicComponent: PublicComponent,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route {...rest}
      render={ props => {
        return isAuthenticated 
        ? Layout
          ? <Layout>
              <Component {...props} />
            </Layout>
          : <Component {...props} />
        : PublicComponent
          ? <PublicComponent />
          : <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
        }
      }
    />
  )
}

export default inject('store')(observer(PrivateRoute));