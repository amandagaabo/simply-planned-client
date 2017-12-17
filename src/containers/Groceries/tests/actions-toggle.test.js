import {
  TOGGLE_CHECKED_REQUEST,
  toggleCheckedRequest,
  TOGGLE_CHECKED_SUCCESS,
  toggleCheckedSuccess,
  TOGGLE_CHECKED_ERROR,
  toggleCheckedError,
  toggleChecked
} from '../actions';


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
