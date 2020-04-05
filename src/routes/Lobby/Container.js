import { connect } from "react-redux";
import Lobby from "./Lobby";
import { getToken } from "../../thunks";

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin
});
const mapDispatchToProps = (dispatch) => ({
  getToken: (email, password) => {
    dispatch(getToken(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
