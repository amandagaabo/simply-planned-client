import {SET_AUTH_TOKEN, SET_CURRENT_USER} from './actions';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  userId: null
};

export default function (state = initialState, action) {
  if (action.type === SET_AUTH_TOKEN) {
    return {
      ...state,
      authToken: action.authToken
    };
  } else if (action.type === SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.currentUser
    };
  }
  return state;
}
