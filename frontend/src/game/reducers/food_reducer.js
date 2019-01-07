const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_FOOD':
      return {
        ...state,
        ...action.food,
      };
    case 'REMOVE_FOOD': {
      const newState = Object.assign({}, state);
      delete newState[action.foodId];

      return newState;
    }
    case 'CLEAR_GAME':
      return {};
    default:
      return state;
  }
};

export default foodReducer;
