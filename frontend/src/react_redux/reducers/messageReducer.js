const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return Object.assign(state, action.data);
    default:
      return state;
  }
};

export default messageReducer;
