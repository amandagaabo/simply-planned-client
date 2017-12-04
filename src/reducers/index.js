//import * as actions from '../actions';
const action = null;

const initialState = {
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
  ],
  groceries: [
    { id: 0, name: "apples" },
    { id: 1, name: "bananas" },
    { id: 2, name: "chicken" }
  ]
};

export const simplyPlannedReducer = (state=initialState, action) => {
    return state;
};
