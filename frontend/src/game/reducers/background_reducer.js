const backgroundReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_BACKGROUND':
      return {
        ...state,
        ...action.background,
      };
    case 'CLEAR_GAME':
      return {};
    default:
      return state;
  }
};

export default backgroundReducer;
