import React, { useEffect } from "react";
import { connect } from "react-redux";
import TeamAside from "./TeamAside";
import { socket } from "../../socket";

function TeamAsideContainer({ teamPic, teamName, participants }) {
  useEffect(() => {
    socket.on("join team", (activeUserIds) => {
      console.log(activeUserIds);
    });
  }, []);

  return (
    <TeamAside
      teamPic={teamPic}
      teamName={teamName}
      participants={participants}
    />
  );
}

export default connect()(TeamAsideContainer);
