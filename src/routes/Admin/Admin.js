import React from "react";
import { Switch, Route } from "react-router-dom";

export default function Admin() {
  return (
    <Switch>
      <Route exact path="/team/:name/admin/">
        Dashboard
      </Route>
      <Route path="/team/:name/admin/analitics">Analitics</Route>
      <Route path="/team/:name/admin/members">members</Route>
      <Route path="/team/:name/admin/settings">settings</Route>
    </Switch>
  );
}
