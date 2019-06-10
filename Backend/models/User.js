const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  email: {
    type: String,
    required: [true, 'Email Is Required'],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      'Enter a vaild email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
    minlength: 8,
    match: [
      /^(?=.*\d).{8,24}$/,
      'Password must be between 8 and 24 characters long and include at least one numeric character'
    ]
  }
});

module.exports = User = mongoose.model('UserSchema', UserSchema);
