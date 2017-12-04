import React from 'react';

import './meal-field.css';

export default function MealField(props) {
  function onChange() {
    console.log("field updated")
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
        placeholder="type meal name and hit enter to save">
      </textarea>
    </div>

  );
};
