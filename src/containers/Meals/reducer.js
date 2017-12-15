import moment from 'moment';
import _ from 'lodash';
import {
  FETCH_MEALS_REQUEST,
  FETCH_MEALS_SUCCESS,
  FETCH_MEALS_ERROR,
  UPDATE_MEAL
} from './actions';

function getMealStarter(sunday) {
  const mealStarter = [{'date': sunday}];
  for (let i = 1; i < 7; i++) {
    mealStarter.push({'date': moment(sunday).add(i, 'd').toISOString()})
  };
  return mealStarter;
}

// set initial state to this week
const thisSunday = moment().startOf('week').toISOString();
const meals = getMealStarter(thisSunday)

const initialState = {
  sunday: thisSunday,
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
      console.log('fetch meals action success with data and sunday:', action.results)
      const sunday = action.results.sunday;
      const starterMeals = getMealStarter(sunday);
      const returnedMeals = action.results.meals;

      const meals = _.map(starterMeals, function(day){
        return _.assign(day, _.find(returnedMeals, { date: day.date }));
      });

      return {
        ...state,
        loading: false,
        sunday,
        meals
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
