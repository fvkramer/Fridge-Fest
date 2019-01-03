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
    case 'INCREASE COUNT':
      return {
        ...state,
        [action.foodType]: state.foodType + 1,
      };
    default:
      return state;
  }
};

export default fridgesReducer;
