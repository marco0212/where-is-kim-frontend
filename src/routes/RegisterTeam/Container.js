import React from "react";
import { connect } from "react-redux";
import RegisterTeam from "./RegisterTeam";
import useInput from "../../hooks/useInput";
import { registerTeam } from "../../thunks";

function RegisterTeamContainer({ userId, registerTeam }) {
  const teamName = useInput("");
  const latitude = useInput("");
  const longitude = useInput("");
  const workOnTime = useInput("09:00");
  const workOffTime = useInput("18:00");
  const onSubmit = (e) => {
    e.preventDefault();
    registerTeam(
      teamName.value,
      userId,
      {
        latitude: latitude.value,
        longitude: longitude.value,
      },
      workOnTime.value,
      workOffTime.value
    );
  };

  return (
    <RegisterTeam
      teamName={teamName}
      longitude={longitude}
      latitude={latitude}
      workOnTime={workOnTime}
      workOffTime={workOffTime}
      onSubmit={onSubmit}
    />
  );
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
});
const mapDispatchToProps = (dispatch) => ({
  registerTeam: (teamName, createdBy, location, workOnTime, workOffTime) =>
    dispatch(
      registerTeam(teamName, createdBy, location, workOnTime, workOffTime)
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterTeamContainer);
