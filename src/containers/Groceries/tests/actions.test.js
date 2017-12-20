import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_GROCERIES_REQUEST,
  fetchGroceriesRequest,
  FETCH_GROCERIES_SUCCESS,
  fetchGroceriesSuccess,
  FETCH_GROCERIES_ERROR,
  fetchGroceriesError,
  fetchGroceries,
  ADD_GROCERY_ITEM_REQUEST,
  addGroceryItemRequest,
  ADD_GROCERY_ITEM_SUCCESS,
  addGroceryItemSuccess,
  ADD_GROCERY_ITEM_ERROR,
  addGroceryItemError,
  addGroceryItem,
  TOGGLE_CHECKED_REQUEST,
  toggleCheckedRequest,
  TOGGLE_CHECKED_SUCCESS,
  toggleCheckedSuccess,
  TOGGLE_CHECKED_ERROR,
  toggleCheckedError,
  toggleChecked,
  REMOVE_CHECKED_ITEMS_REQUEST,
  removeCheckedItemsRequest,
  REMOVE_CHECKED_ITEMS_SUCCESS,
  removeCheckedItemsSuccess,
  REMOVE_CHECKED_ITEMS_ERROR,
  removeCheckedItemsError,
  removeCheckedItems
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchGroceriesRequest', () => {
  const action = fetchGroceriesRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(FETCH_GROCERIES_REQUEST);
  });
});

describe('fetchGroceriesSuccess', () => {
  it('Should return the action', () => {
    const groceries = ['apples', 'oranges', 'jello'];
    const action = fetchGroceriesSuccess(groceries);
    expect(action.type).toEqual(FETCH_GROCERIES_SUCCESS);
    expect(action.groceries).toEqual(groceries);
  });
});

describe('fetchGroceriesError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error' };
    const action = fetchGroceriesError(error);
    expect(action.type).toEqual(FETCH_GROCERIES_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchGroceries', () => {
  it('Should dispatch fetchGroceriesRequest and fetchGroceriesSuccess', () => {
    const store = mockStore({});
    const token = '';
    const fetchGroceriesMock = [
      { id: 123, name: 'apples', checked: true },
      { id: 456, name: 'bread', checked: true },
      { id: 789, name: 'bananas', checked: true }
    ];

    const mockGetGroceriesFromDB =
      jest.fn().mockImplementation(() => Promise.resolve(fetchGroceriesMock));

    const expectedActions = [
      { type: FETCH_GROCERIES_REQUEST },
      { type: FETCH_GROCERIES_SUCCESS, groceries: fetchGroceriesMock },
    ];

    return store.dispatch(fetchGroceries(token, mockGetGroceriesFromDB)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('addGroceryItemRequest', () => {
  const action = addGroceryItemRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(ADD_GROCERY_ITEM_REQUEST);
  });
});

describe('addGroceryItemSuccess', () => {
  it('Should return the action', () => {
    const item = { id: 123, name: 'bread', checked: false };
    const action = addGroceryItemSuccess(item);
    expect(action.type).toEqual(ADD_GROCERY_ITEM_SUCCESS);
    expect(action.item.id).toEqual(item.id);
    expect(action.item.name).toEqual(item.name);
    expect(action.item.checked).toEqual(item.checked);
  });
});

describe('addGroceryItemError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error' };
    const action = addGroceryItemError(error);
    expect(action.type).toEqual(ADD_GROCERY_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('addGroceryItem', () => {
  it('Should dispatch addGroceryItemRequest and addGroceryItemSuccess', () => {
    const store = mockStore({});
    const token = '';
    const itemName = 'jello';
    const addGroceryMock = { id: 123, name: 'jello', checked: false };

    const mockAddGroceryToDB = jest.fn().mockImplementation(() => Promise.resolve(addGroceryMock));

    const expectedActions = [
      { type: ADD_GROCERY_ITEM_REQUEST },
      { type: ADD_GROCERY_ITEM_SUCCESS, item: addGroceryMock },
    ];

    return store.dispatch(addGroceryItem(token, itemName, mockAddGroceryToDB)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('toggleCheckedRequest', () => {
  const action = toggleCheckedRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(TOGGLE_CHECKED_REQUEST);
  });
});

describe('toggleCheckedSuccess', () => {
  it('Should return the action', () => {
    const item = { id: 123, checked: false };
    const action = toggleCheckedSuccess(item);
    expect(action.type).toEqual(TOGGLE_CHECKED_SUCCESS);
    expect(action.item.id).toEqual(item.id);
    expect(action.item.checked).toEqual(item.checked);
  });
});

describe('toggleCheckedError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error' };
    const action = toggleCheckedError(error);
    expect(action.type).toEqual(TOGGLE_CHECKED_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('toggleChecked', () => {
  it('Should dispatch addGroceryItemRequest and addGroceryItemSuccess', () => {
    const store = mockStore({});
    const token = '';
    const itemID = 123;
    const checked = true;
    const toggleCheckedMock = { id: 123, name: 'jello', checked: true };

    const mockToggleCheckedInDB =
      jest.fn().mockImplementation(() => Promise.resolve(toggleCheckedMock));

    const expectedActions = [
      { type: TOGGLE_CHECKED_REQUEST },
      { type: TOGGLE_CHECKED_SUCCESS, item: toggleCheckedMock },
    ];

    return store.dispatch(toggleChecked(token, itemID, checked, mockToggleCheckedInDB)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('removeCheckedItemsRequest', () => {
  const action = removeCheckedItemsRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(REMOVE_CHECKED_ITEMS_REQUEST);
  });
});

describe('removeCheckedItemsSuccess', () => {
  it('Should return the action', () => {
    const action = removeCheckedItemsSuccess();
    expect(action.type).toEqual(REMOVE_CHECKED_ITEMS_SUCCESS);
  });
});

describe('removeCheckedItemsError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error' };
    const action = removeCheckedItemsError(error);
    expect(action.type).toEqual(REMOVE_CHECKED_ITEMS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('removeCheckedItems', () => {
  it('Should dispatch addGroceryItemRequest and addGroceryItemSuccess', () => {
    const store = mockStore({});
    const token = '';
    const toggleCheckedMock = { status: 'ok' };

    const mockRemovedCheckedInDB =
      jest.fn().mockImplementation(() => Promise.resolve(toggleCheckedMock));

    const expectedActions = [
      { type: REMOVE_CHECKED_ITEMS_REQUEST },
      { type: REMOVE_CHECKED_ITEMS_SUCCESS },
    ];

    return store.dispatch(removeCheckedItems(token, mockRemovedCheckedInDB)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
