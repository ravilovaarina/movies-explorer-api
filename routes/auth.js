const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { signIn, signUp } = require('../middlewares/validation');

router.post('/signin', signIn, login);
router.post('/signup', signUp, createUser);

module.exports = router;
