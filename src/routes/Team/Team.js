import React from "react";
import styled from "styled-components";
import TeamAside from "../../components/TeamAside";
import TeamHeader from "../../components/TeamHeader";
import { Switch, Route } from "react-router-dom";

export default function Team() {
  return (
    <Wrapper>
      <TeamAside
        teamPic="https://dummyimage.com/600x600/000/fff"
        teamName="Vanilla"
        participants={[]}
      />
      <TeamHeader teamName={"Vanilla"} />
      <Switch>
        <Route exact path="/team/:name">
          Threads
        </Route>
        <Route path="/team/:name/record">Record</Route>
        <Route path="/team/:name/admin">Admin route</Route>
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  & aside {
    grid-row: 1/3;
  }
`;
