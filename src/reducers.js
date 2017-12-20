import { combineReducers } from 'redux';
import groceries from './containers/Groceries/reducer';
import meals from './containers/Meals/reducer';
import auth from './containers/App/reducer';

const simplyPlannedReducer = combineReducers({
  groceries,
  meals,
  auth
});

export default simplyPlannedReducer;
