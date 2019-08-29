import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import Layout from "../shared/Layout";
import Container from "react-bootstrap/Container";
import * as storage from "../../helpers/local-storage";
import { getAssignment, editAssignment } from "../../api/assignments";

class EditAssignment extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      title: null,
      description: null,
      project_link: null
    };
    this.setInputValue = this.setInputValue.bind(this);
    this.editAssignment = this.editAssignment.bind(this);
  }
  setInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  async editAssignment() {
    const { history } = this.props;
    const { id } = this.props.match.params;
    const assignmentInfo = {
      title: this.state.title,
      description: this.state.description,
      project_link: this.state.projectLink
    };
    await editAssignment(id, assignmentInfo);
    history.push("/");
  }
  async componentDidMount() {
    if (!this.state.title) {
      const { id } = this.props.match.params;
      const assignment = await getAssignment(id);
      if (assignment) {
        this.setState({
          title: assignment.response.title,
          description: assignment.response.description,
          projectLink: assignment.response.project_link
        });
      }
    }
  }
  render() {
    const {
      loggedInUser,
      logoutUser,
      title,
      description,
      projectLink
    } = this.state;
    const isLoggedIn = loggedInUser.id ? true : false;

    return (
      <React.Fragment>
        <Layout
          isLoggedIn={isLoggedIn}
          isAdmin={loggedInUser.isAdmin}
          logoutUser={logoutUser}
        ></Layout>
        <Container>
          <div className="form-group">
            <label htmlFor="title">Assignment Title</label>
            <input
              className="form-control"
              id="title"
              onChange={this.setInputValue}
              name="title"
              type="text"
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="projectLink">Project Link</label>
            <input
              className="form-control"
              id="projectLink"
              onChange={this.setInputValue}
              name="projectLink"
              value={projectLink}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <input
              className="form-control"
              id="description"
              onChange={this.setInputValue}
              name="description"
              value={description}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.editAssignment}
          >
            Submit
          </button>
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(EditAssignment);
