import {
  REMOVE_CHECKED_ITEMS_REQUEST,
  removeCheckedItemsRequest,
  REMOVE_CHECKED_ITEMS_SUCCESS,
  removeCheckedItemsSuccess,
  REMOVE_CHECKED_ITEMS_ERROR,
  removeCheckedItemsError,
  removeCheckedItems
} from '../actions';


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
