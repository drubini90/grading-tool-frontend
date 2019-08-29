import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import SignupForm from "./components/auth/SignupForm";
import Assignments from "./components/assignments/Assignments";
import Students from "./components/students/Students";
import CreateAssignment from "./components/assignments/CreateAssignment";
import EditAssignment from "./components/assignments/EditAssignment";
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
      <Route exact path="/createassignments" component={CreateAssignment} />
      <Route exact path="/editassignment/:id" component={EditAssignment} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
