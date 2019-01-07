export default (state = false, action) => {
  switch (action.type) {
    case 'NEW_ROUND':
      return false;
    case 'ROUND_OVER':
      return true;
    default:
      return state;
  }
};
