import React from 'react';

import './login.css';

export default function Login(props) {
  return (
    <main role="main">
        <section id="login-section">
          <div className="row">
            <h1>Log In</h1>
            <form id="log-in-form">

              <label for="">Email</label>
              <input type="email" id="email" placeholder="email" />

              <label for="">Password</label>
              <input type="password" id="password" placeholder="password" />

              <button type="submit">log in</button>
            </form>

            <p>Dont have an account, <a className="underline" href="/#sign-up">sign up</a></p>
          </div>
        </section>
    </main>
  );
};
