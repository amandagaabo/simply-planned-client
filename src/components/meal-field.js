import React from 'react';
import {connect} from 'react-redux';
import {updateMeal} from '../actions'

import './meal-field.css';

export function MealField(props) {
  function onChange(e) {
    const date = e.target.dataset.date;
    const meal = e.target.dataset.meal;
    const item = e.target.value;
    props.dispatch(updateMeal(date, meal, item));
  }

  let value = "";
  if (props.mealName) {
    value = props.mealName
  }

  return (
    <div className={`meal ${props.mealType}`}>
      <p className="meal-label">{props.mealType}</p>
      <textarea className="meal-input"
        onChange={onChange}
        defaultValue={value}
        data-date={props.mealDate}
        data-meal={props.mealType}
        placeholder="type meal name and hit enter to save">
      </textarea>
    </div>
  );
};

export default connect()(MealField);
