import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReduxForm from './login-form';
import Demo from './demo';

export function Login(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className='login-page'>
      <section className="full-length">
        <ReduxForm />
        <Demo />
      </section>
    </main>
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
