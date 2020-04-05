import React, { useState } from 'react';
import Auth from "./Auth";

export default function AuthBeforeLogin() {
  const [email, setEmail] = useState('inyeop0212@gmail.com');
  const [password, setPassword] = useState('asdf');
  const loginHandler = async (e) => {
    e.preventDefault();
  }

  return (
    <Auth
      isLogedIn={false}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      login={loginHandler}
    />
  );
}
