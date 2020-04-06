import React from "react";
import FormField from "../../components/FormField";
import { Link } from "react-router-dom";

export default function Signup({ onSubmit, username, email, password }) {
  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={onSubmit}>
        <FormField title="Usern name" type="text" controller={username} />
        <FormField title="Email" type="email" controller={email} />
        <FormField title="Password" type="password" controller={password} />
        <div>
          <button>Resigter</button>
          <Link to="/">Back</Link>
        </div>
      </form>
    </div>
  );
}
