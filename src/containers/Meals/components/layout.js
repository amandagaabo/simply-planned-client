import React from 'react';
import moment from 'moment';

import MealsNav from './meals-nav';
import MealField from './meal-field';

export default function Layout(props) {
  const dayMeals = props.meals.map( meal => {
    const dayName = moment(meal.date).format('dddd');

    return (
      <div key={meal.date}>
        <h3>{dayName}</h3>
          <MealField mealName={meal.breakfast} mealType="breakfast" mealDate={meal.date} onUpdateMeal={props.onUpdateMeal}/>
          <MealField mealName={meal.lunch} mealType="lunch" mealDate={meal.date} onUpdateMeal={props.onUpdateMeal}/>
          <MealField mealName={meal.dinner} mealType="dinner" mealDate={meal.date} onUpdateMeal={props.onUpdateMeal}/>
      </div>
    );
  });

  return (
    <div className="row">
      <MealsNav meals={props.meals}/>
      <div className="col-12">
        {dayMeals}
      </div>
    </div>

  );
};
