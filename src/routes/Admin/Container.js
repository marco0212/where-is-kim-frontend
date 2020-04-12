import React from "react";
import Admin from "./Admin";
import { connect } from "react-redux";

function AdminContainer() {
  return <Admin />;
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
