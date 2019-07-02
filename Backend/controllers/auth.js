const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/config');

const User = require('../models/User');

const validateSignUp = require('../validation/signUp');
const validateLogIn = require('../validation/logIn');

//*** Function hadles user sign up; Saves user returns a cookie
//---------------------------------------------------------
const signUp = async (req, res) => {
  try {
    // Form validation
    const { errors, isValid } = validateSignUp(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Define new user object
    const user = await new User();

    // Set user object properties to the form values
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    // Save user
    await user.save((err, user) => {
      console.log('Saved  user: ', user);
      console.log('Error: ', err);
      if (!err) {
        // Set payload
        const payload = { _id: user._id };
        // Sign token
        const token = jwt.sign(payload, config.JWT_SECRET, {
          expiresIn: '60 days'
        });
        // Send token in cookie
        res
          .cookie('mistaCookie', token, { maxAge: 9999999, httpOnly: true })
          .status(200)
          .send({ message: 'Cookie has been sent to client ' });
      } else {
        res.send(err).status(500);
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
    // Form validation
    const { errors, isValid } = validateLogIn(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Call passport authentication
    await passport.authenticate('local', (err, user, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      if (!user) {
        res.send({ message: 'Error: User not found' }).status(404);
      }

      if (user) {
        console.log('User: ', user);
        // Set payload
        const payload = { _id: user._id };
        // Sign token
        const token = jwt.sign(payload, config.JWT_SECRET);
        // Send token in cookie
        res
          .cookie('mistaCookie', token, { maxAge: 999999, httpOnly: true })
          .status(200)
          .send({ message: 'Cookie has been sent to the client' });
      } else return res.status(200).json(data);
    })(req, res);
  } catch (err) {
    console.log('Error: ', err);
    res.send(err).status(500);
  }
};

// TODO: Implement forgot function (resets users password ands send them a new one with mail gunner )
// const forgotPass = async (req, res) => {}

module.exports = {
  signUp,
  logIn
};
