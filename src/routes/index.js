import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Lobby from './Lobby';
import Signup from './Signup';
import TeamRoom from './TeamRoom';

const BeforeLogin = () => {
  return (
    <Switch>
      <Route exact path='/' component={Lobby}/>
      <Route path='/signup' component={Signup}/>
      <Redirect to='/' />
    </Switch>
  );
};

const AfterLogin = () => {
  return (
    <Switch>
      <Route exact path='/' component={Lobby}/>
      <Route component={TeamRoom}/>
      <Redirect to='/' />
    </Switch>
  );
}

export default function Routes({ isLogin }) {
  return isLogin ? <AfterLogin /> : <BeforeLogin />;
}
