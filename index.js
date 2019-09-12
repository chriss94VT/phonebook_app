const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uniqueVal = require("mongoose-unique-validator");

mongoose.set("useFindAndModify", false);
//const morgan = require("morgan");
const app = express();

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
// app.use(
//   morgan(function(tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//       JSON.stringify(req.body)
//     ];
//   })
// );
const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return res.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};
app.use(errorHandler);

const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@herokuappdb-eb4ow.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true
  },
  date: Date,
  id: Number
});

entrySchema.plugin(uniqueVal);
const Entry = mongoose.model("Entry", entrySchema);

app.get("/api/persons/", (req, res, next) => {
  Entry.find({})
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.get("/info", (req, res, next) => {
  Entry.find({})
    .then(docs => {
      const content = `<p>Phonebook has info for ${
        docs.length
      } person(s)</p><p>${new Date()}</p>`;
      return res.send(content);
    })
    .catch(error => next(error));
});

app.get("/api/persons/:id", (req, res, next) => {
  const userID = Number(req.params.id);
  Entry.findOne({ id: userID })
    .then(docs => {
      if (docs === null) {
        return res.status(404).end();
      }
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.delete("/api/persons/:id", (req, res, next) => {
  const userID = Number(req.params.id);
  Entry.findOneAndDelete({ id: userID })
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.post("/api/persons", (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "content not found"
    });
  }

  const entry = new Entry({
    name: body.name,
    number: body.number,
    date: new Date(),
    id: generateID()
  });

  Entry.findOne({ name: body.name })
    .then(docs => {
      if (docs !== null) {
        return res.status(400).json({
          error: "Unique names are required"
        });
      } else {
        entry.save().catch(error => next(error));
        return res.json(entry);
      }
    })
    .catch(error => next(error));
});

app.put("/api/persons/:id", (req, res, next) => {
  const userID = Number(req.params.id);

  Entry.findOneAndUpdate(
    { id: userID },
    { name: req.body.name, number: req.body.number }
  )
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const PORT = process.env.PORT;
app.listen(PORT);
