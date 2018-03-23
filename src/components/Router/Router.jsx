import React from 'react';
import { BrowserRouter, Route, Switch, /*Redirect /*, Link*/ } from "react-router-dom";

import Home from 'components/Home';
import Register from 'components/Register';
import Login from 'components/Login';
import UserDash from 'components/UserDash';
import UserSettings from 'components/UserSettings';
import UserPage from 'components/UserPage';
import UserProfile from 'components/UserProfile';

import PhotoCollection from 'components/PhotoCollection';

import PrivateRoute from 'components/PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={UserDash} publicComponent={Home}/>
        {/* <Route exact path="/" component={Home} /> */}
        <PrivateRoute exact path="/:user/dash" component={UserDash} />
        <PrivateRoute exact path="/:user/settings" component={UserSettings} />
        {/* <Redirect from="/user" to="/" /> */}
        <Route path='/register' component={Register} />
        <Route path="/login" component={Login} />
        <Route path='/photo' component={PhotoCollection} />
        <Route exact path='/:user' component={UserPage} />
        <Route path="/:user/profile" component={UserProfile} />
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