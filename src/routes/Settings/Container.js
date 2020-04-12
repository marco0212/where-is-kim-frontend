import React, { useEffect } from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import { updateCurrentPage } from "../../actions";

function SettingsContainer({ updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("Settings");
  }, [updateCurrentPage]);

  return <Settings />;
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});

export default connect(null, mapDispatchToProps)(SettingsContainer);
