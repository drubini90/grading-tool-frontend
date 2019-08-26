import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import home from "../../images/home.png";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt="myLogo"
            src={home}
            className="d-inline-block align-top logo"
          />
          {" ASSIGNMENT TRACKER "}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
