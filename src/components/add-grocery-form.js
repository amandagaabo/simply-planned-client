import React from 'react';
import {reduxForm, Field, reset} from 'redux-form';
import {addGroceryItem} from '../actions'

import './add-grocery-form.css';

export function AddGroceryForm(props) {
  function onSubmit(value) {
    const item = value.item;
    props.dispatch(addGroceryItem(item));
    props.dispatch(reset('add-item'));
  };

  return (
    <form id="add-grocery-form" onSubmit={props.handleSubmit( value =>
      onSubmit(value)
    )}>
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
