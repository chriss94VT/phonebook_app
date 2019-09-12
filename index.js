const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
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
const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@herokuappdb-eb4ow.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
  id: Number
});

const Entry = mongoose.model("Entry", entrySchema);

app.get("/api/persons", (req, res) => {
  Entry.find({})
    .then(docs => {
      return res.json(docs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/info", (req, res) => {
  Entry.find({})
    .then(docs => {
      const content = `<p>Phonebook has info for ${
        docs.length
      } person(s)</p><p>${new Date()}</p>`;
      return res.send(content);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/persons/:id", (req, res) => {
  const userID = Number(req.params.id);
  Entry.findOne({ id: userID })
    .then(docs => {
      if (docs === null) {
        return res.status(404).end();
      }
      return res.json(docs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/persons/:id", (req, res) => {
  const userID = Number(req.params.id);
  Entry.findOneAndDelete({ id: userID })
    .then(docs => {
      return res.json(docs);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  Entry.findOne({ name: /chris/i })
    .then(docs => {
      if (docs !== null) {
        return res.status(400).json({
          error: "name must be unique"
        });
      }
    })
    .catch(err => {
      console.log(err);
    });

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

  entry.save().catch(err => {
    console.log(err);
  });
  return res.json(entry);
});

app.put("/api/persons/:id", (req, res) => {
  const userID = Number(req.params.id);

  Entry.findOneAndUpdate(
    { id: userID },
    { name: req.body.name, number: req.body.number }
  )
    .then(docs => {
      return res.json(docs);
    })
    .catch(err => {
      console.log(err);
    });
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

const PORT = process.env.PORT;
app.listen(PORT);
