import React from 'react';
import { BrowserRouter, Route, Switch, Redirect /*, Link*/ } from "react-router-dom";

import Home from 'components/Home';
import Login from 'components/Login';
import UserProfile from 'components/UserProfile';
import PrivateRoute from 'components/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Redirect from="/user" to="/" />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);


export default Router;