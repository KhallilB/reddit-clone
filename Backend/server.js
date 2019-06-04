// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
//---------------------------------------------------------
// Routes

//---------------------------------------------------------
// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//---------------------------------------------------------
// Database
db = require('./config/config').MONGODB_URI;

// Connecting to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('CONNECTED TO DATABASE'))
  .catch(err => {
    console.log(`Caught Error: ${err}`);
    console.log(db);
  });

//---------------------------------------------------------

// Setting Port
const port = process.env.PORT || 2000;

// Listening
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
