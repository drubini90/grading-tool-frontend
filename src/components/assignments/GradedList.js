import React, { Component } from "react";
import PropTypes from "prop-types";
import Graded from "./Graded";
import Container from "react-bootstrap/Container";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";
import { getGradedAssignments, editAssignment } from "../../api/assignments";

class GradedList extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      gradedAssignmentsList: []
    };
    this.gradedAssignments = this.gradedAssignments.bind(this);
    this.editAssignment = this.editAssignment.bind(this);
  }
  async componentDidMount() {
    if (this.state.loggedInUser.token) {
      await this.gradedAssignments();
    }
  }
  async gradedAssignments() {
    const gradedAssignmentsList = await getGradedAssignments();
    if (gradedAssignmentsList && gradedAssignmentsList.response) {
      this.setState({
        gradedAssignmentsList: gradedAssignmentsList.response
      });
    }
  }
  async editAssignment(id, actual_score, max_score) {
    const assignmentScore = {
      actual_score: actual_score,
      max_score: max_score
    };
    await editAssignment(id, assignmentScore);
    await this.gradedAssignments();
  }
  render() {
    const { loggedInUser, gradedAssignmentsList } = this.state;
    const { logoutUser } = this.props;

    const isLoggedIn = loggedInUser.id ? true : false;
    const assignments = gradedAssignmentsList.map((assignment, id) => {
      return (
        <Graded
          assignment={assignment}
          editAssignment={this.editAssignment}
          key={id}
        />
      );
    });
    return (
      <React.Fragment>
        <Layout
          isLoggedIn={isLoggedIn}
          isAdmin={loggedInUser.isAdmin}
          logoutUser={logoutUser}
        ></Layout>
        <Container>{assignments}</Container>
      </React.Fragment>
    );
  }
}

GradedList.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
export default GradedList;
