import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const StudentLinks = props => {
  const { loggedInUser, logoutUser, history } = props;
  const logout = () => {
    logoutUser();
    history.push("/login");
  };

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to={`/assignments`}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/students`}>
          All Students
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/assignments/new`}>
          Create New Assignment
        </Link>
      </li>
      <li className="nav-item">
        <button className="btn btn-link" onClick={logout}>
          Logout
        </button>
      </li>
      <li className="nav-item">Welcome {loggedInUser.userName} !!!</li>
    </ul>
  );
};
StudentLinks.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};
export default withRouter(StudentLinks);
