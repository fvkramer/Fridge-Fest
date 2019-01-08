export default (state = false, action) => {
  switch (action.type) {
    case 'GAME_OVER':
      return true;
    default:
      return state;
  }
};
