import React from "react";
import styled from "styled-components";

export default function TeamList({ teams }) {
  return (
    <Wrapper>
      {teams.length ? (
        teams.map((team) => {
          return <li>asdf</li>;
        })
      ) : (
        <li>There is no team</li>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  background-color: #fff;
  flex: 1;
  border-radius: 4px;
`;
