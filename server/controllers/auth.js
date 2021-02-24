// const db = require('../models');

const login = async (req, res) => {
  console.log("auth line 4");
  res.json(req.user);
};

exports.login = login;
