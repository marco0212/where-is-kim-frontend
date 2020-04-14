import React, { useEffect } from "react";
import { connect } from "react-redux";
import Participants from "./Participants";
import { updateCurrentPage } from "../../actions";
import useInput from "../../hooks/useInput";
import { sendInvitingMail } from "../../thunks";

function ParticipantsContainer({
  teamId,
  updateCurrentPage,
  sendInvitingMail,
}) {
  const email = useInput("");

  function onSubmit(e) {
    e.preventDefault();
    sendInvitingMail(teamId, email.value);
  }
  useEffect(() => {
    updateCurrentPage("Participants");
  }, [updateCurrentPage]);

  return <Participants email={email} onSubmit={onSubmit} />;
}

const mapStateToProps = (state) => ({
  teamId: state.team.id,
});
const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
  sendInvitingMail: (teamId, email) =>
    dispatch(sendInvitingMail(teamId, email)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipantsContainer);
