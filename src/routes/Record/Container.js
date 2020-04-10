import { connect } from "react-redux";
import Record from "./Record";
import { workOn, workOff } from "../../thunks";

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
  isLoading: state.ui.record.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
  workOn: (teamId, userId) => dispatch(workOn(teamId, userId)),
  workOff: (teamId, userId) => dispatch(workOff(teamId, userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Record);
