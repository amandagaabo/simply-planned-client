import {ADD_GROCERY_ITEM, REMOVE_CHECKED_ITEMS, TOGGLE_CHECKED} from '../actions';

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

  groceries: [
    { id: 0, name: "apples", checked: false },
    { id: 1, name: "bananas", checked: false },
    { id: 2, name: "chicken", checked: true }
  ]
};

export const groceryReducer = (state=initialState, action) => {
  if (action.type === ADD_GROCERY_ITEM) {
    let id;
    if(state.groceries.length === 0) {
      id = 0;
    } else {
      id = state.groceries[state.groceries.length - 1].id + 1;
    }

    const newItem = {id, name: action.item, checked: false}

    return {
      ...state,
      groceries: [...state.groceries, newItem]
    }
  }

  if (action.type === TOGGLE_CHECKED) {
    return {
      ...state,
      groceries: state.groceries.map( item => item.id === parseInt(action.id, 10)
        ? {...item, checked: !item.checked}
        : item
      )
    }
  }

  if (action.type === REMOVE_CHECKED_ITEMS) {
    return {
      ...state,
      groceries: state.groceries.filter( item => item.checked === false )
    }
  }

  return state;
};
