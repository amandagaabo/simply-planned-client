import getGroceriesFromDB from './get-groceries';
import addGroceryToDB from './add-grocery';
import toggleCheckedInDB from './toggle-checked';
import removeCheckedInDB from './remove-checked';

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

export const FETCH_GROCERIES_ERROR = 'FETCH_GROCERIES_ERROR';
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

// TOGGLE GROCERY
export const TOGGLE_CHECKED_REQUEST = 'TOGGLE_CHECKED_REQUEST';
export const toggleCheckedRequest = () => ({
  type: TOGGLE_CHECKED_REQUEST
});

export const TOGGLE_CHECKED_SUCCESS = 'TOGGLE_CHECKED_SUCCESS';
export const toggleCheckedSuccess = item => ({
  type: TOGGLE_CHECKED_SUCCESS,
  item
});

export const TOGGLE_CHECKED_ERROR = 'TOGGLE_CHECKED_ERROR';
export const toggleCheckedError = error => ({
  type: TOGGLE_CHECKED_ERROR,
  error
});

export const toggleChecked = (token, itemID, checked) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(toggleCheckedRequest());
  // search for the users groceries in the database by user id
  toggleCheckedInDB(token, itemID, checked).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(toggleCheckedSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(toggleCheckedError(err));
  })
};

// REMOVE CHECKED ITEMS
export const REMOVE_CHECKED_ITEMS_REQUEST = 'REMOVE_CHECKED_ITEMS_REQUEST';
export const removeCheckedItemsRequest = () => ({
  type: REMOVE_CHECKED_ITEMS_REQUEST
});

export const REMOVE_CHECKED_ITEMS_SUCCESS = 'REMOVE_CHECKED_ITEMS_SUCCESS';
export const removeCheckedItemsSuccess = () => ({
  type: REMOVE_CHECKED_ITEMS_SUCCESS
});

export const REMOVE_CHECKED_ITEMS_ERROR = 'REMOVE_CHECKED_ITEMS_ERROR';
export const removeCheckedItemsError = error => ({
  type: REMOVE_CHECKED_ITEMS_ERROR,
  error
});

export const removeCheckedItems = (token) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(removeCheckedItemsRequest());
  // search for the users groceries in the database by user id
  removeCheckedInDB(token).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(removeCheckedItemsSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(removeCheckedItemsError(err));
  })
};
