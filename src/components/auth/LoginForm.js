import React, { Component } from "react";
import { login } from "../../api/auth";
import * as storage from "../../helpers/local-storage";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
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
    const { submitLogin, setInputValue } = this.props;
    return (
      <React.Fragment>
        <div className="login-form">
          <form onSubmit={submitLogin}>
            <h2 className="text-center">Login</h2>
            <div className="form-group">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                required="required"
                onChange={setInputValue}
              />
            </div>
            <div className="form-group">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
                onChange={setInputValue}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  submitLogin: PropTypes.func,
  setInputValue: PropTypes.func
};

export default withRouter(LoginForm);
