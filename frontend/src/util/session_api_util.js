import axios from 'axios';

export const setAuthToken = (token) => {
  if (token) {
    axios.dafaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const signup = userData => axios.post(
  '/api/users/signup',
  userData,
);

export const login = userData => axios.post(
  '/api/users/login',
  userData,
);
