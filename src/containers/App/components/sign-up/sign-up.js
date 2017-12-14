import React from 'react';
import {Redirect} from 'react-router-dom';
import ReduxForm from './sign-up-form';

export default function SignUp(props) {

  if(props.loggedIn) {
    return (
      <Redirect to='/meals' />
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
