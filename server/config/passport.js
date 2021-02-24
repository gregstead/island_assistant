const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
// passport.use(User.createStrategy());
passport.use(
  new LocalStrategy(
    // User will log in with email rather than username
    {
      usernameField: "email",
    },
    (email, password, done) => {
      // When a user tries to sign in, this code runs
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) {
          console.log("Unknown email");
          return done(null, false, { message: "Unknown email" });
        }
        if (!user.comparePassword(password, (_err, data) => data)) {
          console.log("incorrect password");
          return done(null, false, {
            message: "Incorrect password",
          });
        }
        console.log("Done");
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
