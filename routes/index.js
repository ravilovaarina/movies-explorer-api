const auth = require('../middlewares/auth');
const authorization = require('./auth');
const users = require('./users');
const movies = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const { errorMessages } = require('../utils/constants');

module.exports = function connectRoutes(app) {
  app.use('/', authorization);

  app.use(auth);

  app.use('/users', users);
  app.use('/movies', movies);

  app.all('*', (req, res, next) => {
    next(new NotFoundError(errorMessages.incorrectPath));
  });
};
