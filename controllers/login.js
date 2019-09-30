const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/users");

loginRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;

    const user = await User.findOne({ username: body.username });
    const passwordCorrect =
      user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      res.status(401).json({
        error: "invalid username of password"
      });
    }

    const userForToken = {
      username: user.username,
      id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 15
    });

    res.status(200).send({
      token,
      username: user.username,
      name: user.name
    });
  } catch (error) {
    next(error);
  }
});

loginRouter.get("/checkStatus", async (req, res, next) => {
  try {
    const token = req.query.token;
    if (!token) {
      res.status(401).send(false);
    }
    const decryptedToken = jwt.verify(token, process.env.SECRET);
    if(!decryptedToken.id) {
      res.status(401).send(false);
    }

    res.status(200).send(true);
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
