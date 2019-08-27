import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

class Student extends React.Component {
  render() {
    const { studentInfo } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col>
            <h3>
              {studentInfo.first_name} {studentInfo.last_name}
            </h3>
          </Col>
          <Col>
            <div>{studentInfo.email}</div>
          </Col>
          <Col>
            <div>{studentInfo.grade}</div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

Student.propTypes = {
  studentInfo: PropTypes.object.isRequired
};

export default Student;
