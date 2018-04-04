const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });
//Set up default mongoose connection
// var mongoDB = 'mongodb://Tobi:manu8452@ds135186.mlab.com:35186/esljobs';

mongoose.connect(process.env.DATABASE, {
 
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
console.log('connected baby');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});