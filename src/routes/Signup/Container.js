import React from "react";
import { connect } from "react-redux";
import Signup from "./Signup";
import useInput from "../../hooks/useInput";
import { signup, getToken } from "../../thunks";

function SignupContainer({ signup, history }) {
  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
    signup(username.value, email.value, password.value);
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
const mapDispatchToProps = (dispatch) => ({
  signup: (username, email, password) =>
    dispatch(signup(username, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
