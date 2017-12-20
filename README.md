# Simply Planned Client
## Description
A react app for simple meal planning. The app will allow users to add meals to each day of the week. Meals can be
as short or as long as the user wants and can include references to recipes or pages in a cook book. A grocery list
is available for the user to start adding items they will need as they add meals to their plan.


## Demo Log In
To see a demo of how the app works with meals and groceries already added to the users account, use the following login info:
email: user@test.com
password: password123


## Layout
The app starts with a landing page where information about how the app works is found and new users are asked to create an account.
![Alt text](/screenshots/home.png?raw=true "Home Screenshot")


The user is taken to a sign up page to create an account. The form is validated and the user gets feedback as they fill in the information.
![Alt text](/screenshots/sign-up-errors.png?raw=true "Sign Up Screenshot")


If a user has an account, they will use the log in page.
![Alt text](/screenshots/login.png?raw=true "Login Screenshot")


After creating an account or logging in, the user is taken to their dashboard where they can start planning meals and making a grocery list.  Meal inputs are free form text boxes and the user may enter any information they wish or none at all.  The navigation buttons at the top allow the user to see meals for previous weeks or plan future week's meals. As the user scrolls down and fills out the meals, the grocery list stays fixed so they have access to it at all times.
![Alt text](/screenshots/dashboard.png?raw=true "Dashboard Screenshot")


The grocery list can be toggled and hidden if the user wants to see the meal plan full screen.
![Alt text](/screenshots/dashboard-hide-groceries.png?raw=true "Hide Groceries Screenshot")


Grocery items can be crossed off the list by clicking on them.  Clicking the trash can icon will delete all crossed out items.
![Alt text](/screenshots/delete-groceries.png?raw=true "Delete Groceries Screenshot")


## API
The API for this app can be found here:
https://github.com/amandaherschleb/simply-planned-api


## Technologies, middleware and libraries used
* HTML & CSS
* JavaScript
* React & Redux
* Node.js & Express
* MongoDB & Mongoose
* Jest
* bcrypt.js
* Lodash
* Numeral.js
* Moment.js
* Travis CI
