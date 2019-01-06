import { combineReducers } from 'redux';

import fridgesReducer from './fridges_reducer';
import foodReducer from './food_reducer';
import skillsReducer from './skills_reducer';
import cratesReducer from './crates_reducer';

const gameReducer = combineReducers({
  fridges: fridgesReducer,
  food: foodReducer,
  skills: skillsReducer,
  crates: cratesReducer,
  roundsCompleted: 0,
});

export default gameReducer;
