import Lobby from "./Lobby";
import { connect } from "react-redux";
import { getToken } from "../../thunks";

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin,
  teams: state.user.allTeams.map((team) => state.users.teamById[team.id]),
});
const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(getToken(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
