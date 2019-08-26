import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation/Navigation";
import Home from "./shared/Home";
import { login, signup } from "../api/auth";
import PageError from "./shared/PageError";
import SignupForm from "./auth/SignupForm";

// import Signup from "./auth/SignupForm";

// import * as auth from "../api/auth";
import * as token from "../helpers/local-storage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUserId: token.getToken(),
      isAdmin: false,
      loading: false,
      email: null,
      password: null,
      erroMessage: null,
      userName: null
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }
  logoutUser() {
    token.clearToken();
    this.setState({
      currentUserId: token.getToken()
    });
  }

  setInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
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
      token.setToken(result.token);
      this.setState({
        currentUserId: result.user_info._id,
        isAdmin: result.user_info.isAdmin,
        userName: result.user_info.first_name
      });
    } else {
      this.setState({
        errorMessage: result.message
      });
    }
  };
  signupUser = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.firstName,
      last_name: this.state.lastName
    };
    const result = signup(user);
    if (result.token) {
      return <Redirect to="/login"></Redirect>;
    } else {
      this.setState({
        errorMessage: result.message
      });
    }
  };

  render() {
    const {
      currentUserId,
      isAdmin,
      loading,
      errorMessage,
      userName
    } = this.state;
    if (loading) return <span />;
    return (
      <Router>
        <Header />
        <Navigation
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          logoutUser={this.logoutUser}
          userName={userName}
        />
        <PageError errorMessage={errorMessage}></PageError>
        <Home
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          setInputValue={this.setInputValue}
          submitLogin={this.submitLogin}
        />
        <Switch>
          <Route
            path="/signup"
            exact
            component={() => {
              return (
                <SignupForm
                  signupUser={this.signupUser}
                  setInputValue={this.setInputValue}
                />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
