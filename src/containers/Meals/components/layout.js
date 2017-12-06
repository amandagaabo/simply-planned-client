import React from 'react';
import {Icon} from 'react-fa';
import moment from 'moment';

import MealsNav from './meals-nav';
import MealField from './meal-field';
import Groceries from '../../Groceries/index';

import './layout.css'

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
    <main role="main">
      <section className={props.showSideBar ? "meals-container meals-container__with-sidebar" : "meals-container"}>
        <div className={props.showSideBar ? "toggle-side-bar__with-sidebar" : "toggle-side-bar"}
          onClick={props.onToggleSideBar}>
          <Icon name="chevron-left" />
        </div>

        <div className="row">
          <MealsNav meals={props.meals}/>
          <div className="col-12">
            {dayMeals}
          </div>
        </div>
      </section>

      <section className={props.showSideBar ? "groceries-side-bar groceries-side-bar__visible" : "groceries-side-bar"}>
        <Groceries />
      </section>
    </main>
  );
};
