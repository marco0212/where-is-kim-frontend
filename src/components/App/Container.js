import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin,
});

export default connect(mapStateToProps)(App);
