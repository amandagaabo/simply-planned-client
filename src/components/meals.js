import React from 'react';
import {connect} from 'react-redux';

import moment from 'moment';
import MealsNav from './meals-nav';
import MealField from './meal-field';

import './meals.css';

export function Meals(props) {
  const dayMeals = props.meals.map( meal => {
    const dayName = moment(meal.date).format('dddd');

    return (
      <div key={meal.date}>
        <h3>{dayName}</h3>
          <MealField mealName={meal.breakfast} mealType="breakfast" mealDate={meal.date} />
          <MealField mealName={meal.lunch} mealType="lunch" mealDate={meal.date} />
          <MealField mealName={meal.dinner} mealType="dinner" mealDate={meal.date} />
      </div>
    );
  });

  return (
    <main role="main">
      <section>
        <div className="row">
          <MealsNav />
          <div className="col-12">
            {dayMeals}
          </div>
        </div>
      </section>
    </main>

  );
};

export const mapStateToProps = state => ({
  meals: state.app.meals
});

export default connect(mapStateToProps)(Meals)
