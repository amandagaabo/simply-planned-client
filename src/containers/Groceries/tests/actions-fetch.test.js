import {
  FETCH_GROCERIES_REQUEST,
  fetchGroceriesRequest,
  FETCH_GROCERIES_SUCCESS,
  fetchGroceriesSuccess,
  FETCH_GROCERIES_ERROR,
  fetchGroceriesError,
  fetchGroceries
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
