import React from 'react';
import {reduxForm, Field} from 'redux-form';

import './add-grocery-form.css';

export function AddGroceryForm(props) {
  return (
    // handleSubmit calls the function with the form data automatically
    <form id="add-grocery-form" onSubmit={props.handleSubmit(props.onAddGroceryItem)}>
      <Field
          component="input"
          name="item"
          id="item"
          type="text"
          placeholder="type item and hit enter to add"
      />
    </form>
  )
};

export default reduxForm({
  form: 'add-item'
})(AddGroceryForm)
