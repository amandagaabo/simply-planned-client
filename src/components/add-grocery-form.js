import React from 'react';
import {reduxForm, Field} from 'redux-form';

import './add-grocery-form.css';

export function AddGroceryForm(props) {
  function onSubmit(e) {
    e.preventDefault();
    console.log("add grocery item button clicked");
  };

  return (
    <form id="add-grocery-form" onSubmit={onSubmit}>
      <Field
          component="input"
          name="grocery-item"
          id="grocery-item"
          type="text"
          placeholder="enter item and hit enter to add"
      />
    </form>
  )
};

export default reduxForm({
  form: 'add-grocery'
})(AddGroceryForm)
