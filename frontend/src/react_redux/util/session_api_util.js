import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signup = userData => axios.post(
  // '/api/users/register',
  'http://localhost:5000/api/users/register',
  userData,
);

export const login = userData => axios.post(
  // '/api/users/login',
  'http://localhost:5000/api/users/login',
  userData,
);
