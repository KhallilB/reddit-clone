const Validator = require('validator');
const isEmpty = require('is-empty');

const validateLogIn = user => {
  let errors = {};

  // Convert fields to an empty string to use validator functions
  user.username = !isEmpty(user.username) ? user.username : '';
  user.password = !isEmpty(user.password) ? user.password : '';

  // Check username
  if (Validator.isEmpty(user.username)) {
    errors.username = 'Username is required';
  }

  // Check password
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password is required';
  }
};

module.exports = {
  validateLogIn
};
