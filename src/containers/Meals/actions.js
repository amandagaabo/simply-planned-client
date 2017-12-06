export const UPDATE_MEAL = 'UPDATE_MEAL';
export const updateMeal = (date, meal, item) => ({
  type: UPDATE_MEAL,
  date,
  meal,
  item
});
