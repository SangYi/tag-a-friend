import React from 'react';
import { BrowserRouter, Route, Switch, Redirect /*, Link*/ } from "react-router-dom";

import UserProfile from 'components/UserProfile';
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
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