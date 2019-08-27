import React, { Component } from "react";
import PropTypes from "prop-types";
import Student from "./Student";
import Container from "react-bootstrap/Container";

class Students extends Component {
  componentDidMount() {
    const { studentsList } = this.props;
    if (studentsList === null) {
    }
  }

  render() {
    const { studentsList } = this.props;

    const students = studentsList.map(studentInfo => {
      return <Student studentInfo={studentInfo} />;
    });
    return <Container>{students}</Container>;
  }
}
Students.propTypes = {
  studentsList: PropTypes.array.isRequired
};
export default Students;
