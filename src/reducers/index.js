import {ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM} from '../actions';

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
  if (action.type === ADD_GROCERY_ITEM) {
    let id;
    if(state.groceries.length === 0) {
      id = 0;
    } else {
      id = state.groceries[state.groceries.length - 1].id + 1;
    }

    const newItem = {id, name: action.item}

    return Object.assign( {}, state, {
      groceries: [...state.groceries, newItem]
    });
  }

  if (action.type === REMOVE_GROCERY_ITEM) {
    return Object.assign( {}, state, {
      groceries: state.groceries.filter( item => item.id !== parseInt(action.id, 10) )
    })
  }
  return state;
};
