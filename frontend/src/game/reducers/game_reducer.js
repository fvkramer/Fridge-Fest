import { combineReducers } from 'redux';

import fridgesReducer from './fridges_reducer';
import foodReducer from './food_reducer';
import skillsReducer from './skills_reducer';
import cratesReducer from './crates_reducer';
import roundReducer from './round_reducer';
import backgroundReducer from './background_reducer';
import isRoundOverReducer from './is_round_over_reducer';

export default combineReducers({
  fridges: fridgesReducer,
  food: foodReducer,
  skills: skillsReducer,
  crates: cratesReducer,
  roundsCompleted: roundReducer,
  background: backgroundReducer,
  isRoundOver: isRoundOverReducer,
});
