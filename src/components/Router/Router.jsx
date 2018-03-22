import React from 'react';
import { BrowserRouter, Route, Switch, Redirect /*, Link*/ } from "react-router-dom";

import Home from 'components/Home';
import Register from 'components/Register';
import Login from 'components/Login';
import UserProfile from 'components/UserProfile';
import PrivateRoute from 'components/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/user/:id" component={UserProfile} />
        <Redirect from="/user" to="/" />
        <Route path='/register' component={Register} />
        <Route path="/login" component={Login} />
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