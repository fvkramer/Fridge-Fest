import { combineReducers } from 'redux';
import sessionReducer from '../react_redux/reducers/session_reducer';
import errorsReducer from '../react_redux/reducers/errors_reducer';
import gameReducer from '../game/reducers/game_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  game: gameReducer,
});

export default rootReducer;
