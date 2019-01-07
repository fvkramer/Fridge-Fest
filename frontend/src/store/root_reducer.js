import { combineReducers } from 'redux';
import sessionReducer from '../react_redux/reducers/session_reducer';
import errorsReducer from '../react_redux/reducers/errors_reducer';
import gameReducer from '../game/reducers/game_reducer';
import uiReducer from '../react_redux/reducers/uiReducer';
import messageReducer from '../react_redux/reducers/messageReduger';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  game: gameReducer,
  messages: messageReducer,
});

export default rootReducer;
