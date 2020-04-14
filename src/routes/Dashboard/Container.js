import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { updateCurrentPage } from "../../actions";
import moment from "moment";

function DashboardContainer({
  threads,
  allpartsCount,
  onWorkingUserCount,
  offWorkingUserCount,
  updateCurrentPage,
  latingNumberPerEmployee,
  mostLaterInMonth,
}) {
  useEffect(() => {
    updateCurrentPage("Dashboard");
  }, [updateCurrentPage]);
  return (
    <Dashboard
      threads={threads}
      allpartsCount={allpartsCount}
      onWorkingUserCount={onWorkingUserCount}
      offWorkingUserCount={offWorkingUserCount}
      latingNumberPerEmployee={latingNumberPerEmployee}
      mostLaterInMonth={mostLaterInMonth}
    />
  );
}

const mapStateToProps = (state) => {
  const today = moment().format("YYYY-MM-DD");
  const threads = state.team.allThreadIds.reduce((acc, id) => {
    const thread = state.team.threadById[id];
    if (moment(thread.createdAt).format("YYYY-MM-DD") === today) {
      acc.push(thread);
    }
    return acc;
  }, []);
  const latingNumberStore = state.team.allRecordIds.reduce((acc, id) => {
    const record = state.team.recordById[id];
    const isLate = record.is_late;
    if (isLate) {
      if (acc[record.recorded_by]) {
        acc[record.recorded_by] += 1;
      } else {
        acc[record.recorded_by] = 1;
      }
    }
    return acc;
  }, {});

  const latingNumberPerEmployee = Object.keys(latingNumberStore).map((id) => ({
    name: state.team.partById[id].username,
    times: latingNumberStore[id],
  }));

  return {
    threads,
    allpartsCount: state.team.allpartIds.length,
    onWorkingUserCount: state.team.onWorkingUser.length,
    offWorkingUserCount: state.team.offWorkingUser.length,
    latingNumberPerEmployee,
    mostLaterInMonth: {},
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
