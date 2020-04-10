import { connect } from "react-redux";
import Record from "./Record";

const mapStateToProps = (state) => ({
  teamId: state.team.id,
  teamName: state.team.displayName,
  teamLocation: state.team.location,
  userId: state.user.id,
});
export default connect(mapStateToProps)(Record);
