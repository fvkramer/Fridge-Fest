export default (state = 0, action) {
  switch (action.type) {
    case 'ROUND_OVER':
        return state + 1
    default:
      break;
  }
}