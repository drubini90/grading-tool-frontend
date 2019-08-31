import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as storage from "../../../helpers/local-storage";

const AdminLinks = ({ logoutUser }) => {
  const getUserName = () => {
    return storage.getUserInfo().userName;
  };

  return (
    <div className="row">
      <div className="col-sm-10">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/`}>
              All Students
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/assignments/ungraded`}>
              Ungraded Assignments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/assignments/graded`}>
              Graded Assignments
            </Link>
          </li>
          <li className="nav-item menuLink">
            <button className="btn btn-link menuLink" onClick={logoutUser}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="col-sm-2 menuLink">Welcome, {getUserName()}!</div>
    </div>
  );
};
export default withRouter(AdminLinks);
