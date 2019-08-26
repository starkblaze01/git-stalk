import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import Stalk from './Stalk';
import { withRouter } from 'react-router-dom';

const RouterOutlet = (props: any) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/stalk/:userId" component={Stalk} />
    <Redirect to="/" />
  </Switch>
);

export default withRouter(RouterOutlet);
