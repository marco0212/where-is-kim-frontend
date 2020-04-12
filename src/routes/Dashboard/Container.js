import React from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

function DashboardContainer() {
  return <Dashboard />;
}
export default connect()(DashboardContainer);
