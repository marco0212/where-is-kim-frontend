import React, { useEffect } from "react";
import { connect } from "react-redux";
import Participants from "./Participants";
import { updateCurrentPage } from "../../actions";

function ParticipantsContainer({ updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("Participants");
  }, [updateCurrentPage]);

  return <Participants />;
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(ParticipantsContainer);
