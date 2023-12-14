const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { errorMessages } = require('../utils/constants');

require('dotenv').config();

const { NODE_ENV, JWT_SECRET = 'JWT_SECRET' } = process.env;

const handleAuthError = (next) => {
  next(new UnauthorizedError(errorMessages.auth));
};

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return handleAuthError(next);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'JWT_SECRET');
  } catch (err) {
    return handleAuthError(next);
  }
  req.user = payload;
  return next();
};
