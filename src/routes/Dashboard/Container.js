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
    />
  );
}

const mapStateToProps = (state) => {
  const today = moment().format("YYYY-MM-DD");
  const threads = state.team.threadsByDate[today] || [];

  return {
    threads,
    allpartsCount: state.team.allpartIds.length,
    onWorkingUserCount: state.team.onWorkingUser.length,
    offWorkingUserCount: state.team.offWorkingUser.length,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
