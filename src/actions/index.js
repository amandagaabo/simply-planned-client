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
