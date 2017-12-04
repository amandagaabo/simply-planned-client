import React from 'react';
import moment from 'moment';
import {Icon} from 'react-fa'
import MealField from "./meal-field";

import './meals.css';

export default function Meals(props) {
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

  const dayMeals = props.meals.map( (meal) => {
    const dayName = moment(meal.date).format('dddd');

    return (
      <div key={meal.date}>
        <h3>{dayName}</h3>
          <MealField mealName={meal.breakfast} mealType="breakfast" />
          <MealField mealName={meal.lunch} mealType="lunch" />
          <MealField mealName={meal.dinner} mealType="dinner" />
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
    </main>
  );
};

Meals.defaultProps= {
  "meals": [
    {
      "date": "2017-12-03",
      "breakfast": "oatmeal",
      "lunch": "grilled chicken salad",
      "dinner": "burger and sweet potato fries"
    },
    {
      "date": "2017-12-04",
      "breakfast": "cereal",
      "lunch": "turkey and cheese wrap",
      "dinner": "pasta and red sauce with veggies"
    },
    {
      "date": "2017-12-05",
      "breakfast": "eggs and potatoes",
      "lunch": "spinach and pear salad",
      "dinner": "pork chops and veggies"
    },
    {
      "date": "2017-12-06"
    },
    {
      "date": "2017-12-07",
      "breakfast": "eggs and toast",
      "lunch": "turkey sub and fries",
      "dinner": "grilled cheese and soup"
    },
    {
      "date": "2017-12-08",
      "breakfast": "cereal",
      "lunch": "ham and swiss wrap",
      "dinner": "chicken fingers and sweet potato fries"
    },
    {
      "date": "2017-12-09",
      "breakfast": "oatmeal with bananas and walnuts",
      "lunch": "cobb salad",
      "dinner": "turkey and mashed potatoes"
    }
  ]
}
