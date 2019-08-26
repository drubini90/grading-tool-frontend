import React from "react";
import { Link } from "react-router-dom";

const UnauthenticatedLinks = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </li>
    </ul>
  );
};

export default UnauthenticatedLinks;
