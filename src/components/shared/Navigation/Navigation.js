import React from "react";
import PropTypes from "prop-types";

import AdminLinks from "./Navigation.AdminLinks";
import StudentLinks from "./Navigation.StudentLinks";

import UnauthenticatedLinks from "./Navigation.UnauthenticatedLinks";

const Navigation = props => {
  const { loggedInUser, logoutUser } = props;
  return (
    <section className="bg-light border-bottom mb-4">
      <div className="container">
        {loggedInUser.id ? (
          loggedInUser.isAdmin ? (
            <AdminLinks loggedInUser={loggedInUser} logoutUser={logoutUser} />
          ) : (
            <StudentLinks loggedInUser={loggedInUser} logoutUser={logoutUser} />
          )
        ) : (
          <UnauthenticatedLinks />
        )}
      </div>
    </section>
  );
};
Navigation.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default Navigation;
