import axios from 'axios';

const postResults = points => axios.post(
  '/api/users/scoreboard',
  points,
);

export default postResults;
