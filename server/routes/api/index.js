const router = require("express").Router();
const authRoutes = require("./auth");
const db = require("../../models");

router.use("/auth", authRoutes);

router.get("/user", (req, res) => {
  // Get a list of all users
  db.User.find().then((users) => res.json(users));
});

router.post("/user", (req, res) => {
  // Create a new user
  db.User.create(req.body)
    .then(function(data) {
      res.json(data);
    })
    .catch((err) => {
      res.status(401);
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
  const filter = { _id: req.params.id };
  const update = { ...req.body };
  const opts = { new: true };
  db.User.findOneAndUpdate(filter, update, opts).then((data) => {
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

module.exports = router;
