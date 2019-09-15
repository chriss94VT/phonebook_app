const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');
const customLogger = require('./Utils/middleware');
const config = require('./Utils/configUtils');

mongoose.set('useFindAndModify', false);
//const morgan = require("morgan");
const app = express();

app.use(express.static('build'));
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
app.use(customLogger.requestLogger);

const url = `mongodb+srv://${config.user}:${config.password}@herokuappdb-eb4ow.mongodb.net/${config.db}?`
+ 'retryWrites=true&w=majority';
console.log('Connecting to', url);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.log('error connection to database', error.message);
  });

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
const Entry = mongoose.model('Entry', entrySchema);

app.get('/api/persons/', (req, res, next) => {
  Entry.find({})
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.get('/info', (req, res, next) => {
  Entry.find({})
    .then(docs => {
      const content = `<p>Phonebook has info for ${
        docs.length
      } person(s)</p><p>${new Date()}</p>`;
      return res.send(content);
    })
    .catch(error => next(error));
});

app.get('/api/persons/:id', (req, res, next) => {
  const userID = Number(req.params.id);
  Entry.findOne({
    id: userID
  })
    .then(docs => {
      if (docs === null) {
        return res.status(404).end();
      }
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.delete('/api/persons/:id', (req, res, next) => {
  const userID = Number(req.params.id);
  Entry.findOneAndDelete({
    id: userID
  })
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

app.post('/api/persons', (req, res, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'content not found'
    });
  }

  const entry = new Entry({
    name: body.name,
    number: body.number,
    date: new Date(),
    id: generateID()
  });

  Entry.findOne({
    name: body.name
  })
    .then(docs => {
      if (docs !== null) {
        return res.status(400).json({
          error: 'Unique names are required'
        });
      } else {
        entry.save().catch(error => next(error));
        return res.json(entry);
      }
    })
    .catch(error => next(error));
});

app.put('/api/persons/:id', (req, res, next) => {
  const userID = Number(req.params.id);

  Entry.findOneAndUpdate(
    {
      id: userID
    },
    {
      name: req.body.name,
      number: req.body.number
    }
  )
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

const generateID = () => {
  return Math.floor(Math.random() * 100000000);
};

app.use(customLogger.unknownEndpoint);
app.use(customLogger.errorHandler);

app.listen(config.port);
module.exports = app;