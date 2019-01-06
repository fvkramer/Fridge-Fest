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
    case 'PICKUP_SKILL': {
      const { fridgeId, skill } = action;

      return {
        ...state,
        [fridgeId]: {
          ...state[fridgeId],
          skill,
        },
      };
    }
    case 'USE_SKILL': {
      const { fridgeId } = action;
      return {
        ...state,
        [fridgeId]: {
          ...state[fridgeId],
          skill: {},
        },
      };
    }
    case 'INCREASE_COUNT': {
      const { fridgeId, foodType } = action;

      return {
        ...state,
        [fridgeId]: {
          ...state[fridgeId],
          [foodType]: state[fridgeId][foodType] + 1,
        },
      };
    }
    case 'UPDATE_SPEED': {
      const { fridgeId, speedOffset } = action;
      return {
        ...state,
        [fridgeId]: {
          ...state[fridgeId],
          speed: state[fridgeId].speed - speedOffset,
        },
      };
    }
    default:
      return state;
  }
};

export default fridgesReducer;
