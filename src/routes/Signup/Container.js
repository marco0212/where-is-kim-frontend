import React from "react";
import { connect } from "react-redux";
import Signup from "./Signup";
import useInput from "../../hooks/useInput";

function SignupContainer() {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username.value, email.value, password.value);
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
