import React, { Component } from "react";
import PropTypes from "prop-types";
import Ungraded from "./Ungraded";
import Container from "react-bootstrap/Container";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";
import { getUngradedAssignments, editAssignment } from "../../api/assignments";

class UngradedList extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      unGradedAssignmentsList: []
    };
    this.unGradedAssignments = this.unGradedAssignments.bind(this);
    this.editAssignment = this.editAssignment.bind(this);
  }
  async componentDidMount() {
    if (this.state.loggedInUser.token) {
      await this.unGradedAssignments();
    }
  }
  async unGradedAssignments() {
    const unGradedAssignmentsList = await getUngradedAssignments();
    if (unGradedAssignmentsList && unGradedAssignmentsList.response) {
      this.setState({
        unGradedAssignmentsList: unGradedAssignmentsList.response
      });
    }
  }
  async editAssignment(id, actual_score, max_score) {
    const assignmentScore = {
      actual_score: actual_score,
      max_score: max_score
    };
    await editAssignment(id, assignmentScore);
    await this.unGradedAssignments();
  }
  render() {
    const { loggedInUser, unGradedAssignmentsList } = this.state;
    const { logoutUser } = this.props;

    const isLoggedIn = loggedInUser.id ? true : false;
    const assignments = unGradedAssignmentsList.map((assignment, id) => {
      return (
        <Ungraded
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

UngradedList.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
export default UngradedList;
