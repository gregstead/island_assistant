const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
// passport.use(User.createStrategy());
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          console.log(`incorrect username`);
          return done(null, false, { message: "Incorrect username." });
        }
        if (!user.comparePassword(password)) {
          console.log(`incorrect password`);
          return done(null, false, { message: "Incorrect password." });
        }
        console.log("here");
        return done(null, user);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Exporting our configured passport
module.exports = passport;
