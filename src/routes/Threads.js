import React from "react";
import ThreadList from "../components/ThreadList/ThreadList";
import { connect } from "react-redux";

function Threads({ threads, userId }) {
  return threads.map((thread) => (
    <ThreadList key={thread.date} thread={thread} userId={userId} />
  ));
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
});
export default connect(mapStateToProps)(Threads);
