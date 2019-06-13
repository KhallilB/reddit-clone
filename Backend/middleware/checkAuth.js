const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  try {
    const decode = jwt.verify(req.body.cookie, config.JWT_SECRET);
    req.userData = decode;
    next();
  } catch (err) {
    console.log('Error: ', err);
    return res.send(err).status(500);
  }
};
