import {createStore, combineReducers} from 'redux'

import {simplyPlannedReducer} from './reducers';
import {reducer as formReducer} from 'redux-form';

export default createStore(
  combineReducers({
    app: simplyPlannedReducer,
    form: formReducer
  })
);
