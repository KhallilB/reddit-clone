/* Mongoose Connection */
const mongoose = require('mongoose');
assert = require('assert');

const url = 'mongodb://localhost/reddit-db';
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection Error:')
);
mongoose.set('debug', true);

module.exports = mongoose.connection;
