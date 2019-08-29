import React from "react";

import Header from "./Header";
import Navigation from "./Navigation/Navigation";
const Layout = ({ isLoggedIn, isAdmin, logoutUser }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        logoutUser={logoutUser}
      />
    </React.Fragment>
  );
};
export default Layout;
