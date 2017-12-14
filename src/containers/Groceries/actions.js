import getGroceriesFromDB from './get-groceries';
import addGroceryToDB from './add-grocery';
// FETCH GROCERIES
export const FETCH_GROCERIES_REQUEST = 'FETCH_GROCERIES_REQUEST';
export const fetchGroceriesRequest = () => ({
  type: FETCH_GROCERIES_REQUEST
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

export const fetchGroceries = token => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(fetchGroceriesRequest());
  // search for the users groceries in the database by user id
  getGroceriesFromDB(token).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(fetchGroceriesSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(fetchGroceriesError(err));
  })
};

// ADD GROCERY
export const ADD_GROCERY_ITEM_REQUEST = 'ADD_GROCERY_ITEM_REQUEST';
export const addGroceryItemRequest = () => ({
  type: ADD_GROCERY_ITEM_REQUEST
});

export const ADD_GROCERY_ITEM_SUCCESS = 'ADD_GROCERY_ITEM_SUCCESS';
export const addGroceryItemSuccess = item => ({
  type: ADD_GROCERY_ITEM_SUCCESS,
  item
});

export const ADD_GROCERY_ITEM_ERROR = 'ADD_GROCERY_ITEM_ERROR';
export const addGroceryItemError = error => ({
  type: ADD_GROCERY_ITEM_ERROR,
  error
});

export const addGroceryItem = (token, itemName) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(addGroceryItemRequest());
  // search for the users groceries in the database by user id
  addGroceryToDB(token, itemName).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(addGroceryItemSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(addGroceryItemError(err));
  })
};

// REMOVE GROCERY
export const REMOVE_CHECKED_ITEMS = 'REMOVE_CHECKED_ITEMS';
export const removeCheckedItems = id => ({
  type: REMOVE_CHECKED_ITEMS,
  id
});

// TOGGLE GROCERY
export const TOGGLE_CHECKED = 'TOGGLE_CHECKED';
export const toggleChecked = id => ({
  type: TOGGLE_CHECKED,
  id
});
