require('dotenv').config();

const express = require("express");
const morgan = require('morgan');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const dbConnection = require('./config/connection');
const passport = require('./config/passport');

const bodyParser = require('body-parser');

const path = require('path');
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Passport
app.use(session({
  secret: process.env.AUTH_SECRET,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both API and view
// app.use('/auth', require('./routes/authRoutes'));
app.use(routes);


// Error handler
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});