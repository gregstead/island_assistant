const router = require('express').Router();
const authRoutes = require('./auth');
const db = require('../../models');

router.use('/auth', authRoutes);

router.get('/users', (req, res) => {
  console.log('I work');
  db.User.find().then((users) => res.json(users));
});

router.post('/users', (req, res) => {
  console.log('I work');
  db.User.create({})
    .then((data) => {
      console.log('I work');
      res.json(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
