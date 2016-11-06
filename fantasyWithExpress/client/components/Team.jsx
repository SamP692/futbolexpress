import React, { Component } from 'react';
import request from 'superagent';
import { withRouter, Link } from 'react-router';

const propTypes = {
  params: React.PropTypes.object,
};

class League extends Component {
  constructor() {
    super();
    this.state = {
      teamName: '',
      teamId: 0,
    };
  }
  componentDidMount() {
    this.setTeamId();
  }
  // Retrieves the ID passed in the params and sets the state have that ID
  setTeamId() {
    const teamId = this.props.params.id;
    this.setState({ teamId });
  }
  render() {
    return (
      <div id="leagueBody">
        <h1>Team Page</h1>
        <div>{this.state.teamId}</div>
      </div>
    );
  }
}

League.propTypes = propTypes;

export default withRouter(League);
