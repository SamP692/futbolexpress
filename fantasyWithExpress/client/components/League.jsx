import React, { Component } from 'react';
import request from 'superagent';
import { withRouter } from 'react-router';

const propTypes = {
  router: React.PropTypes.object,
};

class League extends Component {
  constructor() {
    super();
    this.state = {
      leagueName: '',
      teamOne: {},
      teamTwo: {},
      teamThree: {},
      teamFour: {},
      teamFive: {},
      teamSix: {},
      teamSeven: {},
      teamEight: {},
      teamNine: {},
      teamTen: {},
      teamEleven: {},
      teamTwelve: {},
    };
    this.getLeagueInformation = this.getLeagueInformation.bind(this);
    this.getTeamsInformation = this.getTeamsInformation.bind(this);
  }
  componentDidMount() {
    this.getLeagueInformation();
    this.getTeamsInformation();
  }
  getLeagueInformation() {
    request.get('/api/league/find')
           .then((res) => {
             this.setState({ leagueName: res.body.name });
           })
           .catch(() => {
             this.props.router.push('/');
             console.log('you\'ve been pushed!');
           });
  }
  getTeamsInformation() {
    request.get('/api/team/findbyleague')
           .then((res) => {
             console.log(`Team List: ${res}`);
           }).catch((err) => {
             console.log(err);
           });
  }
  render() {
    return (
      <div id="leagueBody">
        <h1>{this.state.leagueName}</h1>
      </div>
    );
  }
}

League.propTypes = propTypes;

export default withRouter(League);
