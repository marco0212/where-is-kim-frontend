import React from "react";
import Team from "./Team";
import { connect } from "react-redux";

function TeamContainer({ userId, match }) {
  return <Team />;
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(TeamContainer);
