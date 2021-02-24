const router = require("express").Router();
const passport = require("../../config/passport");
const path = require("path");

router.get("/home", passport.authenticate("local"), (req, res) => {
  req.user ? res.redirect("/home") : res.redirect("/", 301);
});

module.exports = router;
