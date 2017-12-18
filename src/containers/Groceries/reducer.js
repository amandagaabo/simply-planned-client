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
  switch(action.type) {
    case FETCH_GROCERIES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_GROCERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        groceries: action.groceries || []
      }
    case FETCH_GROCERIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case ADD_GROCERY_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ADD_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        groceries: [...state.groceries, {
          id: action.item.id,
          name: action.item.name,
          checked: action.item.checked
        }]
      }
    case ADD_GROCERY_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case TOGGLE_CHECKED_REQUEST:
      return {
        ...state,
        loading: true
      }
    case TOGGLE_CHECKED_SUCCESS:
      return {
        ...state,
        loading: false,
        groceries: state.groceries.map( item => item.id === action.item.id
          ? {...item, checked: action.item.checked}
          : item
        )
      }
    case TOGGLE_CHECKED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case REMOVE_CHECKED_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case REMOVE_CHECKED_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        groceries: state.groceries.filter( item => item.checked === false )
      }
    case REMOVE_CHECKED_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
};
