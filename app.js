const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
// const errorHandler = require('./errors/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes');

require('dotenv').config();

const { PORT = 3000, DATABASE = 'mongodb://127.0.0.1:27017/moviesdb' } = process.env;

const { errorMessages } = require('./utils/constants');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
});
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(errorMessages.crash);
  }, 0);
});

routes(app);

app.use(errorLogger);
app.use(errors());
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
