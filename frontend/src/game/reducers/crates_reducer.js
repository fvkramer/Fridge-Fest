const cratesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_GAME':
      return {};
    default:
      return state;
  }
};

export default cratesReducer;
