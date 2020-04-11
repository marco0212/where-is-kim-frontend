import React from "react";
import styled from "styled-components";

export default function TeamAside({ teamPic, teamName, participants }) {
  return (
    <Aside>
      <LogoWrap>
        <ImageWrap>
          <img src={teamPic} alt={teamName} />
        </ImageWrap>
        <h3>{teamName}</h3>
      </LogoWrap>
      <UserList>
        {participants.map((part) => (
          <li key={part.id}>
            <strong>{part.username}</strong>
          </li>
        ))}
      </UserList>
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  padding: 30px 0 30px 30px;
  background-color: #3f0e40;
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  h3 {
    margin-bottom: 0;
  }
`;
const ImageWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  & img {
    width: 100%;
  }
`;
const UserList = styled.ul`
  & li {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.6;
    &:before {
      content: "";
      display: inline-block;
      margin-right: 10px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
  }
`;
