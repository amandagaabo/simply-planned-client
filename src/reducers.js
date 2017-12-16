import {combineReducers} from 'redux';
import groceries from './containers/Groceries/reducer';
import meals from './containers/Meals/reducer';
import auth from './containers/App/reducer';

export const simplyPlannedReducer = combineReducers({
  groceries,
  meals,
  auth
});
