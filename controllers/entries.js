const entriesRouter = require('express').Router();
const Entry = require('../models/entry');

entriesRouter.get('/', (req, res, next) => {
  Entry.find({})
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

entriesRouter.get('/info', async (req, res, next) => {
  Entry.find({})
    .then(docs => {
      const content = `<p>Phonebook has info for ${
        docs.length
      } person(s)</p><p>${new Date()}</p>`;
      return res.send(content);
    })
    .catch(error => next(error));
});

entriesRouter.get('/:id', (req, res, next) => {
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

entriesRouter.delete('/:id', (req, res, next) => {
  const userID = Number(req.params.id);
  Entry.findOneAndDelete({
    id: userID
  })
    .then(docs => {
      return res.json(docs);
    })
    .catch(error => next(error));
});

entriesRouter.post('/', (req, res, next) => {
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

entriesRouter.put('/:id', (req, res, next) => {
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

module.exports = entriesRouter;