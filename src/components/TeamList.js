import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TeamList({ teams }) {
  return (
    <Wrapper>
      {teams.length ? (
        teams.map((team) => {
          const { id, name } = team;
          return (
            <li key={id}>
              <Link to="/">{name}</Link>
            </li>
          );
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
  overflow-y: scroll;
  & li {
    color: #333;
    font-size: 18px;
    padding: 5px;
    border-bottom: 1px solid #eee;
    & a {
      display: block;
    }
  }
`;
