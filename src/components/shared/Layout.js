import React from "react";

import Header from "./Header";
import Navigation from "./Navigation/Navigation";
const Layout = ({ isLoggedIn, isAdmin }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
    </React.Fragment>
  );
};
export default Layout;
