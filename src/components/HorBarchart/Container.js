import React from "react";
import HorBarchart from "./HorBarchart";
import { connect } from "react-redux";
import moment from "moment";

function HorBarchartContainer({ records }) {
  return <HorBarchart records={records} />;
}

const mapStateToProps = (state) => {
  const monday = moment().day(1);
  const workingTimeStore = state.team.allRecordIds.reduce((acc, id) => {
    const {
      recorded_by: recordedBy,
      work_on: workOn,
      work_off: workOff,
    } = state.team.recordById[id];

    if (moment(workOn).isAfter(monday)) {
      const diff = Number(
        moment(workOff).diff(moment(workOn), "hours", true)
      ).toFixed(1);

      if (acc[recordedBy]) {
        acc[recordedBy] += diff;
      } else {
        acc[recordedBy] = diff;
      }
    }
    return acc;
  }, {});
  const records = Object.keys(workingTimeStore).map((id) => {
    const username = state.team.partById[id].username;
    return { username, workingTime: workingTimeStore[id] };
  });
  return {
    records,
  };
};

export default connect(mapStateToProps)(HorBarchartContainer);
