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
    };
  }
  componentDidMount() {
    request.get('/api/league/find')
           .then((res) => {
             this.setState({ leagueName: res.body.name });
           })
           .catch(() => {
             this.props.router.push('/');
             console.log('you\'ve been pushed!');
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
