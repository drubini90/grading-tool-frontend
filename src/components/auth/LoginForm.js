import React, { Component } from "react";
import PropTypes from "prop-types";
class LoginForm extends Component {
  render() {
    const { submitLogin, setInputValue } = this.props;
    return (
      <div>
        <div></div>
        <form onSubmit={submitLogin}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input
              className="form-control"
              id="email"
              onChange={setInputValue}
              name="email"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              onChange={setInputValue}
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired
};

export default LoginForm;
