import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/Container";
import TeamList from "../../components/TeamList";
import { ButtonWrap } from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Lobby({ isLogin, teams, login }) {
  return (
    <Wrapper>
      <WelcomeBox>
        <h1>김대리 어딨어?</h1>
        <p>
          A helper function to generate a special StyledComponent that handles
          global styles. Normally, styled components are automatically scoped to
          a local CSS class and therefore isolated from other components
        </p>
      </WelcomeBox>
      <LoginBox>
        {isLogin ? (
          <>
            <h3>Your Teams</h3>
            <TeamList teams={teams} />
            <TeamButtonWrap>
              <Link to="/team/new">Create Team</Link>
              <button>Logout</button>
            </TeamButtonWrap>
          </>
        ) : (
          <>
            <h3>Login</h3>
            <LoginForm login={login} />
          </>
        )}
      </LoginBox>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  width: 800px;
`;
const WelcomeBox = styled.div`
  width: 50%;
  margin-right: 30px;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #323232;
  color: #eee;
  height: 320px;
  padding: 15px 30px;
  border-radius: 4px;
`;
const TeamButtonWrap = styled(ButtonWrap)`
  & button:last-child {
    background-color: #dd2c00;
  }
`;
