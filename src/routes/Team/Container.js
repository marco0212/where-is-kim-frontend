import React, { useEffect } from "react";
import Team from "./Team";
import { connect } from "react-redux";
import { joinTeamAPI } from "../../api";
import { initializeTeam, updateThreads } from "../../actions";
import { emitJoinTeam, emitLeaveTeam, socket } from "../../socket";

function TeamContainer({
  userId,
  displayName,
  threads,
  participants,
  match,
  history,
  initializeTeam,
  updateThreads,
}) {
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

  useEffect(() => {
    async function joinTeam() {
      const response = await joinTeamAPI(name, userId);
      const { result, team } = await response.json();

      if (result !== "ok") {
        return history.push("/");
      }

      initializeTeam(team);
      emitJoinTeam(userId, name);
    }

    joinTeam();
    return emitLeaveTeam;
  }, [name, userId, history, initializeTeam]);

  return (
    <Team
      name={name}
      displayName={displayName}
      profilePic="https://dummyimage.com/600x600/000/fff"
      participants={participants}
      threads={threads}
    />
  );
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  displayName: state.team.displayName,
  participants: state.team.allpartIds.map((id) => state.team.partById[id]),
});
const mapDispatchToProps = (dispatch) => ({
  initializeTeam: (team) => dispatch(initializeTeam(team)),
  updateThreads: (threads) => dispatch(updateThreads(threads)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
