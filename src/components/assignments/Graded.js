import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Graded extends React.Component {
  constructor() {
    super();
    this.state = {
      actual_score: null,
      max_score: null
    };
    this.saveAssignment = this.saveAssignment.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
  }
  componentDidMount() {
    if (this.state.actual_score === null) {
      this.setState({
        actual_score: this.props.assignment.actual_score,
        max_score: this.props.assignment.max_score
      });
    }
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
                  value={this.state.actual_score}
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
                  value={this.state.max_score}
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
            <a
              href="#"
              onClick={this.redirectToProjectLink}
              class="projectLink"
            >
              Project Link
            </a>
          </div>
          <div class="col-sm-3">
            <button
              type="submit"
              className="btn btn-secondary saveAssignment"
              onClick={this.saveAssignment}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Graded.propTypes = {
  assignment: PropTypes.object,
  editAssignment: PropTypes.func
};

export default withRouter(Graded);
