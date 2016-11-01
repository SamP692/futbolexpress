import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Pages from './PageComponentObject';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Pages.nav}>
        <IndexRoute component={Pages.placeholder} />
        <Route path="login" component={Pages.login} />
        <Route path="register" component={Pages.register} />
        <Route path="about" components={Pages.placeholder} />
        <Route path="leaguelist" components={Pages.placeholder} />
      </Route>
    </Router>
  );
};

export default Routes;
