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
    const error = { message: 'Internal server error'};
    const action = fetchGroceriesError(error);
    expect(action.type).toEqual(FETCH_GROCERIES_ERROR);
    expect(action.error).toEqual(error);
  });
});

// describe.only('fetchGroceries', () => {
//   it('Should dispatch fetchGroceriesRequest', () => {
//     const token = '';
//
//     const groceries = []
//
//     const dispatch = jest.fn();
//
//     global.getGroceriesFromDB = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return groceries;
//         }
//       })
//     );
//
//     return fetchGroceries(token)(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith(fetchGroceriesRequest());
//     });
//   });
// });

describe('addGroceryItemRequest', () => {
  const action = addGroceryItemRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(ADD_GROCERY_ITEM_REQUEST);
  });
});

describe('addGroceryItemSuccess', () => {
  it('Should return the action', () => {
    const item = {id: 123, name: 'bread', checked: false};
    const action = addGroceryItemSuccess(item);
    expect(action.type).toEqual(ADD_GROCERY_ITEM_SUCCESS);
    expect(action.item.id).toEqual(item.id);
    expect(action.item.name).toEqual(item.name);
    expect(action.item.checked).toEqual(item.checked);
  });
});

describe('addGroceryItemError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error'};
    const action = addGroceryItemError(error);
    expect(action.type).toEqual(ADD_GROCERY_ITEM_ERROR);
    expect(action.error).toEqual(error);
  });
});

// describe.only('addGroceryItem', () => {
//   it('Should dispatch addGroceryItemRequest', () => {
//     const token = '';
//     const itemName = 'jello';
//     const result = {id: 123, name: 'jello', checked: false}
//
//     const dispatch = jest.fn();
//
//     global.addGroceryToDB = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return result;
//         }
//       })
//     );
//
//     return addGroceryItem(token, itemName)(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith(addGroceryItemRequest());
//     });
//   });
// });

describe('toggleCheckedRequest', () => {
  const action = toggleCheckedRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(TOGGLE_CHECKED_REQUEST);
  });
});

describe('toggleCheckedSuccess', () => {
  it('Should return the action', () => {
    const item = {id: 123, checked: false};
    const action = toggleCheckedSuccess(item);
    expect(action.type).toEqual(TOGGLE_CHECKED_SUCCESS);
    expect(action.item.id).toEqual(item.id);
    expect(action.item.checked).toEqual(item.checked);
  });
});

describe('toggleCheckedError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error'};
    const action = toggleCheckedError(error);
    expect(action.type).toEqual(TOGGLE_CHECKED_ERROR);
    expect(action.error).toEqual(error);
  });
});

// describe.only('toggleChecked', () => {
//   it('Should dispatch toggleCheckedRequest', () => {
//     const token = '';
//
//     const result = {}
//
//     const dispatch = jest.fn();
//
//     global.getGroceriesFromDB = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return result;
//         }
//       })
//     );
//
//     return toggleChecked(token)(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith(toggleCheckedRequest(result));
//     });
//   });
// });

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
    const error = { message: 'Internal server error'};
    const action = removeCheckedItemsError(error);
    expect(action.type).toEqual(REMOVE_CHECKED_ITEMS_ERROR);
    expect(action.error).toEqual(error);
  });
});

// describe.only('removeCheckedItems', () => {
//   it('Should dispatch fetchGroceriesRequest', () => {
//     const token = '';
//
//     const dispatch = jest.fn();
//
//     global.removeCheckedInDB = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true
//       })
//     );
//
//     return removeCheckedItems(token)(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith(removeCheckedItemsRequest());
//     });
//   });
// });
