import React, { Component } from 'react';
import request from 'superagent';
import { withRouter, Link } from 'react-router';

const propTypes = {
  params: React.PropTypes.object,
  router: React.PropTypes.object,
};

class Team extends Component {
  constructor() {
    super();
    this.state = {
      teamInfo: {},
      playerInfo: {},
      playerData: {},
      statCategories: {
        assists: 4,
        clearances: 0.5,
        foulsConceded: -0.5,
        foulsDrawn: 0.5,
        headersWon: 0.5,
        interceptions: 0.5,
        keyPasses: 1,
        normalGoals: 7,
        normalGoalsConceded: -4,
        offsides: -1,
        ownGoals: -5,
        ownGoalsConceded: -2.5,
        penaltiesConceded: -4.5,
        penaltiesDrawn: 4,
        penaltiesSaved: 7,
        penaltyGoals: 3,
        penaltyGoalsConceded: -2.5,
        penaltyMisses: -4.5,
        savesCaught: 2,
        savesParried: 1,
        secondYellows: -4,
        shotsBlocked: 1,
        shotsOffPost: 2,
        shotsOffTarget: 0.5,
        shotsOnTarget: 1,
        straightReds: -6,
        tackles: 1,
        yellowCards: -2,
      },
    };
    this.updatePlayerStats = this.updatePlayerStats.bind(this);
    this.getExpandedTeamInfo = this.getExpandedTeamInfo.bind(this);
    this.buildStatElements = this.buildStatElements.bind(this);
  }
  // Executes call to retrieve detailed team info
  componentDidMount() {
    this.getExpandedTeamInfo();
  }
  // Request to retrieve full team info DB and then run --updatePlayerStats()-- for each player
  getExpandedTeamInfo() {
    const teamId = this.props.params.id;
    const requestUrl = `/api/team/findbyid/${teamId}`;
    request.get(requestUrl)
           .then((team) => {
             const teamInfo = team.body;
             this.setState(teamInfo);
             this.updatePlayerStats();
           }).catch(() => {
             this.props.router.push('/');
           });
  }
  // Request to retrieve stats for one player from DB, followed up state update
  getIndividualPlayerStats(id, position) {
    const requestUrl = `api/player/find/${id}`;
    request.get(requestUrl).then((player) => {
      const playerObject = player.body;
      const playerData = this.state.playerData;
      playerData[position] = playerObject;
      this.setState({ playerData });
    });
  }
  // Runs --getIndividualPlayerStats()-- request for each player in lineup
  updatePlayerStats() {
    Object.keys(this.state.playerInfo).forEach((player) => {
      const playerObject = this.state.playerInfo;
      const playerId = playerObject[player];
      if (playerId !== null) {
        this.getIndividualPlayerStats(playerId, player);
      }
    });
  }
  buildStatElements() {
    return Object.keys(this.state.playerData).map((player) => {
      const playerInfo = this.state.playerData[player].playerInfo;
      const playerStats = this.state.playerData[player].playerStats;
      return (
        <tr>
          <td>{player}</td>
          <td>{playerInfo.playerName}</td>
          <td>{playerStats.totalMins}</td>
          <td>{playerStats.normalGoals}</td>
          <td>{playerStats.penaltyGoals}</td>
          <td>{playerStats.penaltyMisses}</td>
          <td>{playerStats.shotsOnTarget}</td>
          <td>{playerStats.shotsOffTarget}</td>
          <td>{playerStats.shotsOffPost}</td>
          <td>{playerStats.assists}</td>
          <td>{playerStats.keyPasses}</td>
          <td>{playerStats.foulsDrawn}</td>
          <td>{playerStats.offsides}</td>
          <td>{playerStats.tackles}</td>
          <td>{playerStats.interceptions}</td>
          <td>{playerStats.clearances}</td>
          <td>{playerStats.headersWon}</td>
          <td>{playerStats.shotsBlocked}</td>
          <td>{playerStats.foulsConceded}</td>
          <td>{playerStats.penaltiesConceded}</td>
          <td>{playerStats.yellowCards}</td>
          <td>{playerStats.secondYellows}</td>
          <td>{playerStats.straightReds}</td>
          <td>{playerStats.ownGoals}</td>
          <td>{playerStats.normalGoalsConceded}</td>
          <td>{playerStats.ownGoalsConceded}</td>
          <td>{playerStats.penaltyGoalsConceded}</td>
          <td>{playerStats.savesParried}</td>
          <td>{playerStats.savesCaught}</td>
          <td>{playerStats.penaltiesSaved}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Team Page</h1>
        <div>{this.state.teamInfo.name}</div>
        <div id="tableBody">
          <table >
            <thead>
              <tr>
                <th>pos</th>
                <th>player</th>
                <th>mins</th>
                <th>goal(live)</th>
                <th>goal(pen)</th>
                <th>pen miss</th>
                <th>shot on</th>
                <th>shot off</th>
                <th>post</th>
                <th>assist</th>
                <th>key</th>
                <th>fouled</th>
                <th>off</th>
                <th>tackle</th>
                <th>int</th>
                <th>clear</th>
                <th>head</th>
                <th>blocks</th>
                <th>foul given</th>
                <th>pens given</th>
                <th>yellow</th>
                <th>2nd yellow</th>
                <th>str red</th>
                <th>own</th>
                <th>gk goal(live)</th>
                <th>gk goal(own)</th>
                <th>gk goal(pen)</th>
                <th>parried</th>
                <th>caught</th>
                <th>pen save</th>
              </tr>
            </thead>
            <tbody>
              {this.buildStatElements()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Team.propTypes = propTypes;

export default withRouter(Team);
