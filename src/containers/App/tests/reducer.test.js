import reducer from './../reducer';

import {
  setAuthToken,
  setCurrentUser,
  setReady
} from './../actions'

// initial state
const initialState = {
  authToken: null,
  currentUser: null,
  userId: null,
  ready: false
};


describe('App reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  it('Should set authToken on setAuthToken', () => {
    const authToken = 123;
    const state = reducer(undefined, setAuthToken(authToken));
    expect(state.authToken).toEqual(authToken);
  });

  it('Should set currentUser on setCurrentUser', () => {
    const currentUser = 456;
    const state = reducer(undefined, setCurrentUser(currentUser));
    expect(state.currentUser).toEqual(currentUser);
  });

  it('Should set ready on setReady', () => {
    const ready = true;
    const state = reducer(undefined, setReady(ready));
    expect(state.ready).toEqual(ready);
  });
});
