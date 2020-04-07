import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Lobby from "./Lobby/Container";
import Signup from "./Signup/Container";
import TeamRoom from "./TeamRoom";
import RegisterTeam from "./RegisterTeam/Container";
import Confirm from "./Confirm";

const BeforeLogin = () => {
  return (
    <Switch>
      <Route exact path="/" component={Lobby} />
      <Route path="/signup" component={Signup} />
      <Route path="/verify/:token" component={Confirm} />
      <Redirect to="/" />
    </Switch>
  );
};

const AfterLogin = () => {
  return (
    <Switch>
      <Route exact path="/" component={Lobby} />
      <Route path="/team/new" component={RegisterTeam} />
      <Route component={TeamRoom} />
      <Redirect to="/" />
    </Switch>
  );
};

export default function Routes({ isLogin }) {
  return isLogin ? <AfterLogin /> : <BeforeLogin />;
}
