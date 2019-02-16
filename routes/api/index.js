const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const orderRoutes = require("./orders");
const itemRoutes = require("./items");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/items", itemRoutes);

module.exports = router;
