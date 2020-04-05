import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField'
import Button from '../../components/Button';

export default function Lobby({
  isLogin,
  getToken
}) {
  const [email, setEmail] = useState('inyeop0212@gmail.com');
  const [password, setPassword] = useState('asdf');
  const loginHandler = (e) => {
    e.preventDefault();
    getToken(email, password);
  }
  return (
    <div>
      <h1>Title</h1>
      <p>Your component is responsible for both fetching data and presenting it. There’s nothing “wrong” with this but you miss out on a few benefits of React.
      Reusability
      CommentList can’t be reused unless under the exact same circumstances.
      Data structure
      Your markup components should state expectations of the data they require. PropTypes are great for this.
      Our component is opinionated about data structure but has no way of expressing those opinions. This component will break silently if the json endpoint change.</p>
      <div>
        {
          isLogin ? (
            'LoggedIn'
          ) : (
            <>
              <h3>Login</h3>
              <form onSubmit={loginHandler}>
                <FormField
                  title="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="Type your Account Email"
                />
                <FormField
                  title="Password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  placeholder="Password"
                />
                <p>
                  <Button text="Login" />
                  <Link to="/signup">Signup</Link>
                </p>
              </form>
            </>
          )
        }
      </div>
    </div>
  );
}
