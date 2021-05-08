const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/login", userRoutes);
router.use("/logout", userRoutes);
router.use("/signup", userRoutes);

module.exports = router;
