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

export const fetchMeals = (token, sunday) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(fetchMealsRequest());
  // search for the users meals in the database by user id (in req.user)
  getMealsFromDB(token, sunday).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(fetchMealsSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(fetchMealsError(err));
  })
};


// UPDATE MEALS
export const UPDATE_MEAL_REQUEST = 'UPDATE_MEAL_REQUEST';
export const updateMealRequest = () => ({
  type: UPDATE_MEAL_REQUEST
});

export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS';
export const updateMealSuccess = meal => ({
  type: UPDATE_MEAL_SUCCESS,
  meal
});

export const UPDATE_MEAL_ERROR = 'UPDATE_MEAL_ERROR';
export const updateMealError = error => ({
  type: UPDATE_MEAL_ERROR,
  error
});

export const updateMeal = (token, date, meal, item) => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(updateMealRequest());
  // search for the users meals in the database by user id (in req.user)
  updateMealInDB(token, date, meal, item).then(meal => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(updateMealSuccess(meal));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(updateMealError(err));
  })
};
