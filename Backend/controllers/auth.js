const jwt = require('jsonwebtoken');
const config = require('../config/config');

const User = require('../models/User');

//*** Function hadles user sign up; Saves user returns a token
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
        const token = jwt.sign(payload, config.JWT_SECRET);

        // Send token
        res.send({ token }).status(200);
      }
    });
  } catch (err) {
    console.log('Error: ', err);
    res.send(err).status(500);
  }
};

module.exports = {
  signUp
};
