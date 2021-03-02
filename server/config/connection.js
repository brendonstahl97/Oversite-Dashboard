/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/oversite';

mongoose.connect(
	mongoUrl,
	{
	  useNewUrlParser: true,
	  useUnifiedTopology: true,
	  useCreateIndex: true,
	  useFindAndModify: false
	}
  );

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection;

db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`);
});

db.once('open', () => {
	console.log(`You have successfully connected to your mongo database at ${mongoUrl}`);
});

module.exports = db;
