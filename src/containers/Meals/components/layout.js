import React from 'react';
import moment from 'moment';
import MealsNav from './meals-nav';
import MealField from './meal-field';
import './layout.css';

export default function Layout(props) {
  const dayMeals = props.meals.map((meal) => {
    const dayName = moment(meal.date).format('dddd');
    const shortMonth = moment(meal.date).format('MMM');
    const dayNumber = moment(meal.date).format('Do');
    return (
      <div key={meal.date} className="meal-container">
        <h3 className="day-header">{`${dayName} - ${shortMonth} ${dayNumber}`}</h3>
        <MealField
          mealName={meal.breakfast}
          mealType="breakfast"
          mealDate={meal.date}
          onUpdateMeal={props.onUpdateMeal}
          authToken={props.authToken}
        />

        <MealField
          mealName={meal.lunch}
          mealType="lunch"
          mealDate={meal.date}
          onUpdateMeal={props.onUpdateMeal}
          authToken={props.authToken}
        />

        <MealField
          mealName={meal.dinner}
          mealType="dinner"
          mealDate={meal.date}
          onUpdateMeal={props.onUpdateMeal}
          authToken={props.authToken}
        />
      </div>
    );
  });

  return (
    <div className="row">
      <MealsNav
        meals={props.meals}
        authToken={props.authToken}
        sunday={props.sunday}
        onGetMeals={props.onGetMeals}
        onUpdateMeal={props.onUpdateMeal}
      />
      <div className="col-12">
        {dayMeals}
      </div>
    </div>

  );
}
