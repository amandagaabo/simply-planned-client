import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import ReduxForm from './login-form';

export class Login extends React.Component {
  render() {
    if(this.props.loggedIn) {
      return (
        <Redirect to='/dashboard' />
      );
    };

    return (
      <main role="main" className='login-page'>
          <section className="x-light-green-background full-length">
            <ReduxForm />
          </section>
      </main>
    );
  };
};

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});


export default connect(mapStateToProps)(Login)
