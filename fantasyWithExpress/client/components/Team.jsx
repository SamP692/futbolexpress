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
      teamInfo: {},
      playerInfo: {},
    };
  }
  // Executes call to retrieve detailed team info
  componentDidMount() {
    this.getExpandedTeamInfo();
  }
  // Retrieves full team info including players from DB
  getExpandedTeamInfo() {
    const teamId = this.props.params.id;
    const requestUrl = `/api/team/findbyid/${teamId}`;
    request.get(requestUrl)
           .then((team) => {
             const teamInfo = team.body;
             this.setState(teamInfo);
             console.log(this.state);
           }).catch((err) => {
             console.log(`Error in Request: ${err}`);
           });
  }
  buildRosterElements() {
    // Needs detailed player data first
      // Going to make individual player requests and build elements in one fell swoop
  }
  render() {
    return (
      <div id="leagueBody">
        <h1>Team Page</h1>
        <div>{this.state.teamInfo.name}</div>
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Player Name</th>
              <th>Games Played</th>
              <th>Goals</th>
              <th>Shots</th>
              <th>Passes</th>
              <th>Tackles</th>
              <th>Interceptions</th>
              <th>Headers</th>
              <th>Assists</th>
              <th>Interceptions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cristiano Ronaldo</td>
              <td>7</td>
              <td>20</td>
              <td>100</td>
              <td>34</td>
              <td>8</td>
              <td>3</td>
              <td>12</td>
              <td>4</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

League.propTypes = propTypes;

export default withRouter(League);
