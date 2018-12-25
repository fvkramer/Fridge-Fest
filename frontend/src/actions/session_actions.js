import jwtDecode from 'jwt-decode';
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT,
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const processToken = (serverRes) => {
  const { token } = serverRes.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);

  return jwtDecode(token);
};

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(res => dispatch(receiveCurrentUser(processToken(res))))
    .catch(err => dispatch(receiveSessionErrors(err.response.data)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(res => dispatch(receiveCurrentUser(processToken(res))))
    .catch(err => dispatch(receiveSessionErrors(err.response.data)))
);

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
