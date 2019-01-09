import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import MainPage from './main_page';

const mapStateToProps = ({ session: { isAuthenticated, user } }) => {
  let username;
  if (user) ({ username } = user);

  return {
    loggedIn: isAuthenticated,
    username,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);

export default MainPageContainer;
