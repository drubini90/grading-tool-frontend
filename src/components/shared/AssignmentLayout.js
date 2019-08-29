import React from "react";
import { Route, Switch } from "react-router";
import UngradedList from "../assignments/UngradedList";
import GradedList from "../assignments/GradedList";

export default () => {
  return (
    <Switch>
      <Route path="/assignments/ungraded" component={UngradedList} />
      <Route path="/assignments/graded" component={GradedList} />
    </Switch>
  );
};
