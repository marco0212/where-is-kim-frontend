import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Container";
import Analitics from "../Analitics/Container";
import Participants from "../Participants/Container";
import Settings from "../Settings/Container";
import styled from "styled-components";

export default function Admin() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/team/:name/admin/" component={Dashboard} />
        <Route path="/team/:name/admin/analitics" component={Analitics} />
        <Route path="/team/:name/admin/participants" component={Participants} />
        <Route path="/team/:name/admin/settings" component={Settings} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  padding: 30px 30px 0;
`;
