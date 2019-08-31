import React, { Component } from "react";
import Graded from "./Graded";
import Container from "react-bootstrap/Container";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";
import { getGradedAssignments, editAssignment } from "../../api/assignments";
import { Redirect } from "react-router-dom";

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
    const isLoggedIn = loggedInUser.id ? true : false;
    const isAdmin = loggedInUser.isAdmin ? true : false;
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
        <Layout isLoggedIn={isLoggedIn} isAdmin={loggedInUser.isAdmin}></Layout>
        {isLoggedIn ? (
          isAdmin ? (
            <Container>{assignments}</Container>
          ) : (
            <Redirect to="/"></Redirect>
          )
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </React.Fragment>
    );
  }
}
export default GradedList;
