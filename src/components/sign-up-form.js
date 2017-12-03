import React from 'react';

import './sign-up-form.css';

export default function SignUpForm(props) {
  return (
    <section id="sign-up">
      <div className="row">
        <h1>Sign Up</h1>
        <form>
          <label for="first-name">First name</label>
          <input type="text" id="first-name" placeholder="first name" />

          <label for="last-name">Last name</label>
          <input type="text" id="last-name" placeholder="last name" />

          <label for="">Email</label>
          <input type="email" id="email" placeholder="email" />

          <label for="">Password</label>
          <input type="password" id="password" placeholder="password" />

          <label for="">Confirm Password</label>
          <input type="password" id="password-confirm" placeholder="password" />

          <button type="submit">submit</button>
        </form>
      </div>
    </section>

  );
};
