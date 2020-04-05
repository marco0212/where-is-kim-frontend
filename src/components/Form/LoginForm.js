import React, { useState } from 'react';
import Form from './Form';

export default function LoginForm({ getToken }) {
  const [email, setEmail] = useState('inyeop0212@gmail.com');
  const [password, setPassword] = useState('asdf');
  const loginHandler = (e) => {
    e.preventDefault();
    getToken(email, password);
  }
  const props = {
    title: 'Login',
    onSubmit: loginHandler,
    fields: [
      {
        title: 'Email',
        type: 'email',
        value: email,
        onChange: setEmail,
        placeholder: 'Type your Account email'
      },
      {
        title: 'Password',
        type: 'password',
        value: password,
        onChange: setPassword,
        placeholder: 'Type Password'
      }
    ],
    buttonText: 'Login'
  };

  return <Form {...props} />;
}