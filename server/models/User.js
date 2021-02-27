const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

// https://www.npmjs.com/package/passport-local-mongoose
const passportLocalMongoose = require("passport-local-mongoose");
const validator = require("validator").isEmail;

const User = new Schema({
  // User Common Name (to be displayed on the site)
  firstName: String,
  lastName: String,
  username: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  // User Email Address
  email: {
    type: String,
    validate: {
      validator: validator,
      message: "That is not a valid email",
      isAsync: false,
      required: true,
    },
  },
  // Password
  password: { type: String },
  // Friend Code
  friendCode: String,
  dreamAddress: String,
  // Date Account Was Created
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  items: {
    type: Array,
    default: [],
  },
});
// https://stackoverflow.com/questions/14588032/mongoose-password-hashing/14595363
User.pre("save", function(next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

User.methods.comparePassword = function(password, cb) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
};

User.plugin(passportLocalMongoose);

module.exports = model("User", User);
