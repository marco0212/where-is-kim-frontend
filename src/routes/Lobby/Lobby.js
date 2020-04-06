import React from "react";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/Container";

export default function Lobby({ isLogin, login }) {
  return (
    <>
      <Wrapper>
        <WelcomeBox>
          <h1>김대리 어딨어?</h1>
          <p>
            A helper function to generate a special StyledComponent that handles
            global styles. Normally, styled components are automatically scoped
            to a local CSS class and therefore isolated from other components.
            In the case of createGlobalStyle, this limitation is removed and
            things like CSS resets or base stylesheets can be applied. ARGUMENTS
            DESCRIPTION 1. TaggedTemplateLiteral A tagged template literal with
            your CSS and interpolations. Returns a StyledComponent that does not
            accept children. Place it at the top of your React tree and the
            global styles will be injected when the component is "rendered".
          </p>
        </WelcomeBox>
        <LoginBox>
          {isLogin ? "Team List" : <LoginForm login={login} />}
        </LoginBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  width: calc(100% - 100px);
  margin: auto;
  display: flex;
  height: 100%;
  align-items: center;
  & > div {
    flex: 1;
  }
`;
const WelcomeBox = styled.div`
  margin-right: 50px;
  & h1 {
    font-size: 40px;
  }
`;
const LoginBox = styled.div`
  border: 2px solid #eee;
  padding: 20px 50px;
  max-width: 500px;
`;
