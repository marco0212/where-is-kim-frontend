import React, { useEffect } from "react";
import Admin from "./Admin";
import { connect } from "react-redux";
import { getRecordAPI } from "../../api";
import { updateRecords } from "../../actions";

function AdminContainer({ userId, teamId, match, updateRecords }) {
  useEffect(() => {
    async function getRecord() {
      const response = await getRecordAPI(teamId, userId);
      const result = await response.json();
      const { records } = result;

      updateRecords(records);
    }
    getRecord();
  }, [teamId, userId, updateRecords]);

  return <Admin />;
}

const mapStateToProps = (state) => ({
  userId: state.user.id,
  teamId: state.team.id,
});
const mapDispatchToProps = (dispatch) => ({
  updateRecords: (records) => dispatch(updateRecords(records)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
