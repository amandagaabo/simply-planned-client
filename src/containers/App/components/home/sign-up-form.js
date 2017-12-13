import React from 'react';
import {reduxForm, Field, focus, reset} from 'redux-form';
import Input from './../input';
import {registerUser, login} from '../../actions';
import {required, nonEmpty, matches, length, isTrimmed} from './../validators';


export function SignUpForm(props) {
  function onSubmit(values) {
    const {email, password, firstName, lastName} = values;
    const user = {email, password, firstName, lastName};
    props.dispatch(registerUser(user))
    .then(() => {
      props.dispatch(reset('sign-up'));
      props.dispatch(login(email, password));
    });
  }

  return (
    <section id="sign-up">
      <div className="row">
        <h1>Sign Up</h1>

        <form className="sign-up-form" onSubmit={props.handleSubmit(values => onSubmit(values))}>
          <Field
            component={Input}
            name="firstName"
            type="text"
            label="Frist Name"
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

          <button
            type="submit"
            disabled={props.pristine || props.submitting}>
            submit
          </button>
        </form>

        <p>Already have an account, <a className="underline" href="/login">log in</a></p>
      </div>
    </section>
  );
};

export default reduxForm({
  form: 'sign-up',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('sign-up', Object.keys(errors)[0]))
})(SignUpForm);
