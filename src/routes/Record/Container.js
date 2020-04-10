import { connect } from "react-redux";
import Record from "./Record";

const mapStateToProps = (state) => ({
  teamName: state.team.displayName,
  teamLocation: state.team.location,
});
export default connect(mapStateToProps)(Record);
