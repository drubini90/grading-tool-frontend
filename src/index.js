import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SignupForm from "./components/auth/SignupForm";
import Students from "./components/students/Students";
import CreateAssignment from "./components/assignments/CreateAssignment";
import EditAssignment from "./components/assignments/EditAssignment";
import AssignmentLayout from "./components/shared/AssignmentLayout";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={App} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/assignments" component={AssignmentLayout} />
      <Route path="/students" component={Students} />
      <Route exact path="/createassignments" component={CreateAssignment} />
      <Route exact path="/editassignment/:id" component={EditAssignment} />
      <Route component={App} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
