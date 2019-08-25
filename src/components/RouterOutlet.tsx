import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import Stalk from './Stalk';

const RouterOutlet = (props: any) => (
  <Switch>
    <Route path="/" component={Home} />
    <Route exact path="/" component={Stalk} />
    <Redirect to="/" />
  </Switch>
);

export default RouterOutlet;
