import React, { useEffect } from "react";
import { connect } from "react-redux";
import Threads from "./Threads";
import { socket } from "../../socket";
import { joinTeamAPI } from "../../api";
import { updateThreads } from "../../actions";

function ThreadsContainer({ userId, threads, match, updateThreads }) {
  const { name } = match.params;

  useEffect(() => {
    socket.on("add thread", async () => {
      const response = await joinTeamAPI(name, userId);
      const {
        team: { threads },
      } = await response.json();
      updateThreads(threads);
    });

    return () => {
      socket.off("add thread");
    };
  }, [name, userId, updateThreads]);

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
  updateThreads: (threads) => dispatch(updateThreads(threads)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsContainer);
