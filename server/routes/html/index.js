const router = require("express").Router();
const path = require("path");

router.get("/", (_req, res) => {
  res.sendFile("/index.html", { root: `${__dirname}/../../../client/public` });
});

module.exports = router;
