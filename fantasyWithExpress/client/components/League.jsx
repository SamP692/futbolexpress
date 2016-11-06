import React, { Component } from 'react';
import request from 'superagent';
import { withRouter, Link } from 'react-router';

const propTypes = {
  router: React.PropTypes.object,
};

class League extends Component {
  constructor() {
    super();
    this.state = {
      leagueName: '',
      teamList: {},
    };
    this.getLeagueInformation = this.getLeagueInformation.bind(this);
    this.getTeamsInformation = this.getTeamsInformation.bind(this);
    this.buildTeamElements = this.buildTeamElements.bind(this);
  }
  // Sends requests to league information and simple information for each team
  componentDidMount() {
    this.getLeagueInformation();
    this.getTeamsInformation();
  }
  // HTTP Request to get league information
  getLeagueInformation() {
    request.get('/api/league/find')
           .then((res) => {
             this.setState({ leagueName: res.body.name });
           })
           .catch(() => {
             this.props.router.push('/');
           });
  }
  // HTTP request to get list of teams in league
  getTeamsInformation() {
    request.get('/api/team/findbyleague')
           .then((res) => {
             const teams = res.body;
             const teamList = {};
             teams.forEach((team) => {
               teamList[team.name] = team.id;
             });
             this.setState({ teamList });
           }).catch((err) => {
             console.log(err);
           });
  }
  // Constructs an element for each team to be rendered on the page
  buildTeamElements() {
    return Object.keys(this.state.teamList).map((team) => {
      const teamId = (this.state.teamList[team]);
      const teamUrl = `/team/${teamId}`;
      return (
        <Link to={teamUrl} key={teamId} id={teamId}>{team}</Link>
      );
    });
  }
  render() {
    return (
      <div id="leagueBody">
        <h1>{this.state.leagueName}</h1>
        <div>{this.buildTeamElements()}</div>
      </div>
    );
  }
}

League.propTypes = propTypes;

export default withRouter(League);
