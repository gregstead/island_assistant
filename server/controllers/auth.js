// const db = require('../models');

const login = async (req, res) => {
  res.json({ id: req.user.id });
};

exports.login = login;
c;
