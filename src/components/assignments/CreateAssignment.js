import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "../shared/Layout";
import Container from "react-bootstrap/Container";
import * as storage from "../../helpers/local-storage";
import { createAssignment } from "../../api/assignments";

class CreateAssignment extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: storage.getUserInfo(),
      title: null,
      description: null,
      project_link: null
    };
    this.setInputValue = this.setInputValue.bind(this);
    this.createAssignment = this.createAssignment.bind(this);
  }
  setInputValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  async createAssignment() {
    const { history } = this.props;
    const assignmentInfo = {
      title: this.state.title,
      description: this.state.description,
      project_link: this.state.projectLink
    };
    await createAssignment(assignmentInfo);
    history.push("/");
  }
  render() {
    const { loggedInUser } = this.state;
    const logoutUser = this.props.location.state.logoutUser;
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
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.createAssignment}
          >
            Submit
          </button>
        </Container>
      </React.Fragment>
    );
  }
}
// CreateAssignment.propTypes = {
//   logoutUser: PropTypes.func.isRequired
// };
export default CreateAssignment;
