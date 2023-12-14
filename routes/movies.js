const movieRouter = require('express').Router();
const { validationPostMovie, validationDeleteMovie } = require('../middlewares/validation');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', validationPostMovie, createMovie);
movieRouter.delete('/:_id', validationDeleteMovie, deleteMovie);

module.exports = movieRouter;
