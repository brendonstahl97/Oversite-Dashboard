#Oversite [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![readmegif](https://user-images.githubusercontent.com/69867441/108892847-57227e80-75de-11eb-872b-76c199392c3a.gif)

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Technologies Used](#Technologies)
* [Usage](#Usage)
* [Collaborators](#Collaborators)
* [Contribution](#Contribution)



### Description <a name="Description"></a>
Oversite is a goal tracking app with a twist. If you don't meet your goals, we tell your Mom. There are few stronger motivators than your mother's approval. Users can input the metrics used for their custom goal and use the platform to update their progress as they go. When setting a completion date for their goal, they have the option to include an email address to send a custom message to upon failure or success of their goal. For best results, use your moms email. 

## Installation <a name="Installation"></a>
To install this project, you must intially clone the repo to your local machine. Then run ```npm install``` within the directory with your command line of choice. Next ensure that you have MongoDB installed locally. Next, run ```npm start``` at the root level of the repository. This will start both the front-end and the back-end. Finally, navigate to [https://localhost:3000](https://localhost:3000) in your favorite browser and the site should be displayed. The site is also hosted on heroku and can be viewed [here](oversite-dashboard.herokuapp.com).

## Technologies <a name="Technologies"></a>
Oversite was built using React.js, beginning with Black Dashboard by Creative Tim as a base. We utilize express for routing, MongoDB and Mongoose.js for the database configuration, Passport.js and bcrypt.js for authentication, Chart.js for data visualition, Node-Cron.sj and NodeMailer for consequence emails, and Bootstrap for styling. 

## Usage <a name="Usage"></a>
When you arrive on the landing page, you are greeted with a login form. If you already have an account with Oversite you can enter your credentials here. If you do not, you can click the register button. Once on the register page, you can enter all of your profile information and login credentials. Be sure to remember your email and password! After a successful login, you will arrive at the main dashboard. If you already have goals their data will be visualized here. If not, you will be prompted to create a new goal. A form will be displayed on the new goal page which will allow you to fill out various information about your goal. Make sure you get this right becasue you won't be able to change it later! Once a new goal is created, you can visit the view goals page. A table with a summary of each goal you have created will display here as well as a form to upodate your goals. Simply select the goal you would wish to update from the dropdown then input your metric and click submit. You are only allowed one update per day. Once updated the data should display on the main dashboard page. Be sure to return each day to update your goals. 

## Collaborators <a name="Collaborators">
- Brendon Stahl
- Brian Whitman
- Crawford Smith
- Elijah Melanson
- Kyle Ward
- Akash Patel

## Contribution <a name="Contribution"></a>
If you'd like to contribute to our project by all means open a pull request and we will review!

