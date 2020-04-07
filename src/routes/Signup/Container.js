import React from "react";
import Signup from "./Signup";
import useInput from "../../hooks/useInput";
import { signupAPI } from "../../api";

export default function SignupContainer({ history }) {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await signupAPI(
      username.value,
      email.value,
      password.value
    );
    const { result } = await response.json();

    if (result === "ok") {
      history.push("/");
    }
  };

  return (
    <Signup
      username={username}
      email={email}
      password={password}
      onSubmit={onSubmit}
    />
  );
}
