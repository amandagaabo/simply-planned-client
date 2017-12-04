export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const addGroceryItem = item => ({
    type: ADD_GROCERY_ITEM,
    item
});

export const REMOVE_GROCERY_ITEM = 'REMOVE_GROCERY_ITEM';
export const removeGroceryItem = id => ({
    type: REMOVE_GROCERY_ITEM,
    id
});

export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = (date, meal, item) => ({
    type: UPDATE_MEAL,
    date,
    meal,
    item
});
