import Lobby from "./Lobby";
import { connect } from "react-redux";
import { getToken } from "../../thunks";

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin,
});
const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(getToken(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);