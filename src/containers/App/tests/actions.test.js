import {
  SET_AUTH_TOKEN,
  setAuthToken,
  SET_CURRENT_USER,
  setCurrentUser
} from '../actions'

describe('setAuthToken', () => {
  const authToken = '';
  const action = setAuthToken(authToken);
  it('Should return the action', () => {
    expect(action.type).toEqual(SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(authToken);
  });
});

describe('setCurrentUser', () => {
  const currentUser = '';
  const action = setCurrentUser(currentUser);
  it('Should return the action', () => {
    expect(action.type).toEqual(SET_CURRENT_USER);
    expect(action.currentUser).toEqual(currentUser);
  });
});
