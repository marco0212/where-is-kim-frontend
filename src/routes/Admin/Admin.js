import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Container";
import Analitics from "../Analitics/Container";
import Participants from "../Participants/Container";
import Settings from "../Settings/Container";

export default function Admin() {
  return (
    <Switch>
      <Route exact path="/team/:name/admin/" component={Dashboard} />
      <Route path="/team/:name/admin/analitics" component={Analitics} />
      <Route path="/team/:name/admin/members" component={Participants} />
      <Route path="/team/:name/admin/settings" component={Settings} />
    </Switch>
  );
}
