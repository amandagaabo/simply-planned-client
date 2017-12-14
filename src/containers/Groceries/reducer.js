import {
  FETCH_GROCERIES_REQUEST,
  FETCH_GROCERIES_SUCCESS,
  FETCH_GROCERIES_ERROR,
  ADD_GROCERY_ITEM_REQUEST,
  ADD_GROCERY_ITEM_SUCCESS,
  ADD_GROCERY_ITEM_ERROR,
  TOGGLE_CHECKED_REQUEST,
  TOGGLE_CHECKED_SUCCESS,
  TOGGLE_CHECKED_ERROR,
  REMOVE_CHECKED_ITEMS_REQUEST,
  REMOVE_CHECKED_ITEMS_SUCCESS,
  REMOVE_CHECKED_ITEMS_ERROR
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
  } else if (action.type === FETCH_GROCERIES_SUCCESS) {
    return {
      ...state,
      loading: false,
      groceries: action.groceries || []
    }
  } else if (action.type === FETCH_GROCERIES_ERROR) {
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
  } else if (action.type === ADD_GROCERY_ITEM_SUCCESS) {
    return {
      ...state,
      loading: false,
      groceries: [...state.groceries, {
        id: action.item.id,
        name: action.item.name,
        checked: action.item.checked
      }]
    }
  } else if (action.type === ADD_GROCERY_ITEM_ERROR) {
    console.log('add grocery action error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  // TOGGLE GROCERY ITEMS
  else if (action.type === TOGGLE_CHECKED_REQUEST) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === TOGGLE_CHECKED_SUCCESS) {
    return {
      ...state,
      groceries: state.groceries.map( item => item.id === action.item.id
        ? {...item, checked: action.item.checked}
        : item
      )
    }
  } else if (action.type === TOGGLE_CHECKED_ERROR) {
    console.log('toggle action error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  // REMOVE CHECKED GROCERY ITEMS
  else if (action.type === REMOVE_CHECKED_ITEMS_REQUEST) {
    return {
      ...state,
      loading: true
    }
  } else if (action.type === REMOVE_CHECKED_ITEMS_SUCCESS) {
    return {
      ...state,
      groceries: state.groceries.filter( item => item.checked === false )
    }
  } else if (action.type === REMOVE_CHECKED_ITEMS_ERROR) {
    console.log('remove checked items error', action.error)
    return {
      ...state,
      loading: false,
      error: action.error
    }
  }

  return state;
};
