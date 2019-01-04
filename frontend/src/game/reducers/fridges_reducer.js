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
        fridgeId: action.newFridge,
      };
    case 'DECREASE_SPEED':
      return {
        ...state,
        speed: state.speed - action.speedOffset,
      };
    default:
      return state;
  }
};

export default fridgesReducer;
