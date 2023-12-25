const userRouter = require('express').Router();
const { validationUpdateUser } = require('../middlewares/validation');
const {
  updateProfile,
  getMe,
} = require('../controllers/users');

userRouter.get('/me', getMe);
userRouter.patch('/me', validationUpdateUser, updateProfile);

module.exports = userRouter;
