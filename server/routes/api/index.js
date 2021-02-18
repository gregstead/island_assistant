const router = require("express").Router();
const authRoutes = require("./auth");
const db = require("../../models");
const passport = require("passport");

router.use("/auth", authRoutes);

router.get("/user", (req, res) => {
  // Get a list of all users
  db.User.find().then((users) => res.json(users));
});

router.post("/user", ({ body }, res) => {
  // Create a new user
  db.User.create({
    username: body.username,
    password: body.password,
    email: body.email,
  })
    .then(function(data) {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
});

router.get("/user/:id", (req, res) => {
  // Get a specific user
  const id = req.params.id;
  db.User.find({ _id: id }).then((data) => {
    data.password = null;
    res.json({
      username: data[0].username,
      email: data[0].email,
      dateCreated: data[0].dateCreated,
    });
  });
});

router.put("/user/:id", (req, res) => {
  // Update a specific user
  const id = req.params.id;
  db.User.findOneAndUpdate({ _id: id }).then((data) => {
    res.json(data);
  });
});

router.delete("/user/:id", (req, res) => {
  // Delete a specific user
  const id = req.params.id;
  db.User.findOneAndDelete({ _id: id }).then((data) => {
    res.json(data);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(true);
});

module.exports = router;
