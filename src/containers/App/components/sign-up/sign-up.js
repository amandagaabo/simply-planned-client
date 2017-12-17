import React from 'react';
import {Redirect} from 'react-router-dom';
import ReduxForm from './sign-up-form';

export default function SignUp(props) {

  if(props.loggedIn) {
    return (
      <Redirect to='/dashboard' />
    )
  }

  return (
    <main role="main">
        <section className="x-light-green-background full-length">
          <ReduxForm />
        </section>
    </main>
  );
};
