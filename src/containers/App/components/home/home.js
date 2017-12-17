import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default function Home(props) {

  return (
    <main role="main">
      <section className="hero-section">
        <div className="row">
          <h1 className="photo-caption">Planning meals made easy</h1>
          <button className="sign-up-button"><Link to="/sign-up">Sign up</Link></button>
        </div>
      </section>

      <section className="x-light-green-background">
        <div className="row">
          <h1>Plan Meals</h1>
          <p>Whether you are trying a new diet or just want to be prepared,
          weekly meal planning can make eating during the week less of a hassle.
          Simply Planned takes a simple approach to meal planning and allows you to plan
          meals your way - just add the name of the meal to the day you want to eat it.
          You can look at your meal plans from previous weeks to get ideas for meals,
          or do some searching online or through your cook books.  You do not need to
          re-write your recipes so you can add them to your plan, all you need is the
          name of the  meal.  If you want you can paste a link to the recipe or add the name of the cook book
          and page number it is on so you can easily reference it later.  Use this free form
          meal planner to plan your meals the way that works best for you.</p>
          <img  className= "home-img" src="https://dummyimage.com/400x300/424142/ffffff%26text=meal+planning+img" alt="meal img" />
        </div>
      </section>

      <section className="light-green-background">
        <div className="row">
          <h1>Make your Grocery List</h1>
          <p>While planning your meals and looking through recieps you will need to have a
          grocery list going.  Simply Planned has an easy to use grocery list so you can
          add items as you think of them.  Type the name of the item you want, hit enter and
          it is added to your list.  After you shop, cross everything off your list so you are
          ready for next week.</p>
          <img className= "home-img" src="https://dummyimage.com/400x300/424142/ffffff%26text=grocery+list+img" alt="grocery list img" />
        </div>
      </section>
    </main>
  );
};
