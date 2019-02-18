const router = require("express").Router();
const userController = require("../../controllers/usersController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/users"
router.route("/")
    .post(userController.createUser);

// Matches with "/api/users/:id"
router
    .route("/:id")
    .delete(userController.deleteUser);

router
    .route("/me")
    .get(isAuthenticated, function(req, res){
        res.json(req.user);
    })
    
module.exports = router;