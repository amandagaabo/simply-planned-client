import React from 'react';
import autosize from 'autosize';

import './meal-field.css';

export default function MealField(props) {
  function handleChange(e) {
    const date = e.target.dataset.date;
    const meal = e.target.dataset.meal;
    const item = e.target.value;
    // update meal in state
    props.onUpdateMeal(date, meal, item);
    // resize textarea
    autosize(e.target);
  }

  let value = "";
  if (props.mealName) {
    value = props.mealName
  }

  return (
    <div className={`meal ${props.mealType}`}>
      <p className="meal-label">{props.mealType}</p>
      <textarea className="meal-input"
        onChange={handleChange}
        defaultValue={value}
        data-date={props.mealDate}
        data-meal={props.mealType}
        placeholder="enter meal name here">
      </textarea>
    </div>
  );
};
