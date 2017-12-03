import React from 'react';
import {reduxForm, Field} from 'redux-form';

import './login.css';

export function Login(props) {
  function onSubmit(e) {
    e.preventDefault();
    console.log("login button clicked");
  };

  return (
    <main role="main">
        <section id="login-section">
          <div className="row">
            <h1>Log In</h1>

            <form id="log-in-form" onSubmit={onSubmit}>

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

              <button type="submit">log in</button>
            </form>

            <p>Dont have an account, <a className="underline" href="/#sign-up">sign up</a></p>
          </div>
        </section>
    </main>
  );
};

export default reduxForm({
  form: 'login'
})(Login)
