import React, { useEffect } from "react";
import Team from "./Team";
import { connect } from "react-redux";
import { joinTeamAPI } from "../../api";
import { initializeTeam } from "../../actions";

function TeamContainer({
  userId,
  displayName,
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
  threads: state.team.allThreadDate.map((date) => ({
    date,
    items: state.team.threadsByDate[date],
  })),
  participants: state.team.allpartIds.map((id) => state.team.partById[id]),
});
const mapDispatchToProps = (dispatch) => ({
  initializeTeam: (team) => dispatch(initializeTeam(team)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
