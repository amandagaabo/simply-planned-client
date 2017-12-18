import { getMealStarter, default as reducer} from './../reducer';
import moment from 'moment';
import _ from 'lodash';
import {
  fetchMealsRequest,
  fetchMealsSuccess,
  fetchMealsError,
  updateMealRequest,
  updateMealSuccess,
  updateMealError,
  updateMealClient
} from './../actions'

// initial state
const thisSunday = moment().startOf('week').toISOString();
const thisWednesday = moment(thisSunday).add(3, 'd').toISOString();
const thisThursday = moment(thisSunday).add(4, 'd').toISOString();
const starterMeals = getMealStarter(thisSunday);

const initialState = {
  sunday: thisSunday,
  meals: starterMeals,
  loading: false,
  error: null
};

const mockMeals = [
  {
    date: thisWednesday,
    breakfast: 'pancakes',
    lunch: 'sandwich',
    dinner: 'pasta'
  },
  {
    date: thisThursday,
    breakfast: 'oatmeal',
    lunch: 'soup',
    dinner: 'chicken'
  }
]

const fetchResults = {
  meals: mockMeals,
  sunday: thisSunday
};


describe('Meals reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });


  describe('Fetch meals requests', () => {
    it('Should set loading to true on fetchMealsRequest', () => {
      const state = reducer(undefined, fetchMealsRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set meals, sunday and loading on fetchMealsSuccess', () => {
      const state = reducer(undefined, fetchMealsSuccess(fetchResults));
      expect(state.meals.find(meal => meal.date === thisWednesday)).toEqual(fetchResults.meals[0]);
      expect(state.meals.find(meal => meal.date === thisThursday)).toEqual(fetchResults.meals[1]);
      expect(state.sunday).toBe(fetchResults.sunday);
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on fetchMealsError', () => {
      const error = {message: 'error'};
      const state = reducer(undefined, fetchMealsError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });
  });

  describe('Update meal requests', () => {
    it('Should set loading to true on updateMealRequest', () => {
      const state = reducer(undefined, updateMealRequest());
      expect(state.loading).toBe(true);
    });

    it('Should set loading to false on updateMealSuccess', () => {
      const state = reducer(undefined, updateMealSuccess());
      expect(state.loading).toBe(false);
    });

    it('Should set error and loading on updateMealError', () => {
      const error = {message: 'error'};
      const state = reducer(undefined, updateMealError(error));
      expect(state.error).toEqual(error);
      expect(state.loading).toBe(false);
    });

    it('Should set meal and loading on updateMealClient', () => {
      const date = thisThursday
      const name = 'breakfast'
      const item = 'pizza'

      const state = reducer(undefined, updateMealClient(date, name, item));
      expect(state.meals.find(meal => meal.date === date).breakfast).toEqual(item);
      expect(state.loading).toBe(false);
    });
  });

});
