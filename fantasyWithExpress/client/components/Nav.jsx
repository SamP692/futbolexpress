import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element,
};

function signOut() {
  request.post('/api/user/signout').then(() => {
    location.reload();
  });
}

function loggedInCheck() {
  if (document.cookie) {
    return (
      <div>
        <Link to="#">my acct</Link>
        <Link to="/" onClick={signOut}>logout</Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </div>
    );
  }
}

export default class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="navbar">
          <Link to="/"><div id="logo" /></Link>
          <Link to="/about">about</Link>
          <Link to="/myteam">my team</Link>
          <Link to="/myleague">my league</Link>
          <Link to="#">trends</Link>
          {loggedInCheck()}
        </div>
        <div className="componentBody">{this.props.children}</div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
