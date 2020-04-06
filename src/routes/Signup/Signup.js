import React from "react";
import FormField from "../../components/FormField";
import { ButtonWrapper } from "../../components/LoginForm/LoginForm";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Signup({ onSubmit, username, email, password }) {
  return (
    <Wrapper>
      <h3>Signup</h3>
      <form onSubmit={onSubmit}>
        <FormField title="Usern name" type="text" controller={username} />
        <FormField title="Email" type="email" controller={email} />
        <FormField title="Password" type="password" controller={password} />
        <ButtonWrapper>
          <button>Resigter</button>
          <Link to="/">Back</Link>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 960px;
  margin: auto;
`;
