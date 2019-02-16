const router = require("express").Router();
const orderController = require("../../controllers/ordersController");

// matches with "/api/orders"
router.route("/")
    .get(orderController.findAll)
    .post(orderController.createOrder);

// matches with "/api/orders/:id"
router.route("/:id")
    .get(orderController.findOneOrder)
    .delete(orderController.deleteOrder);

module.exports = router;
