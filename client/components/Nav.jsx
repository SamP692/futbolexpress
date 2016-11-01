import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element,
};

function signOut() {
  request.post('/api/user/signout').then();
}

export default class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="navbar">
          <Link to="/">[LOGO]</Link>
          <Link to="/about">About</Link>
          <Link to="#">My Teams</Link>
          <Link className="dropDown" to="#">[TEAM 1]</Link>
          <Link to="/leaguelist">My Leagues</Link>
          <Link className="dropDown" to="#">[LEAGUE 1]</Link>
          <Link to="#">Trends</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="#">My Acct</Link>
          <Link to="/" onClick={signOut}>Logout</Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
