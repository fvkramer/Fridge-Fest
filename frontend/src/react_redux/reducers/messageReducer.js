const messageState = {
  messageList: [],
};

const messageReducer = (state = messageState, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      const { messageList } = messageState;
      messageList.push(action.data);
      return Object.assign({}, state, { messageList });
    default:
      return state;
  }
};

export default messageReducer;
