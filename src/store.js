import {createStore, combineReducers} from 'redux'

import {simplyPlannedReducer} from './reducers/index';
import {reducer as formReducer} from 'redux-form';

export default createStore(
  combineReducers({
    app: simplyPlannedReducer,
    form: formReducer
  })
);
