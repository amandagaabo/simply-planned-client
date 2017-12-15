import getMealsFromDB from './get-meals';

// FETCH MEALS
export const FETCH_MEALS_REQUEST = 'FETCH_MEALS_REQUEST';
export const fetchMealsRequest = () => ({
  type: FETCH_MEALS_REQUEST
});

export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const fetchMealsSuccess = meals => ({
  type: FETCH_MEALS_SUCCESS,
  meals
});

export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const fetchMealsError = error => ({
  type: FETCH_MEALS_ERROR,
  error
});

export const fetchMeals = token => dispatch => {
  // dispatch the request action to start the request and show loading
  dispatch(fetchMealsRequest());
  // search for the users meals in the database by user id (in req.user)
  getMealsFromDB(token).then(result => {
    // dispatch the success function and pass in the result from the db search on success
    dispatch(fetchMealsSuccess(result));
  }).catch(err => {
    // dispatch the error function if something goes wrong
    dispatch(fetchMealsError(err));
  })
};

export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = (date, meal, item) => ({
  type: UPDATE_MEAL,
  date,
  meal,
  item
});
