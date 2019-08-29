import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Container from "react-bootstrap/Container";

class Assignment extends React.Component {
  constructor() {
    super();
    this.editAssignment = this.editAssignment.bind(this);
    // this.deleteAssignment = this.deleteAssignment.bind(this);
  }
  editAssignment(e) {
    const { history } = this.props;
    history.push("/editAssignment/" + e.target.nextSibling.id);
  }

  render() {
    const { assignment, deleteAssignment } = this.props;
    return (
      <React.Fragment>
        <Container>
          <div>{assignment.title}</div>
          <div>{assignment.description}</div>
          <div>{assignment.projectLink}</div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.editAssignment}
          >
            Edit
          </button>
          <button
            id={assignment._id}
            type="submit"
            className="btn btn-primary"
            onClick={deleteAssignment}
          >
            Delete
          </button>
        </Container>
      </React.Fragment>
    );
  }
}

Assignment.propTypes = {
  assignment: PropTypes.object,
  deleteAssignment: PropTypes.func
};

export default withRouter(Assignment);
