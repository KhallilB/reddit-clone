// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const passport = require('passport');
require('./config/passportConfig');

const server = express();
//---------------------------------------------------------
// Routes
const routesIndex = require('./routes/api/index');

//---------------------------------------------------------
// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());

server.use(passport.initialize());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

server.use(cookieParser);

server.use('/api', routesIndex);

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

module.exports = { server };
