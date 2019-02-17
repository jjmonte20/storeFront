const router = require("express").Router();
const availableController = require("../../controllers/availableController");

// Matches with "/api/availableitems"
router.route("/")
    .get(availableController.findAll)
    .post(availableController.create)

module.exports = router;