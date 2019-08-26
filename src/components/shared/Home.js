import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "../auth/LoginForm";

class Home extends Component {
  render() {
    const { currentUserId, isAdmin, submitLogin, setInputValue } = this.props;

    return (
      <section className="bg-light border-bottom mb-4">
        <div className="container">
          {currentUserId ? (
            isAdmin ? (
              <div>Students !!!</div>
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
  currentUserId: PropTypes.string,
  isAdmin: PropTypes.bool,
  submitLogin: PropTypes.func,
  setInputValue: PropTypes.func,
  loginError: PropTypes.string
};

export default Home;
