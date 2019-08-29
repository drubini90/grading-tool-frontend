import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Container from "react-bootstrap/Container";

class Ungraded extends React.Component {
  constructor() {
    super();
    this.state = {
      actual_score: null,
      max_score: null
    };
    this.saveAssignment = this.saveAssignment.bind(this);
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
      <React.Fragment>
        <Container>
          <div>{assignment.title}</div>
          <div>{assignment.description}</div>
          <div>{assignment.projectLink}</div>
          <input
            className="form-control"
            id="actual_score"
            onChange={this.setInputValue}
            name="actual_score"
            type="text"
            required
          />
          <label>out of</label>
          <input
            className="form-control"
            id="max_score"
            onChange={this.setInputValue}
            name="max_score"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.saveAssignment}
          >
            Save
          </button>
        </Container>
      </React.Fragment>
    );
  }
}

Ungraded.propTypes = {
  assignment: PropTypes.object,
  editAssignment: PropTypes.func
};

export default withRouter(Ungraded);
