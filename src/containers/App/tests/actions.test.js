import {
  SET_AUTH_TOKEN,
  setAuthToken,
  SET_CURRENT_USER,
  setCurrentUser,
  SET_READY,
  setReady
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

describe('setReady', () => {
  const ready = true
  const action = setReady(ready);
  it('Should return the action', () => {
    expect(action.type).toEqual(SET_READY);
    expect(action.ready).toEqual(ready);
  });
});
