import {
  ADD_GROCERY_ITEM_REQUEST,
  addGroceryItemRequest,
  ADD_GROCERY_ITEM_SUCCESS,
  addGroceryItemSuccess,
  ADD_GROCERY_ITEM_ERROR,
  addGroceryItemError,
  addGroceryItem
} from '../actions';


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
