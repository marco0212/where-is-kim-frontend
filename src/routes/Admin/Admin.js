import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Container";
import Analytics from "../Analytics/Container";
import Participants from "../Participants/Container";
import styled from "styled-components";

export default function Admin() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/team/:name/admin/" component={Dashboard} />
        <Route path="/team/:name/admin/analytics" component={Analytics} />
        <Route path="/team/:name/admin/participants" component={Participants} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  padding: 30px 30px 0;
`;
