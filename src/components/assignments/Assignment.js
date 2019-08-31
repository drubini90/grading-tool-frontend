import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Assignment extends React.Component {
  constructor() {
    super();
    this.redirectToProjectLink = this.redirectToProjectLink.bind(this);
    this.getScore = this.getScore.bind(this);
  }
  redirectToProjectLink() {
    window.location.assign("http://github.com");
  }
  getScore() {
    const { assignment } = this.props;
    if (assignment.actual_score) {
      return assignment.actual_score + "/" + assignment.max_score;
    } else return "Grade TBD";
  }

  render() {
    const { assignment, editAssignment, deleteAssignment } = this.props;
    const gradeStyle = assignment.actual_score ? "score" : "noscore";
    return (
      <div className="assignment-form">
        <div className="row">
          <div className="col-sm-10">
            <h5>{assignment.title}</h5>
            <div>{assignment.description}</div>
            <a
              href="#"
              onClick={this.redirectToProjectLink}
              className="projectLink"
            >
              Project Link
            </a>
          </div>
          <div className="col-sm-2">
            <div className={gradeStyle}>{this.getScore()}</div>
          </div>
        </div>
        <div className="buttonPanel">
          <div className="row">
            <div className="col-sm-1">
              <button
                id={assignment._id}
                type="submit"
                className="btn btn-secondary"
                onClick={editAssignment}
              >
                Edit
              </button>
            </div>
            <div className="col-sm-1">
              <button
                id={assignment._id}
                type="submit"
                className="btn btn-danger"
                onClick={deleteAssignment}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Assignment.propTypes = {
  assignment: PropTypes.object,
  deleteAssignment: PropTypes.func
};

export default withRouter(Assignment);
