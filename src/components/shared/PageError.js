import React from "react";

export default ({ errorMessage }) => (
  <React.Fragment>
    {errorMessage && <div className="error-message">{errorMessage}</div>}
  </React.Fragment>
);
