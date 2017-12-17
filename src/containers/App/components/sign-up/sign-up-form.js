import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './../input';
import {registerUser, login} from '../../actions';
import {required, nonEmpty, matches, length, isTrimmed} from './../validators';

export function SignUpForm(props) {
  function onSubmit(values) {
    const {email, password, firstName, lastName} = values;
    const user = {email, password, firstName, lastName};

    return props.dispatch(registerUser(user))
    .then(() => {
      return props.dispatch(login(email, password));
    })
  }

  let error;
  if (props.error) {
    error = (
      <div className="form-error" aria-live="polite">
        {props.error}
      </div>
    );
  }

  return (
    <div className="row">
      <h1>Sign Up</h1>

      <form id="sign-up-form" onSubmit={props.handleSubmit(values =>
        onSubmit(values)
      )}>

        <Field
          component={Input}
          name="firstName"
          type="text"
          label="Frist Name"
          autofocus
          validate={[required]}
        />

        <Field
          component={Input}
          name="lastName"
          type="text"
          label="Last Name"
          validate={[required]}
        />

        <Field
          component={Input}
          name="email"
          type="email"
          label="Email"
          validate={[required, nonEmpty, isTrimmed]}
        />

        <Field
          component={Input}
          name="password"
          type="password"
          label="Password"
          validate={[required, length({min: 10, max: 72}), isTrimmed]}
        />

        <Field
          component={Input}
          name="confirm-password"
          type="password"
          label="Confirm Password"
          validate={[required, nonEmpty, matches('password')]}
        />

        {error}

        <button
          type="submit"
          disabled={!props.valid || props.submitting}>
          submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'sign-up',
  onSubmitFail: (errors, dispatch) => dispatch(focus('sign-up', Object.keys(errors)[0]))
})(SignUpForm);
