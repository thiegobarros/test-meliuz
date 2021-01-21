import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" exact component={Details} />
    </Switch>
  );
}

export default Routes;