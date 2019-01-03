const fridgesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FRIDGE':
      return {
        ...state,
        ...action.fridge,
      };
    case 'REMOVE_FRIDGE': {
      const newState = Object.assign({}, state);
      delete newState[action.fridgeId];

      return newState;
    }
    default:
      return state;
  }
};

export default fridgesReducer;
