import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const AdminLinks = props => {
  const { loggedInUser, logoutUser, history } = props;
  const logout = () => {
    logoutUser();
    history.push("/login");
  };

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to={`/students`}>
          All Students
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/ungradedAssignments`}>
          Ungraded Assignments
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={`/gradedAssignments`}>
          Graded Assignments
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
AdminLinks.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};
export default withRouter(AdminLinks);
