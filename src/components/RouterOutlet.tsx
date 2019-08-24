import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";

const RouterOutlet = (props: any) => (
  <Switch>
    <Route path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

export default RouterOutlet;
