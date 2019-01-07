import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: undefined,
  activePlayers: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return initialState;
    case 'ROUND_OVER':
      return Object.assign({}, initialState, { players: action.payload });
    case 'PLAYER_JOINED':
      const receivedPlayers = initialState.activePlayers;
      receivedPlayers.push(action.player);
      return Object.assign({}, initialState, { activePlayers: receivedPlayers });
    default:
      return state;
  }
};

export default sessionReducer;
