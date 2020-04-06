import React from "react";
import LoginForm from "../../components/LoginForm/Container";

export default function Lobby({ isLogin, login }) {
  return (
    <>
      <div>
        <div>
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
        </div>
        <div>{isLogin ? "Team List" : <LoginForm login={login} />}</div>
      </div>
    </>
  );
}
