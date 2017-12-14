import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default function Home(props) {
  return (
    <main role="main">
      <section id="hero-section">
        <div className="row">
          <h1 id="photo-caption">Planning meals made easy</h1>
          <Link to="/sign-up" className="button">Sign up</Link>
        </div>
      </section>

      <section>
        <div className="row">
          <h1>Plan Meals</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique elit leo, nec pharetra erat feugiat non. Aenean suscipit velit a molestie ultrices. Fusce facilisis gravida nunc id egestas. Nunc tincidunt sagittis justo, id blandit eros commodo in. Nulla facilisi. Duis imperdiet est vel ligula feugiat, eu rutrum odio vulputate. Mauris ut arcu mauris. Aliquam luctus dapibus justo.</p>
          <img  className= "home-img" src="https://dummyimage.com/400x300/424142/ffffff%26text=meal+planning+img" alt="meal img" />
        </div>
      </section>

      <section>
        <div className="row">
          <h1>Make your Grocery List</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique elit leo, nec pharetra erat feugiat non. Aenean suscipit velit a molestie ultrices. Fusce facilisis gravida nunc id egestas. Nunc tincidunt sagittis justo, id blandit eros commodo in. Nulla facilisi. Duis imperdiet est vel ligula feugiat, eu rutrum odio vulputate. Mauris ut arcu mauris. Aliquam luctus dapibus justo.</p>
          <img className= "home-img" src="https://dummyimage.com/400x300/424142/ffffff%26text=grocery+list+img" alt="grocery list img" />
        </div>
      </section>
    </main>
  );
};
