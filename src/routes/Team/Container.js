import React from "react";
import Team from "./Team";
import { connect } from "react-redux";

function TeamContainer() {
  return <Team />;
}

export default connect()(TeamContainer);
