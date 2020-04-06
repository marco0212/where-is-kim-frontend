import React from "react";
import { connect } from "react-redux";
import RegisterTeam from "./RegisterTeam";
import useInput from "../../hooks/useInput";
import { registerTeam } from "../../thunks";

function RegisterTeamContainer({ userId, registerTeam }) {
  const teamName = useInput("");
  const location = useInput("");
  const workOnTime = useInput("09:00");
  const workOffTime = useInput("18:00");
  const onSubmit = (e) => {
    e.preventDefault();
    registerTeam(
      teamName.value,
      userId,
      {
        address: "서울시 강남구 어쩌구 저쩌구",
        latitude: "37.5004249",
        longitude: "127.0641825",
      },
      workOnTime.value,
      workOffTime.value
    );
  };

  return (
    <RegisterTeam
      teamName={teamName}
      location={location}
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
