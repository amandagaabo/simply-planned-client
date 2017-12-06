import {combineReducers} from 'redux';
import groceries from './containers/Groceries/reducer';
import meals from './containers/Meals/reducer';
import sessions from './containers/Sessions/reducer';

export const simplyPlannedReducer = combineReducers({
  groceries,
  meals,
  sessions
});
