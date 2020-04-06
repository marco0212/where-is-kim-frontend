import React from "react";
import { Link } from "react-router-dom";
import FormField from "../FormField";

export default function LoginForm({ onSubmit, email, password }) {
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <FormField title="Email" type="email" controller={email} />
        <FormField title="Password" type="password" controller={password} />
        <div>
          <button>Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </>
  );
}
