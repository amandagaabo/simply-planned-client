import {
  ADD_GROCERY_ITEM,
  REMOVE_CHECKED_ITEMS,
  TOGGLE_CHECKED,
  FETCH_GROCERIES_REQUEST,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_ERROR
} from './actions';

const initialState = {
  groceries: [],
  loading: false,
  error: null
};

export default function (state=initialState, action) {
  if (action.type === FETCH_GROCERIES_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  else if (action.type === FETCH_GROCERIES_SUCCESS) {
    console.log('action success, groceries:', action.groceries)
    return {
      ...state,
      loading: false,
      groceries: action.groceries
    }
  }
  else if (action.type === FETCH_GROCERIES_ERROR) {
    console.log('action error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  else if (action.type === ADD_GROCERY_ITEM) {
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

  else if (action.type === TOGGLE_CHECKED) {
    return {
      ...state,
      groceries: state.groceries.map( item => item.id === parseInt(action.id, 10)
        ? {...item, checked: !item.checked}
        : item
      )
    }
  }

  else if (action.type === REMOVE_CHECKED_ITEMS) {
    return {
      ...state,
      groceries: state.groceries.filter( item => item.checked === false )
    }
  }

  return state;
};
