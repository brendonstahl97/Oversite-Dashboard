# [Oversite]



![readmegif](https://user-images.githubusercontent.com/69867441/108892847-57227e80-75de-11eb-872b-76c199392c3a.gif)

Oversite is a goal tracking app with a twist; if you don't meet your goals, we tell your Mom. There are few stronger motivators than mother's approval. Users can input the metrics used for their custom goal, and use the platform to update their progress as they go. When setting a completion date for their goal, they have the option to include an email address to send a custom message to, upon failure or success of their goal. For best results, use your moms email. 

## Table of Contents

* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Usage](#file-structure)
* [Contributing](#contributing)



## Installation

App is deployed on Heroku, so log in here to use: https://oversite-dashboard.herokuapp.com/splash/login. If you wish to use the source code, ensure you run 'npm install' to retreive its dependencies. 'npm start' will launch the react app. 


## Technologies
Oversite was built using React.js, beginning with Black Dashboard by Creative Tim as a base. We utilize express for routing, MongoDB and Mongoose.js for the database configuration, Passport.js and bcrypt.js for authentication, Chart.js for data visualition, Node-Cron.sj and NodeMailer for consequence emails, and Bootstrap for styling. 


## Usage

Log into the app or register as a user on the Heroku server here: https://oversite-dashboard.herokuapp.com/splash/login. Enter credentials to begin, and toggle your view using the sidebar. You can add goals using the 'New Goal' option on the sidebar. The Dashboard with create a react component for each goal tied to your user. You can view them in list form at the view goals list. 

## Contributing
If you'd like to contribute to our project by all means opena pull request and we will review!

