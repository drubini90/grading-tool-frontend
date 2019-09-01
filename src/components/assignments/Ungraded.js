import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Ungraded extends React.Component {
  constructor() {
    super();
    this.state = {
      actual_score: null,
      max_score: null
    };
    this.saveAssignment = this.saveAssignment.bind(this);
    this.redirectToProjectLink = this.redirectToProjectLink.bind(this);
  }
  redirectToProjectLink() {
    const { assignment } = this.props;
    window.location.assign(assignment.project_link);
  }
  setInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  async saveAssignment() {
    await this.props.editAssignment(
      this.props.assignment._id,
      this.state.actual_score,
      this.state.max_score
    );
    this.setState({
      actual_score: null,
      max_score: null
    });
  }
  render() {
    const { assignment } = this.props;
    return (
      <div class="assignment-form">
        <form onSubmit={this.saveAssignment}>
          <div class="row">
            <div class="col-sm-9">
              <h5>{assignment.title}</h5>
              <div>{assignment.description}</div>
            </div>
            <div class="col-sm-3">
              <div class="row">
                <div class="col-sm-4">
                  <input
                    className="scorebox"
                    id="actual_score"
                    onChange={this.setInputValue}
                    name="actual_score"
                    type="number"
                    min="0"
                    max="100"
                    required
                  />
                </div>
                <div class="col-sm-4">
                  <label>out of</label>
                </div>
                <div class="col-sm-4">
                  <input
                    className="scorebox"
                    id="max_score"
                    onChange={this.setInputValue}
                    name="max_score"
                    type="number"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              <button
                type="button"
                className="buttonlink"
                onClick={this.redirectToProjectLink}
              >
                Project Link
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="submit"
                className="btn btn-secondary saveAssignment"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Ungraded.propTypes = {
  assignment: PropTypes.object,
  editAssignment: PropTypes.func
};

export default withRouter(Ungraded);
