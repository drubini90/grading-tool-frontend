import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as storage from "../../../helpers/local-storage";

const StudentLinks = ({ logoutUser }) => {
  const getUserName = () => {
    return storage.getUserInfo().userName;
  };

  return (
    <div className="row">
      <div className="col-sm-10">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link menuLink" to={`/students`}>
              All Students
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link menuLink"
              to={{
                pathname: `createassignments`,
                state: { logoutUser: logoutUser }
              }}
            >
              Create New Assignment
            </Link>
          </li>
          <li className="nav-item">
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
export default withRouter(StudentLinks);
