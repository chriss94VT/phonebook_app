const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users");

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users.map(user => user.toJSON()));
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;
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
