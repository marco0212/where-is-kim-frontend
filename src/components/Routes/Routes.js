import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import Lobby from '../../routes/Lobby/Container';
import Signup from '../../routes/Signup';


const BeforeLogin = () => {
  return (
    <Switch>
      <Route path="/" exact component={Lobby} />
      <Route path="/signup" exact component={Signup} />
      <Redirect to="/" />
    </Switch>
  );
};
const AfterLogin = () => {
  return (
    <Switch>
      <Route path="/" exact component={Lobby}/>
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
