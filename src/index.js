import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SignupForm from "./components/auth/SignupForm";
import Assignments from "./components/assignments/Assignments";
import Students from "./components/students/Students";
import CreateAssignment from "./components/assignments/CreateAssignment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={App} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/assignments" component={Assignments} />
      <Route path="/students" component={Students} />
      <Route path="/assignments/new" component={CreateAssignment} />
      <Route path="/assignments/:id/edit" component={CreateAssignment} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
