import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Container from "react-bootstrap/Container";

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
    const { actual_score, max_score } = this.state;
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
            value={actual_score}
            required
          />
          <label>out of</label>
          <input
            className="form-control"
            id="max_score"
            onChange={this.state.setInputValue}
            name="max_score"
            value={max_score}
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

Graded.propTypes = {
  assignment: PropTypes.object,
  editAssignment: PropTypes.func
};

export default withRouter(Graded);
