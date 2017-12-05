import React from 'react';
import {connect} from 'react-redux';

import moment from 'moment';
import {Icon} from 'react-fa';
import MealField from './meal-field';
import Nav from './nav';

import './meals.css';

export function Meals(props) {
  let pageTitle = "";
  const startDayString = props.meals[0].date;
  const endDayString = props.meals[props.meals.length - 1].date;

  const startMonth = moment(startDayString).format('MMMM');
  const endMonth = moment(endDayString).format('MMMM')

  const startDay = moment(startDayString).format('Do');
  const endDay = moment(endDayString).format('Do');

  if (startDayString === endDayString) {
    pageTitle = `${startMonth} ${startDay}`
  } else if (startMonth === endMonth) {
    pageTitle = `${startMonth} ${startDay} - ${endDay}`
  } else {
    pageTitle = `${startMonth} ${startDay} - ${endMonth} ${endDay}`
  }

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
          <div id="calendar-nav">
            <div className="today">
              <a href="">today</a>
            </div>

            <div className="prev">
              <a href=""><Icon name="chevron-left" /></a>
            </div>

            <div className="next">
              <a href=""><Icon name="chevron-right" /></a>
            </div>

            <div className="title">
              <h2>{pageTitle}</h2>
            </div>
          </div>

          {dayMeals}
        </div>
      </section>
      <Nav />
    </main>

  );
};

export const mapStateToProps = state => ({
  meals: state.app.meals
});

export default connect(mapStateToProps)(Meals)
