import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './.session_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: session.isAuthenticated,
  errors: errors.session,
  formType: 'LOG IN',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);

export default LoginFormContainer;
