const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      state.push(action.data);
      return state;
    default:
      return state;
  }
};

export default messageReducer;
