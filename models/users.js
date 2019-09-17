const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  passwordHash: {
    type: String,
    required: true,
    minlength: 6
  },
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entry'
    }
  ]
});

userSchema.plugin(uniqueVal);
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

module.exports = mongoose.model('User', userSchema);
