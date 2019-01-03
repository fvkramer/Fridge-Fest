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
    case 'INCREASE_COUNT':
      return {
        ...state,
        [action.foodType]: state.foodType + 1,
      };
    case 'DECREASE_SPEED':
      return {
        ...state,
        speed: state.speed - action.speed,
      };
    default:
      return state;
  }
};

export default fridgesReducer;
