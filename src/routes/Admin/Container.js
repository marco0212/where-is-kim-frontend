import React, { useEffect } from "react";
import Admin from "./Admin";
import { connect } from "react-redux";
import { getRecordAPI } from "../../api";

function AdminContainer({ userId, teamId, match }) {
  useEffect(() => {
    async function getRecord() {
      const response = await getRecordAPI(teamId, userId);
      console.log(response);
      const result = await response.json();
      console.log(result);
    }
    getRecord();
  }, [teamId, userId]);

  return <Admin />;
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  teamId: state.team.id,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
