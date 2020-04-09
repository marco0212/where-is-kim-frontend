import React from "react";
import styled from "styled-components";
import TeamAside from "../../components/TeamAside";
import TeamHeader from "../../components/TeamHeader";
import { Switch, Route } from "react-router-dom";
import Threads from "../Threads";
import ThreadList from "../../components/ThreadList/ThreadList";

export default function Team({
  displayName,
  profilePic,
  participants,
  //threads,
}) {
  const threads = [
    {
      date: "2020-04-09",
      items: [
        {
          id: "asdf",
          text: "Jeong 출근 완료",
          likes: [],
          comments: [],
          createdBy: "Jeong",
          createdAt: "2020-04-09T05:14:31.826Z",
        },
      ],
    },
  ];
  return (
    <Wrapper>
      <TeamAside
        teamPic={profilePic}
        teamName={displayName}
        participants={participants}
      />
      <TeamHeader teamName={displayName} />
      <Main>
        <Switch>
          <Route exact path="/team/:name">
            <Threads threads={threads} />
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
