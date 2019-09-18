const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;

    const newUser = await User.findOne({ username: body.username });
    if (newUser !== null) {
      res.status(400).json({
        error: "username taken"
      });
    } else if (body.password.length < 3) {
      res.status(400).json({
        error: "password min. length 3 characters"
      });
    }

    const saltRounds = 10;
    const pwd = await bcrypt.hash(body.password, saltRounds);
    const user = await new User({
      username: body.username,
      name: body.name,
      passwordHash: pwd
    }).save();
    res.json(user.toJSON());
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
