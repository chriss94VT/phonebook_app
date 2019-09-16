const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

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

entrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

entrySchema.plugin(uniqueVal);
module.exports = mongoose.model('Entry', entrySchema);
