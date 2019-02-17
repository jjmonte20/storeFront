const router = require("express").Router();
const userRoutes = require("./users");
const orderRoutes = require("./orders");
const itemRoutes = require("./items");
const loginRoute = require("./login");
const logoutRoute = require("./logout");
const availRoutes = require("./availableItems");

// Book routes
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/items", itemRoutes);
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/availableitems", availRoutes);

module.exports = router;
