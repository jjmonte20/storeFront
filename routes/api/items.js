const router = require("express").Router();
const itemController = require("../../controllers/itemsController");
    
// Matches with "/api/items/:id"
router.route("/:id")
    .post(itemController.addItem)
    .delete(itemController.deleteItem);
    
module.exports = router;