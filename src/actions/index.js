export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const addGroceryItem = item => ({
  type: ADD_GROCERY_ITEM,
  item
});

export const REMOVE_CHECKED_ITEMS = 'REMOVE_CHECKED_ITEMS';
export const removeCheckedItems = id => ({
  type: REMOVE_CHECKED_ITEMS,
  id
});

export const TOGGLE_CHECKED = 'TOGGLE_CHECKED';
export const toggleChecked = id => ({
  type: TOGGLE_CHECKED,
  id
})

export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = (date, meal, item) => ({
  type: UPDATE_MEAL,
  date,
  meal,
  item
});
