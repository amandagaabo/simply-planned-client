import moment from 'moment';
import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_ERROR,
  UPDATE_MEAL
} from './actions';


const sunday = moment().startOf('week')._d;
const meals = [{'date': sunday}]

for (let i = 1; i < 7; i++) {
  meals.push({'date': moment().startOf('week').add(i, 'd')._d})
}

console.log('meals:', meals)


const initialState = {
  meals,
  loading: false,
  error: null
};


export default function (state=initialState, action) {
  switch(action.type){

    // FETCH MEALS
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_MEALS_SUCCESS:
    console.log('fetch meals action success with data:', action.meals)
      return {
        ...state,
        loading: false,
        meals: action.meals || []
      }

    case FETCH_MEALS_ERROR:
      console.log('fetch meals action error', action.error)
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case UPDATE_MEAL:
      return {
        ...state,
        meals: state.meals.map( meal => meal.date === action.date
          ? {...meal, [action.meal]:action.item}
          : meal
        )
      }

    default:
      return state;
  }
};
