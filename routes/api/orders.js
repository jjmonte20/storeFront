const router = require("express").Router();
const orderController = require("../../controllers/ordersController");

// matches with "/api/orders/user/:id"
router.route("/user/:id")
    .get(orderController.findAll)
    
// matches with "/api/orders/:id"
router.route("/:id")
    .get(orderController.findOneOrder)
    .post(orderController.createOrder)
    .delete(orderController.deleteOrder);

module.exports = router;
