import {createStore, combineReducers} from 'redux'

import {simplyPlannedReducer} from './reducers';
import {reducer as formReducer} from 'redux-form';

export default createStore(
  combineReducers({
    form: formReducer,
    simplyPlanned: simplyPlannedReducer
  })
);
