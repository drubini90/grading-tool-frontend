import React, { Component } from "react";
import Assignment from "./Assignment";
import Container from "react-bootstrap/Container";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";
import { getAssignments, deleteAssignment } from "../../api/assignments";
import { withRouter } from "react-router";

class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      assignmentsList: []
    };
    this.getAssignments = this.getAssignments.bind(this);
    this.deleteAssignment = this.deleteAssignment.bind(this);
    this.editAssignment = this.editAssignment.bind(this);
  }
  async componentDidMount() {
    if (this.state.loggedInUser.token) {
      await this.getAssignments();
    }
  }
  editAssignment(e) {
    const { history } = this.props;
    history.push("/editAssignment/" + e.target.id);
  }
  async deleteAssignment(e) {
    await deleteAssignment(e.target.id);
    await this.getAssignments();
  }
  getAssignments = async () => {
    const assignments = await getAssignments();
    this.setState({
      assignmentsList: assignments.response ? assignments.response : []
    });
  };
  render() {
    const { loggedInUser, assignmentsList } = this.state;

    const isLoggedIn = loggedInUser.id ? true : false;
    const assignments = assignmentsList.map((assignment, id) => {
      return (
        <Assignment
          assignment={assignment}
          editAssignment={this.editAssignment}
          deleteAssignment={this.deleteAssignment}
          key={id}
        />
      );
    });
    return (
      <React.Fragment>
        <Layout isLoggedIn={isLoggedIn} isAdmin={loggedInUser.isAdmin}></Layout>
        <Container>{assignments}</Container>
      </React.Fragment>
    );
  }
}
export default withRouter(Assignments);
