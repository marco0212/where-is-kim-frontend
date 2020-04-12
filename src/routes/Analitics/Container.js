import React from "react";
import { connect } from "react-redux";
import Analitics from "./Analitics";

function AnaliticsContainer() {
  return <Analitics />;
}
export default connect()(AnaliticsContainer);
