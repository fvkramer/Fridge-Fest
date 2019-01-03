import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: session.isAuthenticated,
  errors: errors.session,
  formType: 'SIGN UP',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);

export default SignupFormContainer;
