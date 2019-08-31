import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <Navbar bg="info" variant="dark">
        <Navbar.Brand href="/">
          <h3>Assignment Tracker</h3>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
