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
    <main role="main" className='login-page'>
        <section className="x-light-green-background full-length">
          <ReduxForm />
        </section>
    </main>
  );
};
