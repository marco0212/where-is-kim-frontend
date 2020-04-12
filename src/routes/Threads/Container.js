import React, { useEffect } from "react";
import { connect } from "react-redux";
import Threads from "./Threads";
import { updateCurrentPage } from "../../actions";

function ThreadsContainer({ userId, threads, updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("threads");
  }, [updateCurrentPage]);

  return <Threads userId={userId} threads={threads} />;
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  threads: state.team.allThreadDate.map((date) => ({
    date,
    items: state.team.threadsByDate[date],
  })),
});
const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer);
