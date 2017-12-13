import getGroceriesFromDB from './get-groceries'

export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const addGroceryItem = item => ({
  type: ADD_GROCERY_ITEM,
  item
});

export const REMOVE_CHECKED_ITEMS = 'REMOVE_CHECKED_ITEMS';
export const removeCheckedItems = id => ({
  type: REMOVE_CHECKED_ITEMS,
  id
});

export const TOGGLE_CHECKED = 'TOGGLE_CHECKED';
export const toggleChecked = id => ({
  type: TOGGLE_CHECKED,
  id
});

export const FETCH_GROCERIES_REQUEST = 'FETCH_GROCERIES_REQUEST';
export const fetchGroceriesRequest = userId => ({
  type: FETCH_GROCERIES_REQUEST,
  userId
});

export const FETCH_GROCERIES_SUCCESS = 'FETCH_GROCERIES_SUCCESS';
export const fetchGroceriesSuccess = groceries => ({
  type: FETCH_GROCERIES_SUCCESS,
  groceries
});

export const FETCH_GROCERIES_ERROR = 'FETCH_GROCERIES_Error';
export const fetchGroceriesError = error => ({
  type: FETCH_GROCERIES_ERROR,
  error
});

export const fetchGroceries = userId => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(fetchGroceriesRequest(userId));
  // search for the users groceries in the database by user id
  getGroceriesFromDB(userId).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(fetchGroceriesSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(fetchGroceriesError(err));
  })

};
