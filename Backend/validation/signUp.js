const Validator = require('validator');
const isEmpty = require('is-empty');

const validateSignup = user => {
  let errors = {};

  // Convert fields to an empty string to use validator functions
  user.username = !isEmpty(user.username) ? user.username : '';
  user.email = !isEmpty(user.email) ? user.email : '';
  user.password = !isEmpty(user.password) ? user.password : '';

  // Chek username
  if (Validator.isEmpty(user.username)) {
    errors.username = 'Username is required';
  }

  // Check email
  if (Validator.isEmpty(user.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(user.email)) {
    errors.email = 'Email must be valid';
  }

  // Check password
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password is required';
  }
};

module.exports = {
  validateSignup
};
