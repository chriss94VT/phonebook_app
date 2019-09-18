const entriesRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Entry = require("../models/entry");
const User = require("../models/users");

entriesRouter.get("/", async (req, res, next) => {
  try {
    const entries = await Entry.find({}).populate("user");
    res.json(entries.map(entry => entry.toJSON()));
  } catch (error) {
    next(error);
  }
});

entriesRouter.get("/info", async (req, res, next) => {
  try {
    const entries = await Entry.find({});
    const content = `<p>Phonebook has info for ${
      entries.length
    } person(s)</p><p>${new Date()}</p>`;
    res.send(content);
  } catch (error) {
    next(error);
  }
});

entriesRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Entry.findOne({ _id: id });
    if (user === null) {
      res.status(404).end();
    }
    res.json(user.toJSON());
  } catch (error) {
    next(error);
  }
});

entriesRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const entry = await Entry.findOneAndDelete({ _id: id });
    res.json(entry.toJSON());
  } catch (error) {
    next(error);
  }
});

entriesRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;

    if (!req.token) {
      return res.status(401).json({ error: "token missing or invalid" });
    }
    const decryptedToken = jwt.verify(req.token, process.env.SECRET);

    if (!decryptedToken.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    const userObj = await User.findById(decryptedToken.id);

    if (!body.name || !body.number) {
      res.status(400).json({
        error: "content not found"
      });
    }

    const entry = new Entry({
      name: body.name,
      number: body.number,
      date: new Date(),
      id: generateID(),
      user: userObj._id
    });

    const duplicate = await Entry.findOne({ name: body.name });

    if (duplicate !== null) {
      res.status(400).json({
        error: "Unique names are required"
      });
    } else {
      const newEntry = await entry.save();
      userObj.entries = userObj.entries.concat(newEntry._id);
      userObj.save();
      res.json(entry.toJSON());
    }
  } catch (error) {
    next(error);
  }
});

entriesRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedEntry = await Entry.findOneAndUpdate(
      { _id: id },
      { name: body.name, number: body.number }
    );
    res.json(updatedEntry.toJSON());
  } catch (error) {
    next(error);
  }
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

module.exports = entriesRouter;
