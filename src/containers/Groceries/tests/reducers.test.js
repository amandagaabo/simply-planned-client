import reducer from './../reducer';
import {
  fetchGroceriesRequest,
  fetchGroceriesSuccess,
  fetchGroceriesError,
  addGroceryItemRequest,
  addGroceryItemSuccess,
  addGroceryItemError,
  toggleCheckedRequest,
  toggleCheckedSuccess,
  toggleCheckedError,
  removeCheckedItemsRequest,
  removeCheckedItemsSuccess,
  removeCheckedItemsError
} from './../actions';

// initial state
const initialState = {
  groceries: [],
  loading: false,
  error: null
};


describe('Grocery reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    const currentState = {};
    const state = reducer(currentState, { type: '__UNKNOWN' });
    expect(state).toBe(currentState);
  });

  describe('Fetch groceries requests', () => {
    it('Should set loading to true on fetchGroceriesRequest', () => {
      const state = reducer(undefined, fetchGroceriesRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set groceries and loading on fetchGroceriesSuccess', () => {
      const fetchResults = [
        { id: 123, name: 'bread', checked: false },
        { id: 456, name: 'milk', checked: false },
      ];
      const state = reducer(undefined, fetchGroceriesSuccess(fetchResults));
      expect(state.groceries).toEqual(fetchResults);
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on fetchGroceriesError', () => {
      const error = { message: 'error' };
      const state = reducer(undefined, fetchGroceriesError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });
  });

  describe('Add grocery item requests', () => {
    it('Should set loading to true on addGroceryItemRequest', () => {
      const state = reducer(undefined, addGroceryItemRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set groceries and loading on addGroceryItemSuccess', () => {
      const newItem = { id: 123, name: 'bread', checked: false };
      const state = reducer(undefined, addGroceryItemSuccess(newItem));
      expect(state.groceries.find(item => item.id === newItem.id)).toEqual(newItem);
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on addGroceryItemError', () => {
      const error = { message: 'error' };
      const state = reducer(undefined, addGroceryItemError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });
  });

  describe('Toggle checked requests', () => {
    it('Should set loading to true on toggleCheckedRequest', () => {
      const state = reducer(undefined, toggleCheckedRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set groceries and loading on toggleCheckedSuccess', () => {
      const initialState = {
        groceries: [{ id: 123, name: 'bread', checked: false }]
      };
      const updateItemID = { id: 123, checked: true };
      const state = reducer(initialState, toggleCheckedSuccess(updateItemID));
      expect(state.groceries.find(item => item.id === updateItemID.id).checked).toEqual(true);
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on toggleCheckedError', () => {
      const error = { message: 'error' };
      const state = reducer(undefined, toggleCheckedError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });
  });

  describe('Remove checked items requests', () => {
    it('Should set loading to true on removeCheckedItemsRequest', () => {
      const state = reducer(undefined, removeCheckedItemsRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set groceries and loading on removeCheckedItemsSuccess', () => {
      const initialState = {
        groceries: [
          { id: 123, name: 'bread', checked: true },
          { id: 456, name: 'milk', checked: true },
          { id: 789, name: 'cheese', checked: false }
        ]
      };
      const state = reducer(initialState, removeCheckedItemsSuccess());
      expect(state.groceries.length).toBe(1);
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on removeCheckedItemsError', () => {
      const error = { message: 'error' };
      const state = reducer(undefined, removeCheckedItemsError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });
  });
});
