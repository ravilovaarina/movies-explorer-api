const isUrl = require('validator/lib/isURL');
const mongoose = require('mongoose');
const { errorMessages } = require('../utils/constants');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      validate: {
        validator: (link) => isUrl(link),
        message: errorMessages.image,
      },
      required: true,
    },
    trailerLink: {
      type: String,
      validate: {
        validator: (link) => isUrl(link),
        message: errorMessages.trailerLink,
      },
      required: true,
    },
    thumbnail: {
      type: String,
      validate: {
        validator: (link) => isUrl(link),
        message: errorMessages.thumbnail,
      },
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
