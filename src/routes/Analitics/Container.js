import React, { useEffect } from "react";
import { connect } from "react-redux";
import Analitics from "./Analitics";
import { updateCurrentPage } from "../../actions";

function AnaliticsContainer({ updateCurrentPage }) {
  useEffect(() => {
    updateCurrentPage("Analitics");
  }, [updateCurrentPage]);

  return <Analitics />;
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrentPage: (page) => dispatch(updateCurrentPage(page)),
});
export default connect(null, mapDispatchToProps)(AnaliticsContainer);
