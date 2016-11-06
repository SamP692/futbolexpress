import React, { Component } from 'react';
import { Link } from 'react-router';

class LeagueList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="homeBody">
        <h1>[USER'S] Leagues</h1>
        <h2>[LEAGUE 1]</h2>
        <Link to="joinLeague">Join New League</Link>
        <Link to="createLeague">Create New League</Link>
      </div>
    );
  }
}

export default LeagueList;
