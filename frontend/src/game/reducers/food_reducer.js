const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_INSTANT_RAMEN':
      return {
        ...state,
        ...action.food,
      };
    default:
      return state;
  }
};

export default foodReducer;
