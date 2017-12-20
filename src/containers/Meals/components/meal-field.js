import React from 'react';
import autosize from 'autosize';
import './meal-field.css';

export default function MealField(props) {
  function handleChange(e) {
    const token = props.authToken;
    const { date } = e.target.dataset;
    const { meal } = e.target.dataset;
    const item = e.target.value;

    // update meal
    props.onUpdateMeal(token, date, meal, item);

    // resize textarea
    autosize(e.target);
  }

  let value = '';
  if (props.mealName) {
    value = props.mealName;
  }

  return (
    <div className={`meal ${props.mealType}`}>
      <p className="meal-label">{props.mealType}</p>
      <textarea
        className="meal-input"
        aria-label="meal input"
        onChange={handleChange}
        value={value}
        data-date={props.mealDate}
        data-meal={props.mealType}
        placeholder="enter meal name here"
      >
      </textarea>
    </div>
  );
}
