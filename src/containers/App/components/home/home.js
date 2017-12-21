import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './home.css';

export function Home(props) {
  let button;
  if (!props.loggedIn) {
    button = <Link to="/sign-up" className="sign-up-link">Sign up</Link>;
  }

  return (
    <main role="main">
      <section className="hero-section">
        <div className="row">
          <h1 className="photo-caption">Planning meals made easy</h1>
          {button}
        </div>
      </section>

      <section className="x-light-green-background">
        <div className="row">
          <h1>Plan Meals</h1>
          <p>Simply Planned takes a simple approach to meal planning and allows you to plan
          meals your way - just add the name of the meal to the day you want to eat it.
          You can look at your meal plans from previous weeks to get ideas for this week.
          </p>
          <img
            className="home-img"
            src="https://res.cloudinary.com/amhprojects/image/upload/v1513480043/meal-planner/meal-prep-tupperware.jpg"
            alt="meal img"
          />
        </div>
      </section>

      <section className="light-green-background">
        <div className="row">
          <h1>Make your Grocery List</h1>
          <p>While planning your meals and looking through recipes you will need to have a
          grocery list going.  Simply Planned has an easy to use grocery list so you can
          add items as you think of them and remove them after you have bought them.
          </p>
          <img
            className="home-img"
            src="https://res.cloudinary.com/amhprojects/image/upload/v1513479980/meal-planner/shopping-list.jpg"
            alt="grocery list img"
          />
        </div>
      </section>
    </main>
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
