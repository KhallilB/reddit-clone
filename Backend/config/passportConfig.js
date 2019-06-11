const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/User');

passport.use(
  new LocalStrategy({ username: 'username' }, (username, password, done) => {
    // Find the user by username
    User.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      else if (!user)
        // User not found
        return done(null, false, { message: 'Wrong username' });
      else if (!password)
        // Wrong password
        return done(null, false, { message: 'Wrong password' });
      // Authentication succeded
      else return done(null, user);
    });
  })
);
