import React, { Component } from "react";
import PropTypes from "prop-types";
class SignupForm extends Component {
  render() {
    const { signupUser, setInputValue } = this.props;
    return (
      <div>
        <div></div>
        <form onSubmit={signupUser}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              id="firstName"
              onChange={setInputValue}
              name="firstName"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              id="lastName"
              onChange={setInputValue}
              name="lastName"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            Signup
          </button>
        </form>
      </div>
    );
  }
}
SignupForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired
};

export default SignupForm;
