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
  username: {
    type: String,
    required = [true, 'Username is Required'],
    match: [
      /^[a-z0-9_-]{4,20}$/,
      'Username must be 4-20 characters long, numbers are allowed, no special characters except _ & -'
    ]
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

UserSchema.pre('save', next => {
  let user = this;

  // Only hash password if it has been modified or new
  if (!user.isModified('password')) return next();

  // Generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override password with hashed one
      user.password = hash;
      user.saltSecret = salt;
      next();
    });
  });
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model('UserSchema', UserSchema);
