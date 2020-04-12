import React from "react";
import { connect } from "react-redux";
import Threads from "./Threads";

function ThreadsContainer({ userId, threads }) {
  return <Threads userId={userId} threads={threads} />;
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  threads: state.team.allThreadDate.map((date) => ({
    date,
    items: state.team.threadsByDate[date],
  })),
});

export default connect(mapStateToProps)(ThreadsContainer);
