import {combineReducers} from 'redux';
import {groceryReducer} from './grocery-reducer';
import {mealsReducer} from './meals-reducer';
import {userReducer} from './user-reducer';

export const simplyPlannedReducer = combineReducers({
  groceryReducer,
  mealsReducer,
  userReducer
});
