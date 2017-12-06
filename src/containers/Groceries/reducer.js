import {ADD_GROCERY_ITEM, REMOVE_CHECKED_ITEMS, TOGGLE_CHECKED} from './actions';

const initialState = {
  groceries: [
    { id: 0, name: "apples", checked: false },
    { id: 1, name: "bananas", checked: false },
    { id: 2, name: "chicken", checked: true }
  ]
};

export default function (state=initialState, action) {
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
