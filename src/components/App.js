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
import Assignments from "./assignments/Assignments";
import CreateAssignment from "./assignments/CreateAssignment";

import { login, signup } from "../api/auth";
import PageError from "./shared/PageError";
import SignupForm from "./auth/SignupForm";
import { getAllStudents } from "../api/students";
import { getAssignments } from "../api/assignments";

// import Signup from "./auth/SignupForm";

// import * as auth from "../api/auth";
import * as token from "../helpers/local-storage";
import Students from "./students/Students";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: {
        id: token.getToken(),
        isAdmin: false
      },
      loading: false,
      email: null,
      password: null,
      erroMessage: null,
      studentsList: [],
      assignmentsList: []
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.signupUser = this.signupUser.bind(this);
    this.getStudentsInfo = this.getStudentsInfo.bind(this);
    this.getAssignments = this.getAssignments.bind(this);
  }
  async componentDidMount() {
    if (token.getToken()) {
      await this.getStudentsInfo();
      await this.getAssignments();
    }
  }
  logoutUser() {
    token.clearToken();
    this.setState({
      loggedInUser: { id: token.getToken(), isAdmin: false }
    });
  }

  setInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  getStudentsInfo = async () => {
    const studentsList = await getAllStudents();
    this.setState({
      studentsList: studentsList.response
    });
  };
  getAssignments = async () => {
    const assignments = await getAssignments();
    this.setState({ assignmentsList: assignments.response });
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
        loggedInUser: {
          id: result.user_info._id,
          isAdmin: result.user_info.isAdmin,
          userName: result.user_info.first_name
        }
      });
      await this.getStudentsInfo();
      await this.getAssignments();
      return <Redirect to="/students"></Redirect>;
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
      loading,
      errorMessage,
      loggedInUser,
      studentsList,
      assignmentsList
    } = this.state;
    if (loading) return <span />;
    return (
      <Router>
        <Header />
        <Navigation loggedInUser={loggedInUser} logoutUser={this.logoutUser} />
        <PageError errorMessage={errorMessage}></PageError>
        <Home
          loggedInUser={loggedInUser}
          setInputValue={this.setInputValue}
          submitLogin={this.submitLogin}
          studentsList={studentsList}
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
          <Route
            path="/assignments"
            exact
            component={() => {
              return <Assignments assignmentsList={assignmentsList} />;
            }}
          />
          <Route
            path="/students"
            exact
            component={() => {
              return <Students studentsList={studentsList} />;
            }}
          />
          <Route
            path="/assignments/new"
            exact
            component={() => {
              return <CreateAssignment />;
            }}
          />
          <Route
            path="/assignments/:id/edit"
            exact
            component={() => {
              return <CreateAssignment />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
