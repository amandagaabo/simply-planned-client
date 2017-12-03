import React from 'react';
import {reduxForm, Field} from 'redux-form';

import './sign-up-form.css';

export function SignUpForm(props) {
  function onSubmit(e) {
    e.preventDefault();
    console.log("login button clicked");
  };

  return (
    <section id="sign-up">
      <div className="row">
        <h1>Sign Up</h1>

        <form id="sign-up-form" onSubmit={onSubmit}>
          <label htmlFor="first-name">First name</label>
          <Field
              component="input"
              name="first-name"
              id="first-name"
              type="text"
              placeholder="first name"
          />

          <label htmlFor="last-name">Last name</label>
          <Field
              component="input"
              name="last-name"
              id="last-name"
              type="text"
              placeholder="last name"
          />

          <label htmlFor="email">Email</label>
          <Field
              component="input"
              name="email"
              id="email"
              type="email"
              placeholder="email"
          />

          <label htmlFor="password">Password</label>
          <Field
              component="input"
              name="password"
              id="password"
              type="password"
              placeholder="password"
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <Field
              component="input"
              name="confirm-password"
              id="confirm-password"
              type="password"
              placeholder="re-enter password"
          />

          <button type="submit">submit</button>
        </form>

        <p>Already have an account, <a className="underline" href="/login">log in</a></p>
      </div>
    </section>
  );
};

export default reduxForm({
  form: 'sign-up'
})(SignUpForm)
