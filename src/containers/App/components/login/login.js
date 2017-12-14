import React from 'react';
import {Redirect} from 'react-router-dom';
import ReduxForm from './login-form';

export default function Login(props) {

  if(props.loggedIn) {
    return (
      <Redirect to='/dashboard' />
    )
  }

  return (
    <main role="main">
        <section className="dark-section full-length">
          <ReduxForm />
        </section>
    </main>
  );
};
