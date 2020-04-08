import React, { useEffect } from "react";
import Team from "./Team";
import { connect } from "react-redux";
import { joinTeamAPI } from "../../api";
import { initializeTeam } from "../../actions";

function TeamContainer({
  userId,
  threads,
  participants,
  match,
  history,
  initializeTeam,
}) {
  const { name } = match.params;

  useEffect(() => {
    async function joinTeam() {
      const response = await joinTeamAPI(name, userId);
      const { result, team } = await response.json();

      if (result !== "ok") {
        history.push("/");
      }
      initializeTeam(team);
    }

    joinTeam();
  }, [name, userId, history, initializeTeam]);

  return (
    <Team
      name={name}
      profilePic="https://dummyimage.com/600x600/000/fff"
      participants={participants}
      threads={threads}
    />
  );
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  threads: state.team.allThreadId.map((id) => state.team.threadById[id]),
  participants: state.team.allpartsId.map((id) => state.team.partById[id]),
  //allThreadId threadById
});
const mapDispatchToProps = (dispatch) => ({
  initializeTeam: (team) => dispatch(initializeTeam(team)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
