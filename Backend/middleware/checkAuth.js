const jwt = require('jsonwebtoken');
const config = require('../config/config');
const isEmpty = require('is-empty');

module.exports = (req, res, next) => {
  try {
    if (
      typeof req.cookies.mistaCookie === 'undefined' ||
      req.cookies.mistaCookie === 'null'
    ) {
      req.user = null;
      res.send({ message: 'Authentication failed' }).status(401);
    } else {
      let token = req.cookies.mistaCookie;
      let decodedToken = jwt.decode(token, { complete: true }) || {};
      req.user = decodedToken.payload;
      console.log('User authenticated succesfully');
    }
    next();
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};
