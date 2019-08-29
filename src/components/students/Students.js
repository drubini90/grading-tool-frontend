import React, { Component } from "react";
import PropTypes from "prop-types";
import Student from "./Student";
import Layout from "../shared/Layout";
import Container from "react-bootstrap/Container";
import * as storage from "../../helpers/local-storage";
import { getAllStudents } from "../../api/students";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      studentsList: []
    };
    this.getStudentsInfo = this.getStudentsInfo.bind(this);
  }
  async componentDidMount() {
    if (this.state.loggedInUser.token) {
      await this.getStudentsInfo();
    }
  }
  getStudentsInfo = async () => {
    const studentsList = await getAllStudents();
    this.setState({
      studentsList: studentsList.response
    });
  };
  render() {
    const { loggedInUser, studentsList } = this.state;
    const { logoutUser } = this.props;
    const isLoggedIn = loggedInUser.id ? true : false;
    const students = studentsList.map(studentInfo => {
      return <Student studentInfo={studentInfo} />;
    });
    return (
      <React.Fragment>
        <Layout
          isLoggedIn={isLoggedIn}
          isAdmin={loggedInUser.isAdmin}
          logoutUser={logoutUser}
        ></Layout>
        <Container>{students}</Container>
      </React.Fragment>
    );
  }
}
Students.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
export default Students;
