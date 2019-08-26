import React from "react";
import PropTypes from "prop-types";

import AuthenticatedLinks from "./Navigation.AuthenticatedLinks";
import UnauthenticatedLinks from "./Navigation.UnauthenticatedLinks";

// export default ({ currentUserId, logoutUser, userName }) => (
//   <section className="bg-light border-bottom mb-4">
//     <div className="container">
//       {currentUserId ? (
//         <AuthenticatedLinks
//           currentUserId={currentUserId}
//           logoutUser={logoutUser}
//           userName={userName}
//         />
//       ) : (
//         <UnauthenticatedLinks />
//       )}
//     </div>
//   </section>
// );
const Navigation = props => {
  const { currentUserId, logoutUser, userName } = props;
  return (
    <section className="bg-light border-bottom mb-4">
      <div className="container">
        {currentUserId ? (
          <AuthenticatedLinks
            currentUserId={currentUserId}
            logoutUser={logoutUser}
            userName={userName}
          />
        ) : (
          <UnauthenticatedLinks />
        )}
      </div>
    </section>
  );
};
Navigation.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  userName: PropTypes.string
};

export default Navigation;
