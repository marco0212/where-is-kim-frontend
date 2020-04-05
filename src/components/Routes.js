import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import AuthBeforeLogin from '../routes/Auth/AuthBeforeLogin';
import AuthAfterLogin from '../routes/Auth/AuthAfterLogin';
import Signup from '../routes/Signup';

const BeforeLogin = () => {
  return (
    <Switch>
      <Route path="/" exact component={AuthBeforeLogin} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/" />
    </Switch>
  );
};
const AfterLogin = () => {
  return (
    <Switch>
      <Route path="/" exact component={AuthAfterLogin} />
    </Switch>
  );
};

export default function Routes({ isLogin }) {
  return (
    <HashRouter>
      {
        isLogin ? <AfterLogin /> : <BeforeLogin />
      }
    </HashRouter>
  );
}
