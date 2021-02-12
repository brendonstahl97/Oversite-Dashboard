const router = require("express").Router();
const { post } = require("./authRoutes");
const authRoutes = require("./authRoutes");

// Post routes
router.use("/auth", authRoutes);

router.use("/test", ((req, res) => {
    console.table(req.body);
}));

module.exports = router;
