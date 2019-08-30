import React from "react";
import PropTypes from "prop-types";
import * as storage from "../../helpers/local-storage";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo()
    };
  }
  render() {
    let gradeStyle, grade;
    const { studentInfo } = this.props;
    grade = studentInfo.grade;
    if (studentInfo.grade) {
      if (grade > 90) gradeStyle = "grade_greater90";
      else if (grade > 80) gradeStyle = "grade_greater80";
      else if (grade > 50) gradeStyle = "grade_greater50";
      else {
        gradeStyle = "grade_less50";
      }
      grade = studentInfo.grade + "/100";
    } else {
      gradeStyle = "noscore";
      grade = "Grade TBD";
    }

    return (
      <div class="student-form">
        <div class="row">
          <div class="col-sm-10">
            <div class="row">
              <h5>
                {studentInfo.first_name} {studentInfo.last_name}
              </h5>
              <div> - {studentInfo.email}</div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class={gradeStyle}>{grade}</div>
          </div>
        </div>
      </div>
    );
  }
}

Student.propTypes = {
  studentInfo: PropTypes.object.isRequired
};

export default Student;
