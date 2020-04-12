import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { updateCurrentPage } from "../../actions";

function DashboardContainer({ updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("Dashboard");
  }, [updateCurrentPage]);
  return <Dashboard />;
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(DashboardContainer);
