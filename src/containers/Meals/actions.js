export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = (date, meal, item) => ({
  type: UPDATE_MEAL,
  date,
  meal,
  item
});

export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';
export const toggleSideBar = () => ({
  type: TOGGLE_SIDE_BAR
});
