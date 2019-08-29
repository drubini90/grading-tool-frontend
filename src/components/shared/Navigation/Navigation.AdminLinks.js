import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as storage from "../../../helpers/local-storage";

const AdminLinks = ({ logoutUser }) => {
  const getUserName = () => {
    return storage.getUserInfo().userName;
  };

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to={`/`}>
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
        <button className="btn btn-link" onClick={logoutUser}>
          Logout
        </button>
      </li>
      <li className="nav-item">Welcome {getUserName} !!!</li>
    </ul>
  );
};
export default withRouter(AdminLinks);
