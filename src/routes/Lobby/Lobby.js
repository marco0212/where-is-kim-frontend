import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/Container";

export default function Lobby({ isLogin, login }) {
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
      <LoginBox>{isLogin ? "Team List" : <LoginForm login={login} />}</LoginBox>
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
  flex: 1;
  background-color: #323232;
  color: #eee;
  padding: 15px 30px;
  border-radius: 4px;
`;
