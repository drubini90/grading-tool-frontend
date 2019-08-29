import React, { Component } from "react";
import Layout from "../shared/Layout";
import { signup } from "../../api/auth";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      firstName: null,
      lastName: null
    };
    this.setInputValue = this.setInputValue.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }
  setInputValue = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    });
  };
  signupUser = async e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    };
    const result = await signup(user);
    if (result.token) {
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
        <Layout isLoggedIn={false}></Layout>
        <div class="login-form">
          <form onSubmit={this.signupUser}>
            <h2 class="text-center">Sign up</h2>
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
              <input
                id="firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
                required="required"
                onChange={this.setInputValue}
              />
            </div>
            <div class="form-group">
              <input
                id="lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
                required="required"
                onChange={this.setInputValue}
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignupForm;
