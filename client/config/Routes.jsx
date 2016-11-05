import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Pages from './PageComponentObject';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Pages.nav}>
        <IndexRoute component={Pages.home} />
        <Route path="login" component={Pages.login} />
        <Route path="register" component={Pages.register} />
        <Route path="about" components={Pages.placeholder} />
        <Route path="myteam" components={Pages.placeholder} />
        <Route path="myleague" components={Pages.league} />
      </Route>
    </Router>
  );
};

export default Routes;
