import { connect } from "react-redux";
import Lobby from "./Lobby";
import { getToken } from "../../thunks";

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin,
  teams: state.user.allTeams.map(team => state.user.teamById[team.id])
});
const mapDispatchToProps = (dispatch) => ({
  getToken: (email, password) => {
    dispatch(getToken(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
