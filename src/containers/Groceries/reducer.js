import {
  REMOVE_CHECKED_ITEMS,
  TOGGLE_CHECKED,
  FETCH_GROCERIES_REQUEST,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_ERROR,
  ADD_GROCERY_ITEM_REQUEST,
  ADD_GROCERY_ITEM_SUCCESS,
  ADD_GROCERY_ITEM_ERROR
} from './actions';

const initialState = {
  groceries: [],
  loading: false,
  error: null
};

export default function (state=initialState, action) {
  // FETCH GROCERIES
  if (action.type === FETCH_GROCERIES_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  else if (action.type === FETCH_GROCERIES_SUCCESS) {
    console.log('action success, groceries found:', action.groceries)
    return {
      ...state,
      loading: false,
      groceries: action.groceries || []
    }
  }
  else if (action.type === FETCH_GROCERIES_ERROR) {
    console.log('fetch groceries action error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  // ADD GROCERY
  else if (action.type === ADD_GROCERY_ITEM_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  else if (action.type === ADD_GROCERY_ITEM_SUCCESS) {
    console.log('action type is add grocery success, grocery to add:', action.item)

    return {
      ...state,
      loading: false,
      groceries: [...state.groceries, {
        id: action.item.id,
        name: action.item.name,
        checked: action.item.checked
      }]
    }
  }
  else if (action.type === ADD_GROCERY_ITEM_ERROR) {
    console.log('add grocery action error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  // TOGGLE GROCERY ITEMS
  else if (action.type === TOGGLE_CHECKED) {
    return {
      ...state,
      groceries: state.groceries.map( item => item.id === parseInt(action.id, 10)
        ? {...item, checked: !item.checked}
        : item
      )
    }
  }

  // REMOVE CHECKED GROCERY ITEMS
  else if (action.type === REMOVE_CHECKED_ITEMS) {
    return {
      ...state,
      groceries: state.groceries.filter( item => item.checked === false )
    }
  }

  return state;
};
