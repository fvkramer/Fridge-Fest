import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import MainPage from './main_page';

const mapStateToProps = ({ session: { isAuthenticated } }) => ({
  loggedIn: isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);

export default MainPageContainer;
