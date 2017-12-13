import {createStore, combineReducers, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {simplyPlannedReducer} from './reducers';

export default createStore(
  combineReducers({
    app: simplyPlannedReducer,
    form: formReducer
  }),
  applyMiddleware(thunk)
);
