import React from "react";
import styled from "styled-components";
import UserList from "../UserList/UserList";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function TeamAside({ teamPic, teamName, participants }) {
  return (
    <Aside>
      <LogoWrap>
        <ImageWrap>
          {teamPic ? (
            <img src={teamPic} alt={teamName} />
          ) : (
            <span role="img" aria-label={teamName}>
              😟
            </span>
          )}
        </ImageWrap>
        <h3>{teamName}</h3>
      </LogoWrap>
      <UserList users={participants} />
      <Button to="/">
        <FaSignOutAlt /> Back to Lobby
      </Button>
    </Aside>
  );
}

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  padding: 30px 25px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 3px solid #fff;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  & img {
    width: 100%;
  }
  & span {
    font-size: 35px;
  }
`;
const Button = styled(Link)`
  margin-top: auto;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #ebebeb;
  & svg {
    margin-right: 10px;
  }
`;
