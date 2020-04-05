import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <fieldset>
          <legend>Full name</legend>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input type="email" />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" />
        </fieldset>
        <fieldset>
          <legend>Confirm password</legend>
          <input type="password" />
        </fieldset>
        <fieldset>
          <legend>Your picture</legend>
          <input type="file" />
        </fieldset>
        <p>
          <button>Signup</button>
          <Link to="/">Go back</Link>
        </p>
      </form>
    </div>
  );
}