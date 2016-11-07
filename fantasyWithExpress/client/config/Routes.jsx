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
        <Route path="about" components={Pages.about} />
        <Route path="myteam" components={Pages.league} />
        <Route path="myleague" components={Pages.league} />
        <Route path="team/:id" components={Pages.team} />
        <Route path="trends" components={Pages.placeholder} />
      </Route>
    </Router>
  );
};

export default Routes;
