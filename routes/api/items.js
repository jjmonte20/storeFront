const router = require("express").Router();
const itemController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
    .post(itemController.addItem);
// Matches with "/api/items/:id"
router.route("/:id")
    .delete(itemController.deleteItem);
    
module.exports = router;