import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: undefined,
  activePlayers: [],
  players: {},
};


// adds new payload to previous points
const sumPoints = (players, newPayload) => {
  const keys = Object.keys(newPayload);
  const playerObj = Object.assign({}, players);

  keys.forEach((key) => {
    if (playerObj[key]) {
      playerObj[key] += newPayload[key];
    } else {
      playerObj[key] = newPayload[key];
    }
  });

  return playerObj;
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
      initialState.players = sumPoints(initialState.players, action.payload);
      return Object.assign({}, initialState, { players: initialState.players });
    case 'GAME_OVER':
      initialState.players = sumPoints(initialState.players, action.payload);
      return Object.assign({}, initialState, { players: initialState.players });
    case 'PLAYER JOINED': {
      const receivedPlayers = initialState.activePlayers;
      receivedPlayers.push(action.player);
      return Object.assign({}, initialState, { activePlayers: receivedPlayers });
    }
    default:
      return state;
  }
};

export default sessionReducer;
