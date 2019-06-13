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
      res.send({ message: 'Authentication failed' });
    } else {
      let token = req.cookies.mistaCookie;
      console.log(token);
      let decodedToken = jwt.decode(token, { complete: true }) || {};
      req.userData = decodedToken.payload;
      console.log('User authenticated succesfully');
    }
    next();
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};
