import React from "react";
import { connect } from "react-redux";
import Participants from "./Participants";

function ParticipantsContainer() {
  return <Participants />;
}
export default connect()(ParticipantsContainer);
