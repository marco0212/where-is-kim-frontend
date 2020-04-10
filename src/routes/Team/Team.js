import React from "react";
import styled from "styled-components";
import TeamAside from "../../components/TeamAside";
import TeamHeader from "../../components/TeamHeader";
import { Switch, Route } from "react-router-dom";
import Threads from "../Threads";
import Record from "../Record/Container";

export default function Team({
  name,
  displayName,
  profilePic,
  participants,
  threads,
}) {
  return (
    <Wrapper>
      <TeamAside
        teamPic={profilePic}
        teamName={displayName}
        participants={participants}
      />
      <TeamHeader teamName={name} />
      <Main>
        <Switch>
          <Route exact path="/team/:name">
            <Threads threads={threads} />
          </Route>
          <Route path="/team/:name/record">
            <Record />
          </Route>
          <Route path="/team/:name/admin">Admin route</Route>
        </Switch>
      </Main>
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
const Main = styled.main`
  overflow-y: scroll;
  padding-bottom: 30px;
`;
