import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";

function SettingsContainer() {
  return <Settings />;
}
export default connect()(SettingsContainer);
