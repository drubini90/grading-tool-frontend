import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "../auth/LoginForm";
import Students from "../students/Students";

class Home extends Component {
  render() {
    const { loggedInUser, submitLogin, setInputValue } = this.props;

    return (
      <section className="bg-light border-bottom mb-4">
        <div className="container">
          {loggedInUser.id ? (
            loggedInUser.isAdmin ? (
              <div>Student !!!</div>
            ) : (
              <div>Assignments !!!</div>
            )
          ) : (
            <LoginForm
              setInputValue={setInputValue}
              submitLogin={submitLogin}
            />
          )}
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  submitLogin: PropTypes.func,
  setInputValue: PropTypes.func,
  loginError: PropTypes.string,
  studentsList: PropTypes.array.isRequired
};

export default Home;
