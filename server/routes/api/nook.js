const router = require("express").Router();
const nookController = require("../../controllers/nook");

// Matches with '/api/nook/
router.route("/category/:category").get(nookController.getAllByCategory);
router.route("/villager/:name").get(nookController.getVillagerByName);
router.route("/category/:category/:name").get(nookController.getOneByCategory);

module.exports = router;
