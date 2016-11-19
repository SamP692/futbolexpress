import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';

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
        // assists: 4,
        // clearances: 0.5,
        // foulsConceded: -0.5,
        // foulsDrawn: 0.5,
        // headersWon: 0.5,
        // interceptions: 0.5,
        // keyPasses: 1,
        // normalGoals: 7,
        // normalGoalsConceded: -4,
        // offsides: -1,
        // ownGoals: -5,
        // ownGoalsConceded: -2.5,
        // penaltiesConceded: -4.5,
        // penaltiesDrawn: 4,
        // penaltiesSaved: 7,
        // penaltyGoals: 3,
        // penaltyGoalsConceded: -2.5,
        // penaltyMisses: -4.5,
        // savesCaught: 2,
        // savesParried: 1,
        // secondYellows: -4,
        // shotsBlocked: 1,
        // shotsOffPost: 2,
        // shotsOffTarget: 0.5,
        // shotsOnTarget: 1,
        // straightReds: -6,
        // tackles: 1,
        // yellowCards: -2,
      },
    };
    this.updatePlayerStats = this.updatePlayerStats.bind(this);
    this.getExpandedTeamInfo = this.getExpandedTeamInfo.bind(this);
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
  // Request to retrieve current point valuations
  getPointValues() {
    
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
  buildRow(pos, posTitle) {
    return Object.keys(this.state.playerData).map((player) => {
      const playerInfo = this.state.playerData[player].playerInfo;
      const playerStats = this.state.playerData[player].playerStats;
      if (player == pos) {
        return (
          <tr id={posTitle}>
            <td>{posTitle}</td>
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
      }
    });
  }
  render() {
    return (
      <div id="teamComponent">
        <div className="header">
          <h1>{this.state.teamInfo.teamName}</h1>
          <hr />
        </div>
        <div id="tableBody">
          <table >
            <thead>
              <tr id="headerRow">
                <th className="medCol">Pos</th>
                <th className="largeCol">Player</th>
                <th>Mins</th>
                <th>Goals<br />(Non-Pen)</th>
                <th>Goals<br />(Pen)</th>
                <th>Penalty<br />Misses</th>
                <th>Shots On<br />Target</th>
                <th>Shots Off<br />Target</th>
                <th>Shots Off<br />Post</th>
                <th>Assists</th>
                <th>Key<br />Passes</th>
                <th>Fouls<br />Drawn</th>
                <th>Offsides</th>
                <th>Tackles</th>
                <th>Inter-<br />ceptions</th>
                <th>Clearances</th>
                <th>Headers<br />Won</th>
                <th>Shots<br />Blocked</th>
                <th>Fouls<br />Conceded</th>
                <th>Penalties<br />Conceded</th>
                <th>Yellow<br />Cards</th>
                <th>Second<br />Yellows</th>
                <th>Straight<br />Reds</th>
                <th>Own<br />Goals</th>
                <th>Std Goals<br />Conceded</th>
                <th>Own Goals<br />Conceded</th>
                <th>Pen Goals<br />Conceded</th>
                <th>Saves<br />Parried</th>
                <th>Saves<br />Caught</th>
                <th>Penalties<br />Saved</th>
              </tr>
            </thead>
            <tbody>
              {this.buildRow('gk', 'GK')}
              {this.buildRow('cbl', 'CB')}
              {this.buildRow('cbr', 'CB')}
              {this.buildRow('fbl', 'FB')}
              {this.buildRow('fbr', 'FB')}
              {this.buildRow('cml', 'CM')}
              {this.buildRow('cmr', 'CM')}
              {this.buildRow('wl', 'W')}
              {this.buildRow('wr', 'W')}
              {this.buildRow('sl', 'St')}
              {this.buildRow('sr', 'St')}
              {this.buildRow('bn1', 'Sub')}
              {this.buildRow('bn2', 'Sub')}
              {this.buildRow('bn3', 'Sub')}
              {this.buildRow('bn4', 'Sub')}
              {this.buildRow('bn5', 'Sub')}
              {this.buildRow('bn6', 'Sub')}
              {this.buildRow('bn7', 'Sub')}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Team.propTypes = propTypes;

export default withRouter(Team);
