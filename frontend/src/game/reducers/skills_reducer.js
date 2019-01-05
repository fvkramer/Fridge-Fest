const skillsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_SKILL':
      return {
        ...state,
        ...action.skill,
      };
    case 'REMOVE_SKILL': {
      const newState = Object.assign({}, state);
      delete newState[action.skillId];

      return newState;
    }
    default:
      return state;
  }
};

export default skillsReducer;
