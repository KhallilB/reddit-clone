const jwt = require('jsonwebtoken');
const config = require('../config/config');
const isEmpty = require('is-empty');

module.exports = (req, res, next) => {
  try {
    console.log('Checking Authentication');
    if (
      typeof req.cookies.mistaCookie === 'undefined' ||
      req.cookies.mistaCookie === 'null'
    ) {
      req.user = null;
      console.log('Authentication failed');
    } else {
      let token = req.cookies.mistaCookie;
      let decodedToken = jwt.decode(token, { complete: true }) || {};
      req.userData = decodedToken.payload;
      console.log('user authenticated succesfully');
    }
    next();
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};