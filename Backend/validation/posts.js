const Validator = require('validator');
const isEmpty = require('is-empty');

function validatePost(post) {
  let errors = {};

  // Convert fields to an empty string to use validator functions
  post.title = !isEmpty(post.title) ? post.title : '';
  post.url = !isEmpty(post.url) ? post.url : '';
  post.description = !isEmpty(post.description) ? post.description : '';
  post.subvue = !isEmpty(post.description) ? post.description : '';

  // Check Title
  if (Validator.isEmpty(post.title)) {
    errors.title = 'Title is Required';
  }

  // Check Url
  if (Validator.isEmpty(post.url)) {
    error.url = 'Url is Required';
  } else if (!Validator.isURL(post.url)) {
    errors.url = 'Url is not valid';
  }

  // Check Description
  if (Validator.isEmpty(post.description)) {
    errors.description = 'Description is Required';
  }

  // Check Subvue
  if (Validator.isEmpty(post.subvue)) {
    errors.subvue = ' Subvue is Required';
  }
}

module.exports = {
  validatePost
};
