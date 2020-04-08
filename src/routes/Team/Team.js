import React from "react";
import styled from "styled-components";
import TeamAside from "../../components/TeamAside";
import TeamHeader from "../../components/TeamHeader";
import { Switch, Route } from "react-router-dom";

export default function Team({
  name = "Vanilla coding",
  profilePic = "https://dummyimage.com/600x600/000/fff",
  participants = [],
}) {
  return (
    <Wrapper>
      <TeamAside
        teamPic={profilePic}
        teamName={name}
        participants={participants}
      />
      <TeamHeader teamName={name} />
      <Main>
        <Switch>
          <Route exact path="/team/:name">
            Threads
          </Route>
          <Route path="/team/:name/record">Record</Route>
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
