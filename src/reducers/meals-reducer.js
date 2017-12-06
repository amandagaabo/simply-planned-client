import {UPDATE_MEAL} from '../actions';

const initialState = {
  // normalized format:
  // meals: {
  //   byId: {
  //     "2017-12-03": {
  //       date: "2017-12-03",
  //       breakfast: "oatmeal",
  //       lunch: "grilled chicken salad",
  //       dinner: "burger and sweet potato fries"
  //     }
  //   }
  //   allIds: ["2017-12-03", ]
  // }

  meals: [
    {
      date: "2017-12-03",
      breakfast: "oatmeal",
      lunch: "grilled chicken salad",
      dinner: "burger and sweet potato fries"
    },
    {
      date: "2017-12-04",
      breakfast: "cereal",
      lunch: "turkey and cheese wrap",
      dinner: "pasta and red sauce with veggies"
    },
    {
      date: "2017-12-05",
      breakfast: "eggs and potatoes",
      lunch: "spinach and pear salad",
      dinner: "pork chops and veggies"
    },
    {
      date: "2017-12-06"
    },
    {
      date: "2017-12-07",
      breakfast: "eggs and toast",
      lunch: "turkey sub and fries",
      dinner: "grilled cheese and soup"
    },
    {
      date: "2017-12-08",
      breakfast: "cereal",
      lunch: "ham and swiss wrap",
      dinner: "chicken fingers and sweet potato fries"
    },
    {
      date: "2017-12-09",
      breakfast: "oatmeal with bananas and walnuts",
      lunch: "cobb salad",
      dinner: "turkey and mashed potatoes"
    }
  ]
};

export const mealsReducer = (state=initialState, action) => {
  if (action.type === UPDATE_MEAL) {
    return {
      ...state,
      meals: state.meals.map( meal => meal.date === action.date
        ? {...meal, [action.meal]:action.item}
        : meal
      )
    }
  }

  return state;
};
