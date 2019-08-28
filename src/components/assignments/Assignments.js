import React, { Component } from "react";
import PropTypes from "prop-types";
import Assignment from "./Assignment";
import Container from "react-bootstrap/Container";

class Assignments extends Component {
  render() {
    const { assignments } = this.props;
    const assignmentsList = assignments.map((data, id) => {
      return <Assignment title={data.title} key={id} />;
    });
    return <Container>{assignmentsList}</Container>;
  }
}

Assignments.propTypes = {
  assignments: PropTypes.array
};
export default Assignments;
