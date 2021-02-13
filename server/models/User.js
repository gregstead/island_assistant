const { model, Schema } = require('mongoose');
// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require('passport-local-mongoose');
const validator = require('validator').isEmail;

const User = new Schema({
  // User Common Name (to be displayed on the site)
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Username is required'
  },
  // User Email Address
  email: {
    type: String,
    validate: {
      validator: validator,
      message: 'That is not a valid email',
      isAsync: false
    }
  },
  // Password
  password: String,
  // Date Account Was Created
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

User.plugin(passportLocalMongoose);

module.exports = model('User', User);
