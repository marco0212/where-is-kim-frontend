import React from "react";
import { Link } from "react-router-dom";
import FormField from "../FormField";
import styled from "styled-components";

export default function LoginForm({ onSubmit, email, password }) {
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <FormField title="Email" type="email" controller={email} />
        <FormField title="Password" type="password" controller={password} />
        <ButtonWrapper>
          <button>Login</button>
          <Link to="/signup">Signup</Link>
          <Link>Signup with kakako</Link>
        </ButtonWrapper>
      </form>
    </>
  );
}

const ButtonWrapper = styled.div`
  margin-top: 21px;
  display: flex;
  & button,
  a {
    text-align: center;
    border: 1px solid #eee;
    border-radius: 4px;
    height: 35px;
    line-height: 33px;
    padding: 0 20px;
    margin-right: 15px;
  }
`;
