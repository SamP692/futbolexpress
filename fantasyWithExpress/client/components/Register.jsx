import React, { Component } from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import { withRouter } from 'react-router';

const propTypes = {
  router: React.PropTypes.object,
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  handleInputChange(e) {
    const input = e.target;
    const inputName = input.getAttribute('name');
    const updated = {};
    updated[inputName] = input.value;
    this.setState(updated);
  }
  submitRegister(e) {
    e.preventDefault();
    request.post('/api/user/register')
           .send(this.state)
           .then(() => {
             this.updateAuth();
             this.props.router.push('/');
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  render() {
    return (
      <div id="authBody">
        <h1>Register page</h1>
        <div>
          <input name="name" onChange={this.handleInputChange} type="text" placeholder="name" />
        </div>
        <div>
          <input name="email" onChange={this.handleInputChange} type="text" placeholder="email" />
        </div>
        <div>
          <input name="password" onChange={this.handleInputChange} type="password" placeholder="password" />
        </div>
        <button onClick={this.submitRegister}>Register</button>
      </div>
    );
  }
}

Register.propTypes = propTypes;

export default withRouter(Register);
