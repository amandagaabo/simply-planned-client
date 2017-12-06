import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';

import {simplyPlannedReducer} from './reducers';

export default createStore(
  combineReducers({
    app: simplyPlannedReducer,
    form: formReducer
  })
);
