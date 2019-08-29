import React, { Component } from "react";
import { login } from "../../api/auth";
import * as storage from "../../helpers/local-storage";
import { withRouter } from "react-router";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
    this.setInputValue = this.setInputValue.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  setInputValue = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    });
  };
  submitLogin = async e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const result = await login(user);
    if (result.token) {
      const userInfo = {
        token: result.token,
        id: result.user_info._id,
        isAdmin: result.user_info.isAdmin,
        userName: result.user_info.first_name
      };
      storage.setUserInfo(userInfo);
      this.props.history.push("/");
    } else {
      this.setState({
        errorMessage: result.message
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div class="login-form">
          <form onSubmit={this.submitLogin}>
            <h2 class="text-center">Login</h2>
            <div class="form-group">
              <input
                id="email"
                type="text"
                class="form-control"
                placeholder="Email"
                required="required"
                onChange={this.setInputValue}
              />
            </div>
            <div class="form-group">
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="Password"
                required="required"
                onChange={this.setInputValue}
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(LoginForm);
