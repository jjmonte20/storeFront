const router = require("express").Router();
const userController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
    .post(userController.createUser);

// Matches with "/api/users/:id"
router
    .route("/:id")
    .delete(userController.deleteUser);

module.exports = router;