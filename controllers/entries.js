const entriesRouter = require("express").Router();
const Entry = require("../models/entry");
const User = require("../models/users");

entriesRouter.get("/", async (req, res, next) => {
  Entry.find({})
    .populate("users")
    .then(docs => {
      res.json(docs.map(doc => doc.toJSON()));
    })
    .catch(error => next(error));
});

entriesRouter.get("/info", async (req, res, next) => {
  Entry.find({})
    .then(docs => {
      const content = `<p>Phonebook has info for ${
        docs.length
      } person(s)</p><p>${new Date()}</p>`;
      res.send(content);
    })
    .catch(error => next(error));
});

entriesRouter.get("/:id", (req, res, next) => {
  const userID = req.params.id;
  Entry.findOne({
    _id: userID
  })
    .then(docs => {
      if (docs === null) {
        res.status(404).end();
      }
      res.json(docs);
    })
    .catch(error => next(error));
});

entriesRouter.delete("/:id", (req, res, next) => {
  const userID = req.params.id;
  Entry.findOneAndDelete({
    _id: userID
  })
    .then(docs => {
      res.json(docs);
    })
    .catch(error => next(error));
});

entriesRouter.post("/", async (req, res, next) => {
  const body = req.body;
  const userObj = await User.findOne({ username: body.username });

  if (!body.name || !body.number) {
    return res.status(400).json({
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

  Entry.findOne({
    name: body.name
  })
    .then(docs => {
      if (docs !== null) {
        res.status(400).json({
          error: "Unique names are required"
        });
      } else {
        entry
          .save()
          .then(newEntry => {
            userObj.entries = userObj.entries.concat(newEntry._id);
            userObj.save();
          })
          .catch(error => next(error));
        res.json(entry);
      }
    })
    .catch(error => next(error));
});

entriesRouter.put("/:id", async (req, res, next) => {
  const userID = req.params.id;

  Entry.findOneAndUpdate(
    {
      _id: userID
    },
    {
      name: req.body.name,
      number: req.body.number
    }
  )

    .then(docs => {
      res.json(docs);
    })
    .catch(error => next(error));
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

module.exports = entriesRouter;
