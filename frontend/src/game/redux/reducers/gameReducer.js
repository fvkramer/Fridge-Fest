import { RECEIVE_PLAYER } from '../actions/player';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYER:
      return Object.assign({}, state, action.player);
    default:
      return state;
  }
}

