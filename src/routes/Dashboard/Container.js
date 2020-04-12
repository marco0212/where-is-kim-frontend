import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { updateCurrentPage } from "../../actions";
import moment from "moment";

function DashboardContainer({ threads, updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("Dashboard");
  }, [updateCurrentPage]);
  return <Dashboard threads={threads} />;
}

const mapStateToProps = (state) => {
  const today = moment().format("YYYY-MM-DD");
  const threads = state.team.threadsByDate[today] || [];

  return { threads };
};
const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
