// const db = require('../models');

const login = async (req, res) => {
  res.json({ id: req.user.id });
};

router.get('/logout', (req,res) => {
  req.logout();
  res.redirect('/')
})

exports.login = login;
