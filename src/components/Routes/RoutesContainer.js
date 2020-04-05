import Routes from './Routes';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLogin: state.status.isLogin
});

export default connect(mapStateToProps)(Routes);
