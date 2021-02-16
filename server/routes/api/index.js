const router = require("express").Router();
const authRoutes = require("./auth");
const db = require("../../models");
const passport = require("passport");

router.use("/auth", authRoutes);

router.get("/users", (req, res) => {
  console.log("I work");
  db.User.find().then((users) => res.json(users));
});

router.post("/signup", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.body);
});

module.exports = router;
