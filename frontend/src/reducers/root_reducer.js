import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import gameReducer from '../game/redux/reducers/gameReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  game: gameReducer,
});

export default rootReducer;
