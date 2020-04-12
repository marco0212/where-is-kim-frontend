import { connect } from "react-redux";
import ThreadItem from "./ThreadItem";

const mapStateToProps = (state) => ({
  userId: state.user.id,
});
export default connect(mapStateToProps)(ThreadItem);
