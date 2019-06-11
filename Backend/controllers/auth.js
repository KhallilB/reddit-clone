const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/config');

const User = require('../models/User');

//*** Function hadles user sign up; Saves user returns a cookie
//---------------------------------------------------------
const signUp = async (req, res) => {
  try {
    // Define new user object
    const user = await new User();

    // Set user object properties to the form values
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    console.log(`User waiting to be saved: ${user}`);

    // Save user
    await user.save((err, user) => {
      if (!err) {
        // Set payload
        const payload = { subject: user._id };
        // Sign token
        const token = jwt.sign(payload, config.JWT_SECRET, {
          expiresIn: '60 days'
        });
        // Create Cookie
        const cookie = cookie('nToken', token, {
          maxAge: 900000,
          httpOnly: true
        });

        // Cookie
        res.send({ cookie }).status(200);
      }
    });
  } catch (err) {
    console.log('Error: ', err);
    res.send(err).status(500);
  }
};

// Authenticates auser using passport and returns cookie
//---------------------------------------------------------
const logIn = async (req, res) => {
  try {
    // Use passport local strategy to authenticate user
    await passport.authenticate('local', (err, user, data) => {
      if (err) {
        console.log('Error: ', err);
        res.send(err).status(500);
      }

      // If we get the correct user
      if (user) {
        console.log('User logging in: ', user);

        // Set payload
        const payload = { subject: user._id };
        // Sign token
        const token = jwt.sign(payload, config.JWT_SECRET, {
          expiresIn: '60 days'
        });
        // Create cookie
        const cookie = cookie('nToken', token, {
          maxAge: 900000,
          httpOnly: true
        });
        // Send cookie
        res.send({ cookeie }).status(200);
      }
    });
  } catch (err) {
    console.log('Error: ', err);
    res.send(err).status(500);
  }
};

module.exports = {
  signUp,
  logIn
};
