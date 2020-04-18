import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Container";
import Analytics from "../Analytics/Container";
import Participants from "../Participants/Container";
import styled from "styled-components";

const Verified = () => {
  return (
    <Switch>
      <Route exact path="/team/:name/admin/" component={Dashboard} />
      <Route path="/team/:name/admin/analytics" component={Analytics} />
      <Route path="/team/:name/admin/participants" component={Participants} />
    </Switch>
  );
};

const Unverified = () => {
  return <Button to="/">허튼 짓하지 말아요..</Button>;
};

export default function Admin({ isAdmin }) {
  return <Wrapper>{isAdmin ? <Verified /> : <Unverified />}</Wrapper>;
}

const Wrapper = styled.div`
  min-height: 100%;
  padding: 30px 30px 0;
`;
const Button = styled(Link)`
  display: inline-block;
  padding: 0 15px;
  background-color: #666;
  border: 0;
  vertical-align: top;
  line-height: 35px;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
`;
