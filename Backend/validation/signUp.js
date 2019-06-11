const Validator = require('validator');
const isEmpty = require('is-empty');

const validateSignup = user => {
  let errors = {};

  // Convert fields to an empty string to use validator functions
  user.username = !isEmpty(user.username) ? user.username : '';
  user.email = !isEmpty(user.email) ? user.email : '';
  user.password = !isEmpty(user.password) ? user.password : '';
  user.passwordConfirm = !isEmpty(user.passwordConfirm)
    ? user.passwordConfirm
    : '';

  // Chek username
  //--------------------------------------
  if (Validator.isEmpty(user.username)) {
    errors.username = 'Username is required';
  }

  if (!Validator.isLength(user.username, { min: 4, max: 20 })) {
    if (user.username.length < 4) {
      errors.username = 'Username must be at least 4 charaters long';
    }
    if (user.username.length > 20) {
      errors.username = 'Username cannot be longer than 20 characters';
    }
  }

  // Check email
  //--------------------------------------
  if (Validator.isEmpty(user.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(user.email)) {
    errors.email = 'Email must be valid';
  }

  // Check password
  //--------------------------------------
  if (Validator.isEmpty(user.password)) {
    errors.password = 'Password is required';
  }

  if (Validator.isEmpty(user.passwordConfirm)) {
    errors.password = 'Confirm password is required';
  }

  if (!Validator.isLength(user.password, { min: 8, max: 24 })) {
    if (user.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (user.password.length > 24) {
      errors.password = 'Password cannot be more than 24 characters long';
    }
  }

  if (!Validator.equals(user.password, user.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match';
  }
};

module.exports = {
  validateSignup
};
