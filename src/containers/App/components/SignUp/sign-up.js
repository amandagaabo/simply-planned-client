import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ReduxForm from './sign-up-form';

export function SignUp(props) {
  if (props.loggedIn) {
    return (
      <Redirect to="/dashboard" />
    );
  }

  return (
    <main role="main" className="sign-up-page">
      <section className="full-length">
        <ReduxForm />
      </section>
    </main>
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
