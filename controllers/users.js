const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/users');

usersRouter.post('/', (req, res, next) => {
  const body = req.body;
  const saltRounds = 10;
  bcrypt
    .hash(body.password, saltRounds)
    .then(pwd => {
      const user = new User({
        username: body.username,
        name: body.name,
        passwordHash: pwd
      });
      user.save();
      return res.json(user);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = usersRouter;