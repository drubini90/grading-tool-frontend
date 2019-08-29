import React, { Component } from "react";
import PropTypes from "prop-types";
import Assignment from "./Assignment";
import Container from "react-bootstrap/Container";
import Layout from "../shared/Layout";
import * as storage from "../../helpers/local-storage";
import { getAssignments } from "../../api/assignments";

class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      assignmentsList: []
    };
    this.getAssignments = this.getAssignments.bind(this);
  }
  async componentDidMount() {
    if (this.state.loggedInUser.token) {
      await this.getAssignments();
    }
  }
  getAssignments = async () => {
    const assignments = await getAssignments();
    this.setState({
      assignmentsList: assignments.response ? assignments.response : []
    });
  };
  render() {
    const { loggedInUser, assignmentsList } = this.state;
    const { logoutUser } = this.props;

    const isLoggedIn = loggedInUser.id ? true : false;
    const assignments = assignmentsList.map((data, id) => {
      return <Assignment title={data.title} key={id} />;
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

Assignments.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
export default Assignments;
