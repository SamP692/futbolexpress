import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

const propTypes = {
  router: React.PropTypes.object,
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    request.post('/api/user/login')
           .send(this.state)
           .then(() => {
             // .then returns a user object in case you need it
             this.updateAuth();
             this.props.router.push('myleague');
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Returning Managers</h1>
          <hr />
        </div>
        <div id="authBody">
          <div>
            <input
              name="email"
              onChange={this.handleChange}
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <input
              name="password"
              onChange={this.handleChange}
              type="password"
              placeholder="password"
            />
          </div>
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

Login.propTypes = propTypes;

export default withRouter(Login);
