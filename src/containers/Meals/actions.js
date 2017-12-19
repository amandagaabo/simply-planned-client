import getMealsFromDB from './get-meals';
import updateMealInDB from './update-meal';

// FETCH MEALS
export const FETCH_MEALS_REQUEST = 'FETCH_MEALS_REQUEST';
export const fetchMealsRequest = () => ({
  type: FETCH_MEALS_REQUEST
});

export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const fetchMealsSuccess = results => ({
  type: FETCH_MEALS_SUCCESS,
  results
});

export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const fetchMealsError = error => ({
  type: FETCH_MEALS_ERROR,
  error
});

export const fetchMeals = (token, sunday, fetch=getMealsFromDB) => dispatch => {
  // dispatch the request action to start the request
  dispatch(fetchMealsRequest());
  // search for the users meals in the database (AJAX)
  return fetch(token, sunday).then(result => {
    // dispatch the success action and pass in the result from the db search on success
    dispatch(fetchMealsSuccess(result));
  }).catch(err => {
    // dispatch the error action if something goes wrong
    dispatch(fetchMealsError(err));
  })
};


// UPDATE MEAL CLIENT SIDE
export const UPDATE_MEAL_CLIENT = 'UPDATE_MEAL_CLIENT';
export const updateMealClient =  (date, name, item) => ({
  type: UPDATE_MEAL_CLIENT,
  date,
  name,
  item
});

// UPDATE MEAL SERVER SIDE
export const UPDATE_MEAL_REQUEST = 'UPDATE_MEAL_REQUEST';
export const updateMealRequest = () => ({
  type: UPDATE_MEAL_REQUEST
});

export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS';
export const updateMealSuccess = () => ({
  type: UPDATE_MEAL_SUCCESS
});

export const UPDATE_MEAL_ERROR = 'UPDATE_MEAL_ERROR';
export const updateMealError = error => ({
  type: UPDATE_MEAL_ERROR,
  error
});

export const updateMealServer = (token, date, name, item, fetch=updateMealInDB) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(updateMealRequest());
  // search for the users meals in the database by user id (in req.user)
  return fetch(token, date, name, item).then( () => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(updateMealSuccess());
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(updateMealError(err));
  })
};
