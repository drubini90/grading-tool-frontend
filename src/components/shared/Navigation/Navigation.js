import React from "react";

import AdminLinks from "./Navigation.AdminLinks";
import StudentLinks from "./Navigation.StudentLinks";

import UnauthenticatedLinks from "./Navigation.UnauthenticatedLinks";

export default ({ isLoggedIn, isAdmin, logoutUser }) => {
  // const isLoggedIn = () => {
  //   return storage.getUserInfo().id ? true : false;
  // };
  // const isAdmin = () => {
  //   return storage.getUserInfo().isAdmin;
  // };
  return (
    <section className="bg-light border-bottom mb-12">
      <div>
        {isLoggedIn ? (
          isAdmin ? (
            <AdminLinks logoutUser={logoutUser} />
          ) : (
            <StudentLinks logoutUser={logoutUser} />
          )
        ) : (
          <UnauthenticatedLinks />
        )}
      </div>
    </section>
  );
};
