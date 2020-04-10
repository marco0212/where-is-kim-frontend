import { connect } from "react-redux";
import Record from "./Record";

const mapStateToProps = (state) => ({
  userId: state.user.id,
  teamId: state.team.id,
  teamName: state.team.displayName,
  teamLocation: state.team.location,
  isWorking: state.team.onWorkingUser.filter((id) => {
    return id === state.user.id;
  }).length,
  isWorkDone: state.team.offWorkingUser.filter((id) => {
    return id === state.user.id;
  }).length,
});
export default connect(mapStateToProps)(Record);
