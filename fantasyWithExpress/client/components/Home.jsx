import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="homeBody">
        <div className="header">
          <h1>Fubol Express 2016</h1>
          <hr />
        </div>
        <div>
          <Link to="about">
            <div className="linkBox" id="top" to="/about">
              learn more about <span className="title">Futbol Express</span>
            </div>
          </Link>
          <Link to="login">
            <div className="linkBox" id="left">
              <h2>returning user?</h2>
              <h3>get me back in the action</h3>
            </div>
          </Link>
          <Link to="register">
            <div className="linkBox" id="right">
              <h2>new to <span className="title">Futbol Express?</span></h2>
              <h3>set me up</h3>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}


export default Home;
